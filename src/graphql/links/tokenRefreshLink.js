// Module imports
import { TokenRefreshLink } from 'apollo-link-token-refresh'
import jwtDecode from 'jwt-decode'

// Internal imports
import { getAccessToken, setAccessToken } from '../../accessToken'

const tokenRefreshLink = new TokenRefreshLink({
  accessTokenField: 'accessToken',
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
      method: 'POST',
      credentials: 'include'
    })
  },
  handleFetch: (newAccessToken) => {
    setAccessToken(newAccessToken)
  },
  handleError: (err) => {
    console.warn('Your refresh token is invalid. Try to relogin')
    console.error(err)
  }
})

export default tokenRefreshLink
