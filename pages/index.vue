<template>
  <div class="min-h-screen bg-gray-100">
    <Hero />
    {{gameSessions}}
  </div>
</template>

<script>
import gameSessions from '~/apollo/queries/gameSessions'
import { LOGIN_USER } from '~/apollo/mutations/loginUser'
export default {
  apollo: {
    gameSessions: {
      query: gameSessions
    }
  },
  middleware: 'isAuth'
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
