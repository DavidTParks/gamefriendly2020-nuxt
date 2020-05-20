<template>
  <div>{{gameSessions}}</div>
</template>

<script>
import gameSessions from '~/apollo/queries/gameSessions'
import { LOGIN_USER } from '~/apollo/mutations/loginUser'
export default {
  middleware: 'isAuth',
  apollo: {
    gameSessions: {
      query: gameSessions
    }
  }
}
</script>