
type EndpointType = 'mapbox.places' | 'mapbox.places-permanent'

interface GeocodingOption {
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
   * Limit results to one or more countries. Permitted values are [ISO 3166 alpha 2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes separated by commas.
   */
  country?: string

  /**
   * Specify whether to request additional metadata about the recommended navigation destination corresponding to the feature (`true`) or not (`false`, default). Only applicable for `address` features.  
  
  For example, if `routing=true` the response could include data about a point on the road the feature fronts. Response features may include an array containing one or more routable points. Routable points cannot always be determined. Consuming applications should fall back to using the feature’s normal geometry for routing if a separate routable point is not returned.
    */
  routing?: boolean
  /**
   * Filter results to include only a subset (one or more) of the available feature types. Options are `country`, `region`, `postcode`, `district`, `place`, `locality`, `neighborhood`, `address`, and `poi`. Multiple options can be comma-separated. Note that `poi.landmark` is a deprecated type that, while still supported, returns the same data as is returned using the `poi` type.  
  
  For more information on the available types, see the [data types section](https://docs.mapbox.com/api/search/geocoding/#data-types).
    */
  types?: string
  /**
   * Returns features that are defined differently by audiences that belong to various regional, cultural, or political groups. Available worldviews are: `ar`,`cn`,`in`,`jp`,`ma`,`ru`,`tr`,`us`. If `worldview` is not set, the `us` worldview boundaries are returned by default.  
  
  For more information about using the `worldview` parameter, see the [worldviews section](https://docs.mapbox.com/api/search/geocoding/#worldviews).
    */
  worldview?: string
}

interface ReverseGeocoding extends GeocodingOption {
  /**
   * longitude of location
   */
  longitude: number
  /**
   * latitude of location
   */
  latitude: number
  /**
   * Specify the user’s language. This parameter controls the language of the text supplied in responses.
Options are [IETF language tags](https://en.wikipedia.org/wiki/IETF_language_tag) comprised of a mandatory [ISO 639-1 language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) and, optionally, one or more IETF subtags for country or script.
More than one value can also be specified, separated by commas, for applications that need to display labels in multiple languages.
For more information on which specific languages are supported, see the [language coverage section](https://docs.mapbox.com/api/search/geocoding/#language-coverage).
   */
  language?: string
  /**
   * Decides how results are sorted in a reverse geocoding query if multiple results are requested using a limit other than 1. Options are distance (default), which causes the closest feature to always be returned first, and score, which allows high-prominence features to be sorted higher than nearer, lower-prominence features.
   */
  reverseMode?: 'distance' | 'score' | 'limit'
  /**
   * Specify the maximum number of results to return. The default is `1` and the maximum supported is `10`.

The default behavior in reverse geocoding is to return at most one feature at each of the multiple levels of the administrative hierarchy (for example, one address, one region, one country). Increasing the limit allows returning multiple features of the same type, but only for one type (for example, multiple address results). Consequently, setting limit to a higher-than-default value requires specifying exactly one types parameter.
   */
  limit?: number
}

interface ForwardGeocoding extends GeocodingOption {
  /**
   * The feature you’re trying to look up. This could be an address, a point of interest name, a city name, etc. When searching for points of interest, it can also be a category name (for example, “coffee shop”). For information on categories, see the Point of interest category coverage section. The search text should be expressed as a URL-encoded UTF-8 string, and must not contain the semicolon character (either raw or URL-encoded). Your search text, once decoded, must consist of at most 20 words and numbers separated by spacing and punctuation, and at most 256 characters.

The accuracy of coordinates returned by a forward geocoding request can be impacted by how the addresses in the query are formatted. Learn more about address formatting best practices in the Address geocoding format guide.
   */
  searchText: string
  /**
   * Specify whether to return autocomplete results (`true`, default) or not (`false`). When autocomplete is enabled, results will be included that start with the requested string, rather than just responses that match it exactly. For example, a query for `India` might return both `India` and `Indiana` with autocomplete enabled, but only `India` if it’s disabled.  
  
When autocomplete is enabled, each user keystroke counts as one request to the Geocoding API. For example, a search for "coff" would be reflected as four separate Geocoding API requests. To reduce the total requests sent, you can configure your application to only call the Geocoding API after a specific number of characters are typed.
   */
  autocomplete?: boolean
  /**
   * Limit results to only those contained within the supplied bounding box. Bounding boxes should be supplied as four numbers separated by commas, in `minLon,minLat,maxLon,maxLat` order. The bounding box cannot cross the 180th meridian.
   */
  bbox?: number
  /**
   * Specify whether the Geocoding API should attempt approximate, as well as exact, matching when performing searches (`true`, default), or whether it should opt out of this behavior and only attempt exact matching (`false`). For example, the default setting might return `Washington, DC` for a query of `wahsington`, even though the query was misspelled.
   */
  fuzzyMatch?: boolean
  /**
   * Specify the user’s language. This parameter controls the language of the text supplied in responses, and also affects result scoring, with results matching the user’s query in the requested language being preferred over results that match in another language. For example, an autocomplete query for things that start with `Frank` might return `Frankfurt` as the first result with an English (`en`) language parameter, but `Frankreich` (“France”) with a German (`de`) language parameter.  
  
Options are [IETF language tags](https://en.wikipedia.org/wiki/IETF_language_tag) comprised of a mandatory [ISO 639-1 language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) and, optionally, one or more IETF subtags for country or script.  
  
More than one value can also be specified, separated by commas, for applications that need to display labels in multiple languages.  
  
For more information on which specific languages are supported, see the [language coverage section](https://docs.mapbox.com/api/search/geocoding/#language-coverage).
   */
  language?: string
  /**
   * Specify the maximum number of results to return. The default is `5` and the maximum supported is `10`.
   */
  limit?: number
  /**
   * Bias the response to favor results that are closer to this location. Provided as two comma-separated coordinates in `longitude,latitude` order, or the string `ip` to bias based on reverse IP lookup.
   */
  proximity?: string
}

interface BatchReverseGeocoding extends GeocodingOption {
  /**
   * * For batch reverse queries.*  The longitude and latitude, respectively, of the locations being queried. You may supply at most 50 longitude-latitude coordinate pairs within one request.
   */
  lngLats: number[][]
}

interface BatchForwardGeocoding extends GeocodingOption {
  /**
   * *For batch forward queries.*  The features to look up (addresses, point of interest names, city names, etc.). They should be expressed as URL-encoded UTF-8 strings, and must not contain the semicolon character (either raw or URL-encoded), as this is the delimiter between search items. Each search text, once decoded, must consist of at most 20 words and numbers separated by spacing and punctuation, and at most 256 characters. You may supply at most 50 search texts within one request.
   */
  searchTexts: string[]
}


interface GeocodingResponseType {
  /**
   * `"FeatureCollection"`, a GeoJSON type from the [GeoJSON specification](https://tools.ietf.org/html/rfc7946).
   */
  type: string;
  /**
   * - **Forward geocodes**: An array of space and punctuation-separated strings from the original query.
- **Reverse geocodes**: An array containing the coordinates being queried.
   */
  query: string[];
  /**
   * An array of feature objects.
- **Forward geocodes**: Returned features are ordered by relevance.
- **Reverse geocodes**: Returned features are ordered by index hierarchy, from most specific features to least specific features that overlap the queried coordinates.

Read the Search [result prioritization guide](https://docs.mapbox.com/help/getting-started/geocoding/#search-result-prioritization) to learn more about how returned features are organized in the Geocoding API response.
   */
  features: Feature[];
  /**
   * Attributes the results of the Mapbox Geocoding API to Mapbox.
   */
  attribution: string;
}

interface Feature {
  /**
   * A feature ID in the format `{type}.{id}` where `{type}` is the lowest hierarchy feature in the `place_type` field. 
   * The `{id}` suffix of the feature ID is unstable and may change within versions.
   */
  id: string;
  /**
   * `"Feature"`, a GeoJSON type from the [GeoJSON specification](https://tools.ietf.org/html/rfc7946).
   */
  type: string;
  /**
   * An array of feature types describing the feature. Options are `country`, `region`, `postcode`, `district`, `place`, `locality`, `neighborhood`, `address`, and `poi`. Most features have only one type, but if the feature has multiple types, all applicable types will be listed in the array. (For example, Vatican City is a `country`, `region`, and `place`.)
   */
  place_type: string[];
  /**
   * Indicates how well the returned feature matches the user's query on a scale from `0` to `1`. `0` means the result does not match the query text at all, while `1` means the result fully matches the query text. You can use the `relevance` property to remove results that don’t fully match the query. Learn more about textual relevance in the [Search result prioritization](https://docs.mapbox.com/help/getting-started/geocoding/#search-result-prioritization) guide.
   */
  relevance: number;
  /**
   * *Optional.*  The house number for the returned `address` feature. Note that unlike the `address` property for `poi` features, this property is outside the `properties` object.
   */
  address?: string;
  /**
   * An object describing the feature. The `properties` object may change with data improvements. Your implementation should check for the presence of these values in a response before it attempts to use them.
   */
  properties: Properties;
  /**
   * A string representing the feature in the requested language, if specified.
   */
  text: string;
  /**
   * A string representing the feature in the requested language, if specified, and its full result hierarchy.
   */
  place_name: string;
  /**
   * *Optional.*  A string analogous to the `place_name` field that more closely matches the query than results in the specified language. For example, querying `Köln, Germany` with language set to English (`en`) might return a feature with the `place_name` `Cologne, Germany` and a `matching_place_name` of `Köln, North Rhine-Westphalia, Germany`.  
  
Category matches will not appear in the `matching_place_name` field. For example, a query for `coffee, Köln` with `language` set to English (`en`) would return a `matching_place_name` of `Café Reichard, Unter Fettenhennen 11, Köln, North Rhine-Westphalia 50667, Germany` instead of a `matching_place_name` of `coffee, Unter Fettenhennen 11, Köln, North Rhine-Westphalia 50667, Germany`.
   */
  matching_place_name: string;
  /**
   * *Optional.*  A string analogous to the `text` field that more closely matches the query than results in the specified language. For example, querying `Köln, Germany` with `language` set to English (`en`) might return a feature with the `text` `Cologne` and the `matching_text` `Köln`.  
  
Category matches will not appear as `matching_text`. For example, a query for `coffee, Köln` with `language` set to English (`en`) would return a `poi` `Café Reichard`, but this feature will not include a `matching_text` field.
   */
  matching_text?: string;
  /**
   * The coordinates of the feature’s center in the form `[longitude,latitude]`. This may be the literal centroid of the feature’s geometry, or the center of human activity within the feature (for example, the downtown area of a city).
   */
  center: number[];
  /**
   * An object describing the spatial geometry of the returned feature.
   */
  geometry: Geometry;
  /**
   * An array representing the hierarchy of encompassing parent features. Each parent feature may include any of the above properties.
   */
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
  /**
   * An array in the format `[longitude,latitude]` at the center of the specified `bbox`.
   */
  coordinates: number[];
  /**
   * `"Point"`, a GeoJSON type from the [GeoJSON specification](https://tools.ietf.org/html/rfc7946).
   */
  type: string;
}

interface Properties {
  foursquare: string;
  /**
   * Describes whether or not the feature is in the `poi.landmark` data type. This data type is deprecated, and this property will be present on all `poi` features for backwards compatibility reasons but will always be `true`.
   */
  landmark: boolean;
  /**
   * *Optional.*  The full street address for the returned `poi` feature. Note that unlike the `address` property for `address` features, this property is inside the `properties` object.
   */
  address: string;
  /**
   * *Optional.*  Comma-separated categories for the returned `poi` feature.
   */
  category?: string;
  /**
   * *Optional.*  The [Wikidata](https://wikidata.org/) identifier for the returned feature.
   */
  wikidata?: string;
  /**
   * *Optional.*  The [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country and [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) region code for the returned feature.
   */
  short_code?: string;
}



export { ReverseGeocoding, ForwardGeocoding, GeocodingResponseType, Geometry, Properties, Context, Feature, EndpointType, BatchForwardGeocoding, BatchReverseGeocoding } 