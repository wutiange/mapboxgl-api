import { checkAccessToken, getAccessToken, getMapboxglInstance } from './common'
import axios, { AxiosRequestConfig } from 'axios'
import { BatchForwardGeocoding, BatchReverseGeocoding, ForwardGeocoding, GeocodingResponseType, ReverseGeocoding } from '../types/GeocodingType'



class Geocoding {

  private static readonly path = 'geocoding/v5'

  private constructor() { }

  static async reverse(reverseOption: ReverseGeocoding, axiosConfig?: AxiosRequestConfig<any>) {
    checkAccessToken()
    const {
      endpoint = 'mapbox.places',
      longitude,
      latitude,
    } = reverseOption

    return (await getMapboxglInstance().get<GeocodingResponseType>(`${this.path}/${endpoint}/${longitude},${latitude}.json`, {
      ...axiosConfig,
      params: {
        ...reverseOption,
        endpoint,
        access_token: getAccessToken() || '',
      }
    })).data
  }

  static async forward({ endpoint = 'mapbox.places', searchText, ...otherOptions }: ForwardGeocoding, axiosConfig?: AxiosRequestConfig<any>) {
    checkAccessToken()
    return (await getMapboxglInstance().get<GeocodingResponseType>(
      `${this.path}/${endpoint}/${searchText}.json`,
      {
        ...axiosConfig,
        params: {
          endpoint,
          searchText,
          access_token: getAccessToken() || '',
          ...otherOptions
        }
      })).data
  }

  static async batchForward({ searchTexts, endpoint }: BatchForwardGeocoding, axiosConfig?: AxiosRequestConfig<any>) {
    checkAccessToken()
    if (endpoint && endpoint !== 'mapbox.places-permanent') {
      throw new Error('endpoint currently only supports mapbox places permanent.')
    }
    if (!Array.isArray(searchTexts)) {
      throw new Error('searchTexts are malformed')
    }
    const params = searchTexts.join(';')
    return (await getMapboxglInstance().get<GeocodingResponseType>(
      `${this.path}/mapbox.places-permanent/${params}.json`,
      {
        ...axiosConfig,
        params: {
          access_token: getAccessToken() || '',
        }
      })).data
  }

  static async batchReverse({ lngLats, endpoint }: BatchReverseGeocoding, axiosConfig?: AxiosRequestConfig<any>) {
    checkAccessToken()
    if (endpoint && endpoint !== 'mapbox.places-permanent') {
      throw new Error('endpoint currently only supports mapbox places permanent.')
    }
    if (!Array.isArray(lngLats)) {
      throw new Error(`The format of lng lats is incorrect, the data type you passed in is: ${typeof lngLats}, and what we need is array`)
    }
    const params = lngLats.map((lngLat) => lngLat.join(',')).join(';')
    return (await getMapboxglInstance().get<GeocodingResponseType>(
      `${this.path}/mapbox.places-permanent/${params}.json`,
      {
        ...axiosConfig,
        params: {
          access_token: getAccessToken() || '',
        }
      })).data
  }
}

export { Geocoding }
