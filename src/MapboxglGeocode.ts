import { ForwardGeocoding, GeocodeType, ReverseGeocoding } from './types/MapboxglGeocodeType'
import { checkAccessToken, getAccessToken } from './common'
import axios from 'axios'



class MapboxglGeocode {

  private static basicUrl = 'https://api.mapbox.com/geocoding'
  private static currentVersion = 'v5'

  private constructor() { }

  static async reverse(reverseOption: ReverseGeocoding) {
    checkAccessToken()
    const {
      endpoint = 'mapbox.places',
      longitude,
      latitude,
    } = reverseOption
    return (await axios.get(
      `${this.basicUrl}/${this.currentVersion}/${endpoint}/${longitude},${latitude}.json`, {
      params: {
        ...reverseOption,
        endpoint,
        access_token: getAccessToken() || '',
      }
    })).data as GeocodeType
  }

  static async forward({ endpoint = 'mapbox.places', searchText }: ForwardGeocoding) {
    checkAccessToken()
    return (await axios.get(
      `${this.basicUrl}/${this.currentVersion}/${endpoint}/${searchText}.json`,
      {
        params: {
          endpoint,
          searchText,
          access_token: getAccessToken() || '',
        }
      })).data as GeocodeType
  }
}

export default MapboxglGeocode
