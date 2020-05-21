<template>
  <main class="flex-1 relative z-0 overflow-y-auto py-6 focus:outline-none" tabindex="0">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <h1 class="text-2xl font-semibold text-white">Browse</h1>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <!-- Replace with your content -->
      <div class="md:flex md:items-center md:justify-between">
        <div class="flex-1 min-w-0">
          <h2
            class="text-2xl font-bold leading-7 text-pink-600 sm:text-3xl sm:leading-9 sm:truncate"
          >Featured Games</h2>
        </div>
        <div class="mt-4 flex md:mt-0 md:ml-4">
          <span class="shadow-sm rounded-md">
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out"
            >Sort By</button>
          </span>
          <span class="ml-3 shadow-sm rounded-md" v-if="isAuthenticated">
            <button
              @click="showLobbyModal"
              type="button"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-pink-600 hover:bg-pink-500 focus:outline-none focus:shadow-outline-gray focus:border-pink-700 active:bg-pink-700 transition duration-150 ease-in-out"
            >New Lobby</button>
          </span>
        </div>
      </div>
      <template v-if="$fetchState.pending">
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
          <content-placeholders v-for="n in 9" :rounded="true" :key="n">
            <content-placeholders-img />
            <content-placeholders-heading />
          </content-placeholders>
        </div>
      </template>
      <template v-else>
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
          <template v-for="game in popularGames">
            <GameCard :game="game" :key="game.id" />
          </template>
        </div>
      </template>
      <!-- /End replace -->
    </div>
  </main>
</template>

<script>
import gameSessions from '~/apollo/queries/gameSessions'
import { LOGIN_USER } from '~/apollo/mutations/loginUser'
import axios from 'axios'
export default {
  data() {
    return {
      popularGames: []
    }
  },
  middleware: 'isAuth',
  async fetch() {
    try {
      let { data } = await axios.get(
        'https://rawg.io/api/games?ordering=-added&tags=multiplayer&dates=2015-01-01%2C2020-12-31&page=1&page_size=40&filter=true&comments=true'
      )
      this.popularGames = data.results
    } catch (e) {
      console.log(e)
    }
  },
  methods: {
    closeLobbyModal() {
      this.$store.commit('setLobbyModal', false)
    },
    openLobbyModal() {
      this.$store.commit('setLobbyModal', true)
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.state.authToken.length > 0
    }
  }
}
</script>

<style lang="scss">
html {
  font-family: 'Kanit', sans-serif;
}

$vue-content-placeholders-primary-color: #2d3748 !default;
$vue-content-placeholders-secondary-color: #2d3748 !default;
$vue-content-placeholders-border-radius: 6px !default;
$vue-content-placeholders-line-height: 15px !default;
$vue-content-placeholders-spacing: 10px !default;

// Animations
@keyframes vueContentPlaceholdersAnimation {
  0% {
    transform: translate3d(-30%, 0, 0);
  }

  100% {
    transform: translate3d(100%, 0, 0);
  }
}

// Mixins
@mixin vue-content-placeholders {
  position: relative;
  overflow: hidden;
  height: $vue-content-placeholders-line-height;
  background: $vue-content-placeholders-secondary-color;

  .vue-content-placeholders-is-rounded & {
    border-radius: $vue-content-placeholders-border-radius;
  }

  .vue-content-placeholders-is-centered & {
    margin-left: auto;
    margin-right: auto;
  }

  .vue-content-placeholders-is-animated &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    max-width: 1000px;
    height: 100%;
    background: linear-gradient(
      to right,
      transparent 0%,
      darken($vue-content-placeholders-secondary-color, 5%) 15%,
      transparent 30%
    );
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: vueContentPlaceholdersAnimation;
    animation-timing-function: linear;
  }
}

@mixin vue-content-placeholders-spacing {
  [class^='vue-content-placeholders-'] + & {
    margin-top: 2 * $vue-content-placeholders-spacing;
  }
}

// Styles
.vue-content-placeholders-heading {
  @include vue-content-placeholders-spacing;
  display: flex;

  &__img {
    @include vue-content-placeholders;
    width: 2 * $vue-content-placeholders-line-height + 3 *
      $vue-content-placeholders-spacing;
    height: 2 * $vue-content-placeholders-line-height + 3 *
      $vue-content-placeholders-spacing;
    margin-right: 1.5 * $vue-content-placeholders-spacing;
  }

  &__content {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
  }

  &__title {
    @include vue-content-placeholders;
    width: 85%;
    margin-bottom: $vue-content-placeholders-spacing;
    background: $vue-content-placeholders-primary-color;
  }

  &__subtitle {
    @include vue-content-placeholders;
    width: 90%;
  }
}

.vue-content-placeholders-text {
  @include vue-content-placeholders-spacing;

  &__line {
    @include vue-content-placeholders;
    width: 100%;
    margin-bottom: $vue-content-placeholders-spacing;

    &:nth-child(4n + 1) {
      width: 80%;
    }

    &:nth-child(4n + 2) {
      width: 100%;
    }

    &:nth-child(4n + 3) {
      width: 70%;
    }

    &:nth-child(4n + 4) {
      width: 85%;
    }
  }
}

.vue-content-placeholders-img {
  @include vue-content-placeholders;
  @include vue-content-placeholders-spacing;
  width: 100%;
  height: 120px;
}
</style>