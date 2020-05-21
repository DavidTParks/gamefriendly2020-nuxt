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
        <div class="mt-6" v-if="showLogin">
          <form action="#" method="POST" @submit.prevent="onSubmit">
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-5 text-gray-700"
              >Email address</label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  v-model="email"
                  id="email"
                  type="email"
                  required
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div class="mt-6">
              <label
                for="password"
                class="block text-sm font-medium leading-5 text-gray-700"
              >Password</label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  v-model="password"
                  id="password"
                  type="password"
                  required
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div class="mt-6 flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember_me"
                  type="checkbox"
                  class="form-checkbox h-4 w-4 text-pink-600 transition duration-150 ease-in-out"
                />
                <label
                  for="remember_me"
                  class="ml-2 block text-sm leading-5 text-gray-900"
                >Remember me</label>
              </div>

              <div class="text-sm leading-5">
                <a
                  href="#"
                  class="font-medium text-pink-600 hover:text-pink-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                >Forgot your password?</a>
              </div>
            </div>

            <div class="mt-6">
              <span class="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-500 focus:outline-none focus:border-pink-700 focus:shadow-outline-pink active:bg-pink-700 transition duration-150 ease-in-out"
                >Create</button>
              </span>
            </div>
          </form>
        </div>
        <div class="mt-6" v-else>
          <form action="#" method="POST" @submit.prevent="signUp">
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-5 text-gray-700"
              >Email address</label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  v-model="email"
                  id="email"
                  type="email"
                  required
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div class="mt-6">
              <label
                for="password"
                class="block text-sm font-medium leading-5 text-gray-700"
              >Password</label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  v-model="password"
                  id="password"
                  type="password"
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
import { LOGIN_USER } from '~/apollo/mutations/loginUser'
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
      email: '',
      password: '',
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
      const { email, password } = this.credentials
      try {
        const { data } = await this.$apollo.mutate({
          mutation: LOGIN_USER,
          variables: {
            email,
            password
          }
        })
        await this.$apolloHelpers.onLogin(data.loginUser.token)
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
    credentials() {
      return {
        email: this.email,
        password: this.password
      }
    }
  }
}
</script>