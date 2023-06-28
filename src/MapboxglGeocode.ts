import qs from 'qs'
import { ForwardGeocoding, GeocodeType, ReverseGeocoding } from './types/MapboxglGeocodeType'
import { checkAccessToken, getAccessToken } from './common'
import axios from 'axios'



class MapboxglGeocode {

  private static basicUrl = 'https://api.mapbox.com/geocoding'
  private static currentVersion = 'v5'

  private constructor() {}

  static async reverse(reverseOption: ReverseGeocoding) {
    checkAccessToken()
    const {
      endpoint = 'mapbox.places',
      longitude,
      latitude,
      reverseMode,
      limit,
      routing,
      ...otherParams
    } = reverseOption
    const params: Record<string, string> = {
      access_token: getAccessToken() || '',
    }
    if (reverseMode) {
      params.reverseMode = reverseMode
    }
    if (limit) {
      params.limit = limit.toString()
    }
    if (routing) {
      params.routing = routing.toString()
    }
    const query = qs.stringify({
      ...params,
      ...otherParams,
    })
    return (await axios.get(
      `${this.basicUrl}/${this.currentVersion}/${endpoint}/${longitude},${latitude}.json?${query}`,
    )).data as GeocodeType
  }

  static async forward({ endpoint = 'mapbox.places', searchText }: ForwardGeocoding) {
    checkAccessToken()
    return (await axios.get(
      `${this.basicUrl}/${this.currentVersion}/${endpoint}/${searchText}.json?access_token=${getAccessToken()}`,
    )).data as GeocodeType
  }
}

export default MapboxglGeocode
