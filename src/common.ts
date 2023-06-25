let access_token: string | null = null

export const setAccessToken = (token: string) => {
  access_token = token
}

export const getAccessToken = () => {
  return access_token
}

export function checkAccessToken() {
  if (!access_token) {
    throw new Error('MapboxglGeocode access_token is not set')
  }
}