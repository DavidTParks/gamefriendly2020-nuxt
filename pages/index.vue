<template>
  <div class="h-screen flex overflow-hidden bg-gray-900">
    <!-- Off-canvas menu for mobile -->
    <div class="md:hidden">
      <div class="fixed inset-0 flex z-40" v-show="openSideNav">
        <!--
        Off-canvas menu overlay, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
        -->
        <transition>
          <div class="fixed inset-0" v-show="openSideNav" @click="openSideNav = !openSideNav">
            <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
          </div>
        </transition>
        <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
        -->
        <transition
          enter-active-class="transition ease-in-out duration-300 transform"
          enter-class="-translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transition ease-in-out duration-300 transform"
          leave-class="translate-x-0"
          leave-to-class="-translate-x-full"
        >
          <div
            class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800"
            v-show="openSideNav"
          >
            <div class="absolute top-0 right-0 -mr-14 p-1">
              <button
                @click="openSideNav = !openSideNav"
                class="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
                aria-label="Close sidebar"
              >
                <svg
                  class="h-6 w-6 text-white"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="flex-shrink-0 flex items-center px-4">
              <p class="text-white">Beta</p>
              <h1 class="uppercase font-bold text-3xl uppercase text-pink-600">GameFriendly</h1>
            </div>
            <div class="mt-5 flex-1 h-0 overflow-y-auto">
              <nav class="px-2">
                <a
                  href="#"
                  class="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-white bg-gray-900 focus:outline-none focus:bg-gray-700 transition ease-in-out duration-150"
                >
                  <svg
                    class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
                    />
                  </svg>
                  Dashboard
                </a>
                <a
                  href="#"
                  class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150"
                >
                  <svg
                    class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Team
                </a>
                <a
                  href="#"
                  class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150"
                >
                  <svg
                    class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                  Projects
                </a>
                <a
                  href="#"
                  class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150"
                >
                  <svg
                    class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Calendar
                </a>
                <a
                  href="#"
                  class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150"
                >
                  <svg
                    class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                  Documents
                </a>
                <a
                  href="#"
                  class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150"
                >
                  <svg
                    class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Reports
                </a>
              </nav>
              <div class="bg-gray-700 mx-2 p-4 rounded-lg shadow mt-24">
                <p class="text-xl leading-tight font-medium text-white">
                  Join the
                  <span class="text-pink-600 font-bold">GameFriendly</span> community!
                </p>
                <p
                  class="flex text-sm leading-5 text-gray-500 mt-2"
                >Discover new games and friends from around the world.</p>
                <button
                  @click="showLoginModal = !showLoginModal"
                  type="button"
                  class="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-pink-600 hover:bg-pink-500 focus:outline-none focus:shadow-outline-gray focus:border-pink-700 active:bg-pink-700 transition duration-150 ease-in-out"
                >Sign Up</button>
              </div>
            </div>
          </div>
          <div class="flex-shrink-0 w-14">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </transition>
      </div>
    </div>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:flex-shrink-0">
      <div class="flex flex-col w-64 bg-gray-800 pt-5 pb-4">
        <div class="flex items-start flex-shrink-0 px-4 flex-col justify-center">
          <p class="text-gray-300 text-sm">Beta</p>
          <h1 class="uppercase font-bold text-3xl uppercase text-pink-600">GameFriendly</h1>
          <!-- <img class="h-8 w-auto" src="/img/logos/workflow-logo-on-brand.svg" alt="Workflow" /> -->
        </div>
        <div class="mt-5 h-0 flex-1 flex flex-col overflow-y-auto">
          <!-- Sidebar component, swap this element with another sidebar if you like -->
          <nav class="flex-1 px-2 bg-gray-800">
            <a
              href="#"
              class="group flex items-center px-2 py-2 text-sm leading-5 font-medium text-white rounded-md bg-gray-900 focus:outline-none focus:bg-gray-700 transition ease-in-out duration-150"
            >
              <svg
                class="mr-3 h-6 w-6 text-gray-400 group-focus:text-gray-300 transition ease-in-out duration-150"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
                />
              </svg>
              Dashboard
            </a>
            <a
              href="#"
              class="mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150"
            >
              <svg
                class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Team
            </a>
            <a
              href="#"
              class="mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150"
            >
              <svg
                class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                />
              </svg>
              Projects
            </a>
            <a
              href="#"
              class="mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150"
            >
              <svg
                class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Calendar
            </a>
            <a
              href="#"
              class="mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150"
            >
              <svg
                class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
              Documents
            </a>
            <a
              href="#"
              class="mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150"
            >
              <svg
                class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Reports
            </a>
            <div class="bg-gray-700 mx-2 p-4 rounded-lg shadow-md mt-24">
              <p class="text-xl leading-tight font-medium text-white">
                Join the
                <span class="text-pink-600 font-bold uppercase text-2xl">GameFriendly</span> community!
              </p>
              <p
                class="flex text-sm leading-5 text-gray-500 mt-2"
              >Discover new games and friends from around the world.</p>
              <button
                v-if="!isAuthenticated"
                @click="showLoginModal = !showLoginModal"
                type="button"
                class="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-pink-600 hover:bg-pink-500 focus:outline-none focus:shadow-outline-gray focus:border-pink-700 active:bg-pink-700 transition duration-150 ease-in-out"
              >Sign Up</button>
              <button
                v-else
                @click="newLobbyModal = !newLobbyModal"
                type="button"
                class="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-pink-600 hover:bg-pink-500 focus:outline-none focus:shadow-outline-gray focus:border-pink-700 active:bg-pink-700 transition duration-150 ease-in-out"
              >New Lobby</button>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <div class="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
        <button
          @click="openSideNav = !openSideNav"
          class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden cursor-pointer"
          aria-label="Open sidebar"
        >
          <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
        <div class="flex-1 px-4 flex justify-between">
          <div class="flex-1 flex">
            <div class="w-full flex md:ml-0">
              <label for="search_field" class="sr-only">Search</label>
              <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    />
                  </svg>
                </div>
                <input
                  id="search_field"
                  class="block w-full h-full pl-8 pr-3 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </div>
          </div>
          <div class="ml-4 flex items-center md:ml-6">
            <button
              class="p-1 text-gray-400 rounded-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:shadow-outline focus:text-gray-500"
              aria-label="Notifications"
            >
              <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>

            <ProfileDropdown v-if="isAuthenticated" />
            <button
              v-else
              @click="showLoginModal = !showLoginModal"
              type="button"
              class="relative ml-3 items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-pink-600 hover:bg-pink-500 focus:outline-none focus:shadow-outline-gray focus:border-pink-700 active:bg-pink-700 transition duration-150 ease-in-out"
            >Sign Up</button>
          </div>
        </div>
      </div>

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
                >Edit</button>
              </span>
              <span class="ml-3 shadow-sm rounded-md">
                <button
                  type="button"
                  class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-pink-600 hover:bg-pink-500 focus:outline-none focus:shadow-outline-gray focus:border-pink-700 active:bg-pink-700 transition duration-150 ease-in-out"
                >New Lobby</button>
              </span>
            </div>
          </div>
          <template v-if="$fetchState.pending">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 pt-6">
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
      <LoginModal @close="showLoginModal = false" :show-login-modal="showLoginModal" />
    </div>
  </div>
</template>

<script>
import gameSessions from '~/apollo/queries/gameSessions'
import { LOGIN_USER } from '~/apollo/mutations/loginUser'
import axios from 'axios'
export default {
  data() {
    return {
      openSideNav: false,
      profileOpen: false,
      showLoginModal: false,
      newLobbyModal: false,
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