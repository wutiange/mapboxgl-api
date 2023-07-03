# 这是关于 forward api 测试记录
主要是测试各个参数和返回值的展示，包含测试代码和返回数据。

## 1. 仅仅传入 searchText 
```ts
/**
 * 参数：
 * {
 *    searchText: '朝阳公园'
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
        "朝",
        "阳",
        "公",
        "园"
    ],
    "features": [
        {
            "id": "poi.412316938171",
            "type": "Feature",
            "place_type": [
                "poi"
            ],
            "relevance": 1,
            "properties": {
                "foursquare": "4bad8903f964a52096593be3",
                "landmark": true,
                "address": "Chaoyanggongyuan Bridge",
                "category": "park, leisure"
            },
            "text": "朝阳公园 Chaoyang Park",
            "place_name": "朝阳公园 Chaoyang Park, Chaoyanggongyuan Bridge, Beijing, 100125, China",
            "center": [
                116.475105,
                39.9411
            ],
            "geometry": {
                "coordinates": [
                    116.475105,
                    39.9411
                ],
                "type": "Point"
            },
            "context": [
                {
                    "id": "postcode.6696497",
                    "mapbox_id": "dXJuOm1ieHBsYzpaaTR4",
                    "text": "100125"
                },
                {
                    "id": "locality.1714737",
                    "mapbox_id": "dXJuOm1ieHBsYzpHaW94",
                    "wikidata": "Q394701",
                    "text": "Chaoyang Qu"
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
            "id": "poi.824633747512",
            "type": "Feature",
            "place_type": [
                "poi"
            ],
            "relevance": 1,
            "properties": {
                "foursquare": "4e7eeb810aafecf7fc0d2479",
                "landmark": true,
                "address": "Liangmaqiao Rd.",
                "category": "park, leisure"
            },
            "text": "朝阳公园北门 Chaoyang Park North Gate",
            "place_name": "朝阳公园北门 Chaoyang Park North Gate, Liangmaqiao Rd., Beijing, 100125, China",
            "center": [
                116.476603,
                39.953739
            ],
            "geometry": {
                "coordinates": [
                    116.476603,
                    39.953739
                ],
                "type": "Point"
            },
            "context": [
                {
                    "id": "postcode.6696497",
                    "mapbox_id": "dXJuOm1ieHBsYzpaaTR4",
                    "text": "100125"
                },
                {
                    "id": "locality.1714737",
                    "mapbox_id": "dXJuOm1ieHBsYzpHaW94",
                    "wikidata": "Q394701",
                    "text": "Chaoyang Qu"
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
            "id": "poi.77309490029",
            "type": "Feature",
            "place_type": [
                "poi"
            ],
            "relevance": 1,
            "properties": {
                "foursquare": "4bfd0774e529c9280b40ba8c",
                "landmark": true,
                "address": "朝阳区农展南路1号朝阳公园内",
                "category": "soccer field, soccer, sports centre, sports, sport"
            },
            "text": "朝阳公园李宁足球场",
            "place_name": "朝阳公园李宁足球场, 朝阳区农展南路1号朝阳公园内, Beijing, 100125, China",
            "center": [
                116.480164,
                39.940219
            ],
            "geometry": {
                "coordinates": [
                    116.480164,
                    39.940219
                ],
                "type": "Point"
            },
            "context": [
                {
                    "id": "postcode.6696497",
                    "mapbox_id": "dXJuOm1ieHBsYzpaaTR4",
                    "text": "100125"
                },
                {
                    "id": "locality.1714737",
                    "mapbox_id": "dXJuOm1ieHBsYzpHaW94",
                    "wikidata": "Q394701",
                    "text": "Chaoyang Qu"
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
            "id": "poi.1013612334612",
            "type": "Feature",
            "place_type": [
                "poi"
            ],
            "relevance": 1,
            "properties": {
                "landmark": true,
                "address": "北京市朝阳区东四环中路朝阳公园桥",
                "foursquare": "4f5a121be4b0aaabf4cf11a6"
            },
            "text": "朝阳公园桥",
            "place_name": "朝阳公园桥, 北京市朝阳区东四环中路朝阳公园桥, Beijing, 100025, China",
            "center": [
                116.486168,
                39.933183
            ],
            "geometry": {
                "coordinates": [
                    116.486168,
                    39.933183
                ],
                "type": "Point"
            },
            "context": [
                {
                    "id": "postcode.6139441",
                    "mapbox_id": "dXJuOm1ieHBsYzpYYTR4",
                    "text": "100025"
                },
                {
                    "id": "locality.1714737",
                    "mapbox_id": "dXJuOm1ieHBsYzpHaW94",
                    "wikidata": "Q394701",
                    "text": "Chaoyang Qu"
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
            "id": "poi.549755821922",
            "type": "Feature",
            "place_type": [
                "poi"
            ],
            "relevance": 1,
            "properties": {
                "foursquare": "4d0db4d95c46a0934e2710b4",
                "landmark": true,
                "address": "Chaoyang Park",
                "category": "winter sports, outdoors, landuse"
            },
            "text": "朝阳公园滑雪场 Chaoyang Park Snow Hill",
            "place_name": "朝阳公园滑雪场 Chaoyang Park Snow Hill, Chaoyang Park, Beijing, 100125, China",
            "center": [
                116.466296,
                39.932819
            ],
            "geometry": {
                "coordinates": [
                    116.466296,
                    39.932819
                ],
                "type": "Point"
            },
            "context": [
                {
                    "id": "postcode.6696497",
                    "mapbox_id": "dXJuOm1ieHBsYzpaaTR4",
                    "text": "100125"
                },
                {
                    "id": "locality.1714737",
                    "mapbox_id": "dXJuOm1ieHBsYzpHaW94",
                    "wikidata": "Q394701",
                    "text": "Chaoyang Qu"
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

