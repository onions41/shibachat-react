// accessToken doesn't need to be a redux state as no UI depend on it
let accessToken = ""

export const setAccessToken = (s) => {
  accessToken = s
}

export const getAccessToken = () => {
  return accessToken
}
