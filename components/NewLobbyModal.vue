<template>
  <div
    v-show="showLobbyModal"
    class="fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center z-50"
  >
    <!--
    Background overlay, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
    -->
    <transition
      enter-active-class="ease-out duration-300"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="ease-in duration-200"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div @click="closeModal" class="fixed inset-0 transition-opacity" v-show="showLobbyModal">
        <div class="absolute inset-0 bg-gray-900 opacity-75"></div>
      </div>
    </transition>

    <!--
    Modal panel, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      To: "opacity-100 translate-y-0 sm:scale-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100 translate-y-0 sm:scale-100"
      To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
    <transition
      enter-active-class="ease-out duration-300"
      enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      enter-to-class="opacity-100 translate-y-0 sm:scale-100"
      leave-active-class="ease-in duration-200"
      leave-class="opacity-100 translate-y-0 sm:scale-100"
      leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    >
      <div
        class="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-sm sm:w-full sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
        v-show="showLobbyModal"
      >
        <div>
          <Controller
            class="w-8 h-8 flex justify-center text-center items-center w-full text-pink-600"
          />
          <div class="mt-3 text-center sm:mt-5">
            <h3
              class="text-lg leading-6 font-medium text-gray-900 uppercase"
              id="modal-headline"
            >Create A New Lobby</h3>
            <div class="mt-2">
              <p class="text-sm leading-5 text-gray-500">Or sign up for free!</p>
            </div>
          </div>
        </div>
        <div class="mt-6">
          <form action="#" method="POST" @submit.prevent="onSubmit">
            <div>
              <label for="title" class="block text-sm font-medium leading-5 text-gray-700">Title</label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  v-model="title"
                  id="title"
                  type="text"
                  required
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div class="mt-6">
              <label for="game" class="block text-sm font-medium leading-5 text-gray-700">Game</label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  v-model.number="game"
                  id="game"
                  required
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <div class="mt-6">
              <label
                for="description"
                class="block text-sm font-medium leading-5 text-gray-700"
              >Description</label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  v-model="description"
                  id="description"
                  required
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <div class="mt-6">
              <label for="discord" class="block text-sm font-medium leading-5 text-gray-700">Discord</label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  v-model="discord"
                  id="discord"
                  required
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <div class="mt-6">
              <span class="block w-full rounded-md shadow-sm">
                <button
                  @cick="showLogin = true"
                  type="submit"
                  class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-500 focus:outline-none focus:border-pink-700 focus:shadow-outline-pink active:bg-pink-700 transition duration-150 ease-in-out"
                >Register</button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Controller from '~/assets/images/gamepad-solid.svg'
import { CREATE_GAME_SESSION } from '~/apollo/mutations/createGameSession'
export default {
  props: {
    showLobbyModal: {
      type: Boolean
    }
  },
  components: {
    Controller
  },
  data() {
    return {
      title: '',
      active: true,
      game: '',
      description: '',
      discord: '',
      showLogin: true,
      errors: false
    }
  },
  methods: {
    closeModal() {
      this.showLogin = true
      this.$emit('close')
    },
    openSignupModal() {
      this.showLogin = false
    },
    async onSubmit() {
      this.errors = false
      const { title, active, game, description, discord } = this.gameSession
      try {
        const { data } = await this.$apollo.mutate({
          mutation: CREATE_GAME_SESSION,
          variables: {
            title,
            active,
            game,
            description,
            discord
          }
        })
        this.closeModal()
        window.location.reload(true)
      } catch (e) {
        this.errors = true
        console.error(e)
      }
    },
    async signUp() {
      console.log('Signing up')
    }
  },
  computed: {
    gameSession() {
      return {
        title: this.title,
        active: this.active,
        game: this.game,
        description: this.description,
        discord: this.discord
      }
    }
  }
}
</script>