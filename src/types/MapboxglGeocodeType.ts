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

export type ForwardGeocoding = {
  endpoint?: 'mapbox.places' | 'mapbox.places-permanent'
  searchText: string
}



export interface GeocodeType {
  type: string;
  query: string[];
  features: Feature[];
  attribution: string;
}

export interface Feature {
  id: string;
  type: string;
  place_type: string[];
  relevance: number;
  properties: Properties;
  text: string;
  place_name: string;
  matching_place_name: string;
  center: number[];
  geometry: Geometry;
  context: Context[];
}

export interface Context {
  id: string;
  mapbox_id: string;
  text: string;
  wikidata?: string;
  short_code?: string;
}

export interface Geometry {
  coordinates: number[];
  type: string;
}

export interface Properties {
  foursquare: string;
  landmark: boolean;
  address: string;
  category?: string;
}