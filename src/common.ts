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
const Timeout = 10000
let mapboxglInstance = axios.create({
  baseURL: BaseURL,
  timeout: Timeout,
})

function setTimeout(timeout: number) {
  mapboxglInstance = axios.create({
    baseURL: BaseURL,
    timeout,
  })
}

function getMapboxglInstance() {
  return mapboxglInstance
}

const MapboxGL = {
  setAccessToken,
  setTimeout
}

export { getMapboxglInstance, checkAccessToken, getAccessToken, MapboxGL }