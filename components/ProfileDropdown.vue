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
        <svg
          class="h-8 w-8 rounded-full text-gray-300 border border-gray-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
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