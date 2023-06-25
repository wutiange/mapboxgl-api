import qs from 'qs'
import { GeocodeType } from './types/MapboxglGeocodeType'

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
  private static access_token?: string

  private constructor() {}

  static setAccessToken(access_token?: string) {
    MapboxglGeocode.access_token = access_token
  }

  static checkAccessToken() {
    if (!MapboxglGeocode.access_token) {
      throw new Error('MapboxglGeocode access_token is not set')
    }
  }

  static async reverse(reverseOption: ReverseGeocoding) {
    MapboxglGeocode.checkAccessToken()
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
      access_token: MapboxglGeocode.access_token || '',
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
    MapboxglGeocode.checkAccessToken()
    return fetch(
      `${this.basicUrl}/${this.currentVersion}/${endpoint}/${searchText}.json?access_token=${MapboxglGeocode.access_token}`,
    )
      .then(res => res.json()) as Promise<GeocodeType>
  }
}

export default MapboxglGeocode
