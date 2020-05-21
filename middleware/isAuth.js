export default function({ app, error, redirect, store }) {
  const hasToken = !!app.$apolloHelpers.getToken()
  if (hasToken) {
    store.commit('setAuthToken', app.$apolloHelpers.getToken())
  }
  //   if (!hasToken) {
  //     error({ errorCode: 503, message: 'You are not allowed to see this' })
  //     return redirect('/')
  //   } else {

  //   }
}
