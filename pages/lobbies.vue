<template>
  <div class="text-white">{{gameSessions}}</div>
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
            updatedAt
            createdAt
          }
        }
      `
    })
    this.gameSessions = data.gameSessions
  }
}
</script>