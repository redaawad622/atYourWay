<template>
  <div>
    <v-list v-if="$auth.loggedIn">
      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{ $auth.user.name }}</v-list-item-title
          >
          <v-list-item-subtitle v-if="$auth.user.email">{{
            $auth.user.email
          }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-icon>mdi-menu-down</v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list nav >
      <v-list-item color="primary" link :to="items[0].link">
        <v-list-item-icon>
          <v-icon v-text="items[0].icon"></v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="items[0].text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <template v-for="menu in mainMenu">
        <v-list-group
          :key="menu.name"
          v-if="menu.children && menu.children.length > 0"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title
                @click="$router.push(`/categories/${menu.slug}`)"
                v-text="menu.name"
              ></v-list-item-title>
            </v-list-item-content>
          </template>
          <template v-for="sub in menu.children">
            <v-list-group
              :key="sub.name"
              v-if="sub.children && sub.children.length > 0"
               sub-group
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title
                    @click="$router.push(`/categories/${sub.slug}`)"
                    v-text="sub.name"
                  ></v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item
                color="primary"
                link
                v-for="subSub in sub.children"
                :to="`/categories/${subSub.slug}`"
                :key="subSub.name"
              >
                <v-list-item-icon v-if="subSub.icon">
                  <v-icon v-text="subSub.icon"></v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title v-text="subSub.name"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
            <v-list-item
              color="primary"
              link
              :to="`/categories/${sub.slug}`"
              v-else
              :key="sub.name"
            >
              <v-list-item-icon v-if="sub.icon">
                <v-icon v-text="sub.icon"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-text="sub.name"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list-group>
        <v-list-item
          color="primary"
          link
          :to="`/categories/${menu.slug}`"
          v-else
          :key="menu.name"
        >
          <v-list-item-icon v-if="menu.icon">
            <v-icon v-text="menu.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="menu.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-list-item color="primary" link :to="items[1].link">
        <v-list-item-icon>
          <v-icon v-text="items[1].icon"></v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="items[1].text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { text: 'Home', icon: 'mdi-home', link: '/' },
      { text: 'contact us', icon: 'mdi-phone', link: '/contactUs' },
    ],
  }),

  computed: {
    mainMenu() {
      return this.$store.getters['setting/mainMenu']
    },
  },
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
