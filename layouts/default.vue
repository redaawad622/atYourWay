<template>
  <v-app>
    <v-app-bar app fixed :color="barColor" flat>
      <ul class="appMenu align-center" v-if="$vuetify.breakpoint.mdAndUp">
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
      <nuxt-link
        to="/"
        class="text-decoration-none secondary--text font-weight-black headline"
        >Ayw</nuxt-link
      >

      <v-spacer />
      <v-menu
        offset-y
        bottom
        origin="center center"
        transition="scale-transition"
        :close-on-content-click="false"
        :nudge-bottom="8"
        tile
        contentClass="noShadow"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon color="#333">mdi-magnify</v-icon>
          </v-btn>
        </template>
        <v-sheet class="pa-8" width="400px">
          <v-autocomplete
            placeholder="search..."
            append-icon="mdi-magnify"
          ></v-autocomplete>
        </v-sheet>
      </v-menu>
      <v-menu
        offset-y
        tile
        :nudge-bottom="8"
        origin="center center"
        transition="scale-transition"
        bottom
        contentClass="noShadow"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon color="#333">mdi-account-circle-outline</v-icon>
          </v-btn>
        </template>
        <v-list v-if="$auth.loggedIn" min-width="200px" >
          <v-list-item to="/user/account">
            <v-list-item-content>{{ $auth.user.name }}</v-list-item-content>
          </v-list-item>
          <v-list-item to="/user/wishlist">
            <v-list-item-content>wishlist</v-list-item-content>
          </v-list-item>
        </v-list>
        <v-sheet v-else width="250px" class="pa-8">
          <v-btn
            block
            to="/login"
            exact
            outlined
            color="primary"
            class="mb-4"
            tile
            >Sign in</v-btn
          >
          <v-btn to="/login?sign=true" block outlined color="primary" tile
            >Sign Up</v-btn
          >
        </v-sheet>
      </v-menu>
      <cart></cart>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon color="#333">mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <quickview></quickview>
      <image-pop></image-pop>
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
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppFooter from '~/components/common/appFooter.vue'
import Cart from '~/components/common/Cart.vue'
import ImagePop from '~/components/common/imagePop.vue'
import Quickview from '~/components/products/quickview.vue'
import topMenu from '~/components/topMenu.vue'
export default {
  name: 'Default',

  components: { topMenu, Quickview, Cart, AppFooter, ImagePop },

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
.noShadow {
  box-shadow: none;
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
.appMenu {
  list-style: none;
  display: flex;
}
.nativeSelect {
  width: 200px;
  box-shadow: 0 0 0;
  border: 1px solid #ebebeb;
  height: 40px;
  -webkit-appearance: none;
  background: #fff
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAPklEQVR4Ae3TwREAEBQD0V/6do4SXPZg7EsBhsQ8IEmSMOsiuEfg3gL3oXC7wK0bd1G4o8X9F4yIkyQfSrIByQBjp7QuND8AAAAASUVORK5CYII=)
    no-repeat scroll right 0.5rem center/1.25rem 1.25rem;
  padding: 0 0.5rem;
}
.nativeSelect:focus {
  outline: 1px solid var(--v-primary-base);
}
</style>
