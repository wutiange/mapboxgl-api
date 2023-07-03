# 这是关于 reverse api 测试记录
主要是测试各个参数和返回值的展示，包含测试代码和返回数据。

## 1. 仅仅传入 longitude 和 latitude
```ts
/**
 * 参数：
 * {
 *    longitude: 116.42,
 *    latitude: 39.92
 * }
 */
const params = (req.query ?? {}) as unknown as ReverseGeocoding
const result = await MapboxglGeocode.reverse(params as ReverseGeocoding)
```
返回的数据为：
```json
{
    "type": "FeatureCollection",
    "query": [
        116.42,
        39.92
    ],
    "features": [
        {
            "id": "poi.463856479129",
            "type": "Feature",
            "place_type": [
                "poi"
            ],
            "relevance": 1,
            "properties": {
                "foursquare": "4b8f9412f964a520b35833e3",
                "landmark": true,
                "address": "朝阳门南小街",
                "category": "chinese restaurant, chinese food, restaurant"
            },
            "text": "秦唐府",
            "place_name": "秦唐府, 朝阳门南小街, Beijing, 100010, China",
            "center": [
                116.420089,
                39.92074
            ],
            "geometry": {
                "coordinates": [
                    116.420089,
                    39.92074
                ],
                "type": "Point"
            },
            "context": [
                {
                    "id": "postcode.6032945",
                    "mapbox_id": "dXJuOm1ieHBsYzpYQTR4",
                    "text": "100010"
                },
                {
                    "id": "locality.3123761",
                    "mapbox_id": "dXJuOm1ieHBsYzpMNm94",
                    "wikidata": "Q394681",
                    "text": "Dongcheng Qu"
                },
                {
                    "id": "place.279601",
                    "mapbox_id": "dXJuOm1ieHBsYzpCRVF4",
                    "wikidata": "Q956",
                    "short_code": "CN-BJ",
                    "text": "Beijing"
                },
                {
                    "id": "country.8753",
                    "mapbox_id": "dXJuOm1ieHBsYzpJakU",
                    "wikidata": "Q148",
                    "short_code": "cn",
                    "text": "China"
                }
            ]
        },
        {
            "id": "postcode.6032945",
            "type": "Feature",
            "place_type": [
                "postcode"
            ],
            "relevance": 1,
            "properties": {
                "mapbox_id": "dXJuOm1ieHBsYzpYQTR4"
            },
            "text": "100010",
            "place_name": "100010, Dongcheng Qu, Beijing, China",
            "bbox": [
                116.40012,
                39.914695,
                116.428569,
                39.932872
            ],
            "center": [
                116.410039,
                39.926901
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    116.410039,
                    39.926901
                ]
            },
            "context": [
                {
                    "id": "locality.3123761",
                    "mapbox_id": "dXJuOm1ieHBsYzpMNm94",
                    "wikidata": "Q394681",
                    "text": "Dongcheng Qu"
                },
                {
                    "id": "place.279601",
                    "mapbox_id": "dXJuOm1ieHBsYzpCRVF4",
                    "wikidata": "Q956",
                    "short_code": "CN-BJ",
                    "text": "Beijing"
                },
                {
                    "id": "country.8753",
                    "mapbox_id": "dXJuOm1ieHBsYzpJakU",
                    "wikidata": "Q148",
                    "short_code": "cn",
                    "text": "China"
                }
            ]
        },
        {
            "id": "locality.3123761",
            "type": "Feature",
            "place_type": [
                "locality"
            ],
            "relevance": 1,
            "properties": {
                "mapbox_id": "dXJuOm1ieHBsYzpMNm94",
                "wikidata": "Q394681"
            },
            "text": "Dongcheng Qu",
            "place_name": "Dongcheng Qu, Beijing, China",
            "bbox": [
                116.37369,
                39.857371,
                116.446197,
                39.972611
            ],
            "center": [
                116.410039,
                39.926901
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    116.410039,
                    39.926901
                ]
            },
            "context": [
                {
                    "id": "place.279601",
                    "mapbox_id": "dXJuOm1ieHBsYzpCRVF4",
                    "wikidata": "Q956",
                    "short_code": "CN-BJ",
                    "text": "Beijing"
                },
                {
                    "id": "country.8753",
                    "mapbox_id": "dXJuOm1ieHBsYzpJakU",
                    "wikidata": "Q148",
                    "short_code": "cn",
                    "text": "China"
                }
            ]
        },
        {
            "id": "place.279601",
            "type": "Feature",
            "place_type": [
                "region",
                "place"
            ],
            "relevance": 1,
            "properties": {
                "mapbox_id": "dXJuOm1ieHBsYzpCRVF4",
                "wikidata": "Q956",
                "short_code": "CN-BJ"
            },
            "text": "Beijing",
            "place_name": "Beijing, China",
            "bbox": [
                115.416878,
                39.442355,
                117.499558,
                41.059504
            ],
            "center": [
                116.3912757,
                39.906217
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    116.3912757,
                    39.906217
                ]
            },
            "context": [
                {
                    "id": "country.8753",
                    "mapbox_id": "dXJuOm1ieHBsYzpJakU",
                    "wikidata": "Q148",
                    "short_code": "cn",
                    "text": "China"
                }
            ]
        },
        {
            "id": "country.8753",
            "type": "Feature",
            "place_type": [
                "country"
            ],
            "relevance": 1,
            "properties": {
                "mapbox_id": "dXJuOm1ieHBsYzpJakU",
                "wikidata": "Q148",
                "short_code": "cn"
            },
            "text": "China",
            "place_name": "China",
            "bbox": [
                73.501339,
                18.0670463,
                134.773408,
                53.560432
            ],
            "center": [
                101.901875103385,
                35.4867029846329
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    101.901875103385,
                    35.4867029846329
                ]
            }
        }
    ],
    "attribution": "NOTICE: © 2023 Mapbox and its suppliers. All rights reserved. Use of this data is subject to the Mapbox Terms of Service (https://www.mapbox.com/about/maps/). This response and the information it contains may not be retained. POI(s) provided by Foursquare."
}
```

## 2. 还传入 country
```ts
/**
 * 参数：
 * {
 *    longitude: 116.42,
 *    latitude: 39.92,
 *    country: 'de'
 * }
 */
const params = (req.query ?? {}) as unknown as ReverseGeocoding
const result = await MapboxglGeocode.reverse(params as ReverseGeocoding)
```
这里请求后返回的数据为空，也就是结果中不包含德国的地址，当然这是很正常的，毕竟根据经纬度来查询一般都是一个确认的地方。
```json
{
    "type": "FeatureCollection",
    "query": [
        116.42,
        39.92
    ],
    "features": [],
    "attribution": "NOTICE: © 2023 Mapbox and its suppliers. All rights reserved. Use of this data is subject to the Mapbox Terms of Service (https://www.mapbox.com/about/maps/). This response and the information it contains may not be retained. POI(s) provided by Foursquare."
}
```

## 3. 在 1 的基础上传入 types
```ts
/**
 * 参数：
 * {
 *    longitude: 116.42,
 *    latitude: 39.92,
 *    types: 'poi'
 * }
 */
const params = (req.query ?? {}) as unknown as ReverseGeocoding
const result = await MapboxglGeocode.reverse(params as ReverseGeocoding)
```
返回的数据仅仅包括了 `place_type=['poi']` 的数据。
```json
{
    "type": "FeatureCollection",
    "query": [
        116.42,
        39.92
    ],
    "features": [
        {
            "id": "poi.463856479129",
            "type": "Feature",
            "place_type": [
                "poi"
            ],
            "relevance": 1,
            "properties": {
                "foursquare": "4b8f9412f964a520b35833e3",
                "landmark": true,
                "address": "朝阳门南小街",
                "category": "chinese restaurant, chinese food, restaurant"
            },
            "text": "秦唐府",
            "place_name": "秦唐府, 朝阳门南小街, Beijing, 100010, China",
            "center": [
                116.420089,
                39.92074
            ],
            "geometry": {
                "coordinates": [
                    116.420089,
                    39.92074
                ],
                "type": "Point"
            },
            "context": [
                {
                    "id": "postcode.6032945",
                    "mapbox_id": "dXJuOm1ieHBsYzpYQTR4",
                    "text": "100010"
                },
                {
                    "id": "locality.3123761",
                    "mapbox_id": "dXJuOm1ieHBsYzpMNm94",
                    "wikidata": "Q394681",
                    "text": "Dongcheng Qu"
                },
                {
                    "id": "place.279601",
                    "mapbox_id": "dXJuOm1ieHBsYzpCRVF4",
                    "wikidata": "Q956",
                    "short_code": "CN-BJ",
                    "text": "Beijing"
                },
                {
                    "id": "country.8753",
                    "mapbox_id": "dXJuOm1ieHBsYzpJakU",
                    "wikidata": "Q148",
                    "short_code": "cn",
                    "text": "China"
                }
            ]
        }
    ],
    "attribution": "NOTICE: © 2023 Mapbox and its suppliers. All rights reserved. Use of this data is subject to the Mapbox Terms of Service (https://www.mapbox.com/about/maps/). This response and the information it contains may not be retained. POI(s) provided by Foursquare."
}
```