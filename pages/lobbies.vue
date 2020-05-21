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
export default {
  data() {
    return {
      gameSessions: []
    }
  },
  async fetch() {
    const client = this.$apollo.getClient()
    const { data } = await client.query({
      query: gql`
        {
          gameSessions {
            id
            title
            active
            game
            description
            discord
            updatedAt
            createdAt
            user {
              id
              name
              email
              username
            }
          }
        }
      `
    })
    this.gameSessions = data.gameSessions
  }
}
</script>