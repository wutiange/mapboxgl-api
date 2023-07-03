
type EndpointType = 'mapbox.places' | 'mapbox.places-permanent'

type ReverseGeocoding = {
  /**
   * endpoint parameter description:
   * 
   * - [mapbox.places](https://docs.mapbox.com/api/search/geocoding/#mapboxplaces):
   * ```text
   * Requests to the mapbox.places endpoint must be triggered by user activity. 
   * Any results that include point-of-interest features (POI) must be displayed on a Mapbox map and cannot be stored permanently, 
   * as described in Mapbox’s terms of service and included service terms.
   * ```
   * - [mapbox.places-permanent](https://docs.mapbox.com/api/search/geocoding/#mapboxplaces-permanent):
   * ```text
   * The mapbox.places-permanent endpoint gives you access to two services: permanent geocoding and batch geocoding. 
   * If you're interested in using the mapbox.places-permanent endpoint for these use cases, contact Mapbox sales. 
   * It's important to speak with an Account Manager on the Sales team prior to making requests to the mapbox.places-permanent endpoint, 
   * as unsuccessful requests made by an account that does not have access to the endpoint may be billable.
   * ```
   */
  endpoint?: EndpointType
  /**
   * longitude of location
   */
  longitude: number
  /**
   * latitude of location
   */
  latitude: number
  /**
   * Limit results to one or more countries. Permitted values are [ISO 3166 alpha 2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes separated by commas.
   */
  country?: string
  /**
   * Specify the user’s language. This parameter controls the language of the text supplied in responses.
Options are [IETF language tags](https://en.wikipedia.org/wiki/IETF_language_tag) comprised of a mandatory [ISO 639-1 language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) and, optionally, one or more IETF subtags for country or script.
More than one value can also be specified, separated by commas, for applications that need to display labels in multiple languages.
For more information on which specific languages are supported, see the [language coverage section](https://docs.mapbox.com/api/search/geocoding/#language-coverage).
   */
  language?: string
  /**
   * Filter results to include only a subset (one or more) of the available feature types. Options are `country`, `region`, `postcode`, `district`, `place`, `locality`, `neighborhood`, `address`, and `poi`. Multiple options can be comma-separated. Note that `poi.landmark` is a deprecated type that, while still supported, returns the same data as is returned using the poi type.

For more information on the available types, see the data [types section](https://docs.mapbox.com/api/search/geocoding/#data-types).
   */
  types?: string
  /**
   * Decides how results are sorted in a reverse geocoding query if multiple results are requested using a limit other than 1. Options are distance (default), which causes the closest feature to always be returned first, and score, which allows high-prominence features to be sorted higher than nearer, lower-prominence features.
   */
  reverseMode?: 'distance' | 'score' | 'limit'
  /**
   * Specify the maximum number of results to return. The default is `1` and the maximum supported is `10`.

The default behavior in reverse geocoding is to return at most one feature at each of the multiple levels of the administrative hierarchy (for example, one address, one region, one country). Increasing the limit allows returning multiple features of the same type, but only for one type (for example, multiple address results). Consequently, setting limit to a higher-than-default value requires specifying exactly one types parameter.
   */
  limit?: number
  /**
   * Specify whether to request additional metadata about the recommended navigation destination corresponding to the feature (true) or not (false, default). Only applicable for address features.

For example, if routing=true the response could include data about a point on the road the feature fronts. Response features may include an array containing one or more routable points. Routable points cannot always be determined. Consuming applications should fall back to using the feature’s normal geometry for routing if a separate routable point is not returned.
   */
  routing?: boolean
  /**
   * Returns features that are defined differently by audiences that belong to various regional, cultural, or political groups. Available worldviews are: `ar`,`cn`,`in`,`jp`,`ma`,`ru`,`tr`,`us`. If `worldview` is not set, the `us` worldview boundaries are returned by default.

For more information about using the worldview parameter, see the [worldviews section](https://docs.mapbox.com/api/search/geocoding/#worldviews).
   */
  worldview?: string
}

type ForwardGeocoding = {
  /**
   * endpoint parameter description:
   * 
   * - [mapbox.places](https://docs.mapbox.com/api/search/geocoding/#mapboxplaces):
   * ```text
   * Requests to the mapbox.places endpoint must be triggered by user activity. 
   * Any results that include point-of-interest features (POI) must be displayed on a Mapbox map and cannot be stored permanently, 
   * as described in Mapbox’s terms of service and included service terms.
   * ```
   * - [mapbox.places-permanent](https://docs.mapbox.com/api/search/geocoding/#mapboxplaces-permanent):
   * ```text
   * The mapbox.places-permanent endpoint gives you access to two services: permanent geocoding and batch geocoding. 
   * If you're interested in using the mapbox.places-permanent endpoint for these use cases, contact Mapbox sales. 
   * It's important to speak with an Account Manager on the Sales team prior to making requests to the mapbox.places-permanent endpoint, 
   * as unsuccessful requests made by an account that does not have access to the endpoint may be billable.
   * ```
   */
  endpoint?: EndpointType
  /**
   * The feature you’re trying to look up. This could be an address, a point of interest name, a city name, etc. When searching for points of interest, it can also be a category name (for example, “coffee shop”). For information on categories, see the Point of interest category coverage section. The search text should be expressed as a URL-encoded UTF-8 string, and must not contain the semicolon character (either raw or URL-encoded). Your search text, once decoded, must consist of at most 20 words and numbers separated by spacing and punctuation, and at most 256 characters.

The accuracy of coordinates returned by a forward geocoding request can be impacted by how the addresses in the query are formatted. Learn more about address formatting best practices in the Address geocoding format guide.
   */
  searchText: string
}



interface GeocodeType {
  /**
   * `"FeatureCollection"`, a GeoJSON type from the [GeoJSON specification](https://tools.ietf.org/html/rfc7946).
   */
  type: string;
  /**
   * - **Forward geocodes**: An array of space and punctuation-separated strings from the original query.
- **Reverse geocodes**: An array containing the coordinates being queried.
   */
  query: string[];
  features: Feature[];
  attribution: string;
}

interface Feature {
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

interface Context {
  id: string;
  mapbox_id: string;
  text: string;
  wikidata?: string;
  short_code?: string;
}

interface Geometry {
  coordinates: number[];
  type: string;
}

interface Properties {
  foursquare: string;
  landmark: boolean;
  address: string;
  category?: string;
}



export { ReverseGeocoding, ForwardGeocoding, GeocodeType, Geometry, Properties, Context, Feature, EndpointType } 