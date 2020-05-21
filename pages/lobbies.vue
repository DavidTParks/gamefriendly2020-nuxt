<template>
  <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabindex="0">
    <template v-if="$fetchState.pending">
      <content-placeholders :rounded="true">
        <content-placeholders-img />
      </content-placeholders>
    </template>
    <template v-else>
      <div class="relative">
        <img
          class="h-64 w-full object-cover"
          v-if="selectedGame"
          :src="selectedGame.background_image"
        />
      </div>
    </template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-6">
      <h1 class="text-2xl font-semibold text-white">Lobbies for</h1>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <!-- Replace with your content -->
      <div class="md:flex md:items-center md:justify-between">
        <div class="flex-1 min-w-0">
          <template v-if="$fetchState.pending">
            <content-placeholders :rounded="true">
              <content-placeholders-heading />
            </content-placeholders>
          </template>
          <template v-else>
            <h2
              class="text-2xl font-bold leading-7 text-pink-600 sm:text-3xl sm:leading-9 sm:truncate"
            >{{selectedGame.name}}</h2>
          </template>
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
              @click="openLobbyModal"
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
        <div
          class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-4"
          v-if="gameSessions.length > 0"
        >
          <template v-for="game in gameSessions">{{game}}</template>
        </div>
        <div v-else class="flex items-center justify-center w-full h-full mt-36">
          <p
            class="text-white text-2xl font-semibold text-white max-w-lg text-center"
          >Uh oh! There doesn't appear to be any game lobbies for {{selectedGame.name}}</p>
        </div>
      </template>
    </div>
  </main>
</template>

<script>
import gql from 'graphql-tag'
import { GAME_SESSIONS_BY_GAME } from '~/apollo/queries/gameSessionsByGame.js'
import axios from 'axios'
export default {
  data() {
    return {
      gameSessions: [],
      selectedGame: {}
    }
  },
  middleware: 'isAuth',
  watch: {
    '$route.query': '$fetch'
  },
  async fetch() {
    let { data } = await axios.get(
      `https://rawg.io/api/games/${this.$route.query.game}`
    )
    this.selectedGame = data
    const client = this.$apollo.getClient()
    if (this.$route.query.game) {
      const { data } = await client.query({
        query: GAME_SESSIONS_BY_GAME,
        variables: {
          game: parseInt(this.$route.query.game)
        }
      })
      this.gameSessions = data.gameSessionByGame
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
    },
    currentGames() {
      return this.$store.state.currentGames
    }
  }
}
</script>