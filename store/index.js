export const state = () => ({
  authToken: '',
  showLobbyModal: false,
  currentGames: []
})

export const mutations = {
  setAuthToken(state, token) {
    state.authToken = token
  },
  setClient(state, client) {
    state.client = client
  },
  setLobbyModal(state, showLobbyModal) {
    state.showLobbyModal = showLobbyModal
  },
  setCurrentGames(state, games) {
    state.currentGames = games
  }
}
