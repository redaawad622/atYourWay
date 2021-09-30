<template>
  <v-menu bottom origin="center center" transition="scale-transition" offset-y>
    <template v-slot:activator="{ on, attrs }">
      <li class="px-4 link" v-bind="attrs" v-on="on">
        <span>{{ menu.name }}<v-icon small>mdi-chevron-down</v-icon></span>
      </li>
    </template>
    <ul v-if="menu.children && menu.children.length > 0" class="d-flex ul-level2">
      <v-row>
        <li
          :class="`px-5 col-12 blueText col-md-${12/menu.children.length}`"
          style="min-width: 220px"
          v-for="sub in menu.children"
          :key="sub.id + 'subM'"
        >
          <nuxt-link :to="'/' + sub.slug" class="link">{{
            sub.name
          }}</nuxt-link>
          <ul v-if="sub.children && sub.children.length > 0" class="ul-level3">
            <li
              class="px-5"
              v-for="subSub in sub.children"
              :key="subSub.id + 'subSubm'"
            >
              <nuxt-link :to="'/' + subSub.slug" class="link">{{
                subSub.name
              }}</nuxt-link>
            </li>
          </ul>
        </li>
      </v-row>
    </ul>
  </v-menu>
</template>

<script>
export default {
  name: 'TopMenu',
  props: ['menu'],
}
</script>
<style scoped>
ul{
  list-style: none;
  padding: 0;
  margin: 0;
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
  font-weight: 600;
  line-height: 60px;
  text-transform: uppercase;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
}
.link:hover,
.link:hover .v-icon.v-icon {
  text-decoration: none;
  color: var(--v-primary-base);
}
.blueText {
  border-bottom: 1px solid #ebebeb;
  color: #142165;
  font-size: 16px;
  font-weight: 600;
  position: relative;
}
</style>
