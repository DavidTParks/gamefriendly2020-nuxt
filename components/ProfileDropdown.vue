<template>
  <!-- Profile dropdown -->
  <div class="ml-3 relative z-10">
    <div>
      <button
        @click="profileOpen = !profileOpen"
        class="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:shadow-outline"
        id="user-menu"
        aria-label="User menu"
        aria-haspopup="true"
      >
        <img
          class="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt
        />
      </button>
    </div>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-show="profileOpen"
        class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
      >
        <div
          class="py-1 rounded-md bg-white shadow-xs"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu"
        >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
            role="menuitem"
          >Your Profile</a>
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
            role="menuitem"
          >Settings</a>
          <a
            @click="signOut"
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
            role="menuitem"
          >Sign out</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profileOpen: false
    }
  },
  methods: {
    async signOut() {
      this.$apolloHelpers.onLogout()
      window.location.reload(true)
    }
  }
}
</script>