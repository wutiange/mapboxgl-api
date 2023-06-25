import qs from 'qs'
import { GeocodeType } from './types/MapboxglGeocodeType'
import { checkAccessToken, getAccessToken } from './common'

export type ReverseGeocoding = {
  endpoint?: 'mapbox.places' | 'mapbox.places-permanent'
  longitude: number
  latitude: number
  country?: string
  language?: string
  types?: string
  reverseMode?: 'distance' | 'score' | 'limit'
  limit?: number
  routing?: boolean
  worldview?: string
}

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
    return fetch(
      `${this.basicUrl}/${this.currentVersion}/${endpoint}/${longitude},${latitude}.json?${query}`,
    )
      .then(res => res.json()) as Promise<GeocodeType>
  }

  static async forward({ endpoint = 'mapbox.places', searchText }: {
    endpoint?: 'mapbox.places' | 'mapbox.places-permanent' 
    searchText: string
  }) {
    checkAccessToken()
    return fetch(
      `${this.basicUrl}/${this.currentVersion}/${endpoint}/${searchText}.json?access_token=${getAccessToken()}`,
    )
      .then(res => res.json()) as Promise<GeocodeType>
  }
}

export default MapboxglGeocode
