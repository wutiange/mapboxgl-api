import { checkAccessToken, getAccessToken, mapboxglInstance } from './common'
import axios from 'axios'
import { ForwardGeocoding, GeocodeType,ReverseGeocoding } from '../types/MapboxglGeocodeType'



class MapboxglGeocode {

  private static readonly path = 'geocoding/v5'

  private constructor() { }

  static async reverse(reverseOption: ReverseGeocoding) {
    checkAccessToken()
    const {
      endpoint = 'mapbox.places',
      longitude,
      latitude,
    } = reverseOption

    return (await mapboxglInstance.get<GeocodeType>(`${this.path}/${endpoint}/${longitude},${latitude}.json`, {
      params: {
        ...reverseOption,
        endpoint,
        access_token: getAccessToken() || '',
      }
    })).data
  }

  static async forward({ endpoint = 'mapbox.places', searchText }: ForwardGeocoding) {
    checkAccessToken()
    return (await axios.get<GeocodeType>(
      `${this.path}/${endpoint}/${searchText}.json`,
      {
        params: {
          endpoint,
          searchText,
          access_token: getAccessToken() || '',
        }
      })).data
  }
}

export { MapboxglGeocode }
