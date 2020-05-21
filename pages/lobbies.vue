<template>
  <main class="flex-1 relative z-0 overflow-y-auto py-6 focus:outline-none" tabindex="0">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <h1 class="text-2xl font-semibold text-white">Lobbies</h1>
      <div class="text-white">{{gameSessions}}</div>
    </div>
  </main>
</template>

<script>
import gql from 'graphql-tag'
import { GAME_SESSIONS_BY_GAME } from '~/apollo/queries/gameSessionsByGame.js'
export default {
  data() {
    return {
      gameSessions: []
    }
  },
  watch: {
    '$route.query': '$fetch'
  },
  async fetch() {
    const client = this.$apollo.getClient()
    console.log('Inside fetch')
    if (this.$route.query.game) {
      console.log(this.$route.query.game)
      console.log('Route has game query')
      const { data } = await client.query({
        query: GAME_SESSIONS_BY_GAME,
        variables: {
          game: parseInt(this.$route.query.game)
        }
      })
      this.gameSessions = data.gameSessionByGame
    }
  }
}
</script>