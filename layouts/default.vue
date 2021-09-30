<template>
  <v-app>
    <v-app-bar app fixed :color="barColor" flat>
      <ul class="appMenu" v-if="$vuetify.breakpoint.mdAndUp">
        <li class="pe-4">
          <nuxt-link to="/" class="link">home</nuxt-link>
        </li>
        <top-menu
          v-for="(item, k) in mainMenu"
          :key="`main${k}`"
          :menu="item"
        ></top-menu>
      </ul>
      <v-btn v-else icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <img :src="require('~/assets/logo.jpeg')" />

      <v-spacer />
      <v-menu offset-y :close-on-content-click="false">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </template>
        <v-sheet class="pa-8" width="400px">
          <v-autocomplete
            placeholder="search..."
            append-icon="mdi-magnify"
          ></v-autocomplete>
        </v-sheet>
      </v-menu>
      <v-menu offset-y tile class="elevation-0">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>
        <v-sheet width="250px" class="pa-8">
          <v-btn block outlined color="primary" class="mb-4" tile
            >Sign in</v-btn
          >
          <v-btn block outlined color="primary" tile>Sign Up</v-btn>
        </v-sheet>
      </v-menu>
      <v-menu offset-y tile class="elevation-0">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-badge color="primary" content="0" offset-x="10" offset-y="10">
              <v-icon>mdi-cart</v-icon>
            </v-badge>
          </v-btn>
        </template>
        <v-sheet width="250px" class="pa-8"> No Product In The Cart </v-sheet>
      </v-menu>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import topMenu from '~/components/topMenu.vue'
export default {
  name: 'Default',

  components: { topMenu },

  data() {
    return {
      scrollTop: 0,
      clipped: false,
      drawer: false,
      fixed: false,

      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },

        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  async fetch() {
    await this.$store.dispatch('setting/getMainMenu')
  },
  fetchOnServer: false,

  computed: {
    mainMenu() {
      return this.$store.getters['setting/mainMenu']
    },
    changeBar() {
      return this.scrollTop > 60 && this.$vuetify.breakpoint.mdAndUp
    },
    barColor() {
      return this.changeBar ? '#eff2f6' : '#fff'
    },
  },
  methods: {
    onScroll() {
      this.scrollTop = 65
    },
  },
}
</script>

<style>
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
.appMenu {
  list-style: none;
  display: flex;
}
</style>
