<template>
  <div class="text-white">{{gameSessions}}</div>
</template>

<script>
import gameSessions from '~/apollo/queries/gameSessions'
export default {
  apollo: {
    gameSessions: {
      query: gameSessions
    }
  }
}
</script>