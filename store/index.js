export const state = () => ({
  authToken: '',
  client: {}
})

export const mutations = {
  setAuthToken(state, token) {
    state.authToken = token
  },
  setClient(state, client) {
    state.client = client
  }
}
