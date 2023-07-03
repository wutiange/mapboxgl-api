import axios from 'axios'

let access_token: string | null = null

const setAccessToken = (token: string) => {
  access_token = token
}

const getAccessToken = () => {
  return access_token
}

function checkAccessToken() {
  if (!access_token) {
    throw new Error('MapboxglGeocode access_token is not set')
  }
}

const BaseURL = 'https://api.mapbox.com/'
const TimeOut = 10000
const mapboxglInstance = axios.create({
  baseURL: BaseURL,
  timeout: TimeOut,
})

export { mapboxglInstance, checkAccessToken, getAccessToken, setAccessToken }