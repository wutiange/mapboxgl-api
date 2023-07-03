import { checkAccessToken, getAccessToken, getMapboxglInstance } from './common'
import axios, { AxiosRequestConfig } from 'axios'
import { ForwardGeocoding, GeocodingResponseType, ReverseGeocoding } from '../types/GeocodingType'



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
}

export { Geocoding }
