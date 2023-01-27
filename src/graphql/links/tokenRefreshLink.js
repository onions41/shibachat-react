// Module imports
import { TokenRefreshLink } from "apollo-link-token-refresh"
import jwtDecode from "jwt-decode"

// Internal imports
import { getAccessToken } from "../../accessToken"
import store from "../../store/store"
import { loginAction, logoutAction } from "../../store/authSlice"

const tokenRefreshLink = new TokenRefreshLink({
  accessTokenField: "accessToken",
  isTokenValidOrUndefined: () => {
    const accessToken = getAccessToken()

    if (!accessToken) {
      return true
    }

    try {
      const { exp } = jwtDecode(accessToken)
      if (Date.now() >= exp * 1000) {
        return false
      } else {
        return true
      }
    } catch {
      return false
    }
  },
  fetchAccessToken: () => {
    return fetch(process.env.REACT_APP_REFRESH_SERVER_URL, {
      method: "POST",
      credentials: "include"
    })
  },
  handleFetch: (newAccessToken) => {
    // newAccessToken will be '' if refresh token was invalid or null
    // and if it is '' that will throw on error and goes to handleError below
    console.log("***TokenRefreshLink fetched new tokens")
    store.dispatch(loginAction(newAccessToken))
  },
  handleError: (error) => {
    // error thrown in fetchAccessToken
    console.warn("***TokenRefreshLink could not fetch new tokens", error)
    store.dispatch(logoutAction())
  }
})

export default tokenRefreshLink
