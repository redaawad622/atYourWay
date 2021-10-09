<template>
  <v-menu
    bottom
    origin="center center"
    transition="scale-transition"
    tile
    offset-y
    :nudge-bottom="14"
    contentClass="catsMenu"
    open-on-hover
    :close-delay="100"
  >
    <template v-slot:activator="{ on, attrs }">
      <li class="px-4 link" v-bind="attrs" v-on="on" >
        <nuxt-link class="link" :to="`/${menu.slug}`">{{ menu.name }}<v-icon small>mdi-chevron-down</v-icon></nuxt-link>
      </li>
    </template>
    <ul
      v-if="menu.children && menu.children.length > 0 && hasSubs(menu.children)"
      class="d-flex ul-level2"
    >
      <v-row>
        <li
          :class="`px-5 col-12 blueText col-md-${12 / menu.children.length}`"
          style="min-width: 220px"
          v-for="sub in menu.children"
          :key="sub.id + 'subM'"
        >
          <nuxt-link
            :to="'/' + sub.slug"
            class="link"
            :class="{ hasSub: sub.children.length > 0 }"
            >{{ sub.name }}</nuxt-link
          >
          <ul v-if="sub.children && sub.children.length > 0" class="ul-level3">
            <li v-for="subSub in sub.children" :key="subSub.id + 'subSubm'">
              <nuxt-link :to="'/' + subSub.slug" class="link">{{
                subSub.name
              }}</nuxt-link>
            </li>
          </ul>
        </li>
      </v-row>
    </ul>
    <ul v-else class="ul-level1">
      <li v-for="sub in menu.children" :key="sub.id + 'subM'">
        <nuxt-link :to="'/' + sub.slug" class="link">{{ sub.name }}</nuxt-link>
      </li>
    </ul>
  </v-menu>
</template>

<script>
export default {
  name: 'TopMenu',
  props: ['menu'],
  methods: {
    hasSubs(children) {
      let sub = false
      children.forEach((element) => {
        if (element.children && element.children.length < 1) {
          sub = false
        } else {
          sub = true
        }
      })
      return sub
    },
  },
}
</script>
<style scoped lang="scss">
.catsMenu {
  box-shadow: none;
}
ul {
  list-style: none;
  padding: 0;
  background: #fff;
  margin: 0;
}
.ul-level2,
.ul-level1 {
  padding: 15px 20px;
}
.ul-level3 {
  display: flex;
  flex-direction: column;
}

.link {
  text-decoration: none;
  color: #333;
  display: block;
  font-size: 14px;
  font-weight: 500;
  line-height: 35px;
  white-space: nowrap;
  text-transform: capitalize;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
}
.link:hover,
.link:hover .v-icon.v-icon {
  text-decoration: none;
  color: var(--v-primary-base);
}
.blueText {
  color: var(--v-secondary-base);
  font-size: 16px;
  font-weight: 600;
  position: relative;
  > a {
    color: var(--v-secondary-base);
    border-bottom: 1px solid #ebebeb;
  font-weight: 600;

  }
}
</style>
