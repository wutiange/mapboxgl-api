# Encapsulation of mapboxgl API based on

Document Language: [Chinese](./language/zh-README.md) | English

**<span style="color: red">Special reminder, please use it in the backend as much as possible</span>**, as exposing the `access token` in the frontend is risky.

## 1. Installation
```
npm install @wutiange/mapboxgl-api
// or
yarn add @wutiange/mapboxgl-api
```

## 2. Usage
First, import it where needed:
```ts
import { ForwardGeocoding, Geocoding, ReverseGeocoding, MapboxGL } from '@wutiange/mapboxgl-api'
```
You need to set the `access token` first before continuing with the operations:
```ts
import { MapboxGL } from '@wutiange/mapboxgl-api'
MapboxGL.setAccessToken("your mapboxgl access token")
```
You can now parse locations, including from coordinates to places and from places to coordinates.
```ts
import { Geocoding } from '@wutiange/mapboxgl-api'

// From coordinates to location information
Geocoding.reverse({ longitude: 116.42, latitude: 39.92 }).then((res) => {
  console.log(res)
})

// From location information to coordinates
Geocoding.forward({ searchText: "Beijing, Chaoyang District, Chaoyang Park" }).then((res) => {
  console.log(res)
})
```
## 3. More Help
### 3.1 See Examples, Run Examples
If you want to run the examples yourself and see the results:
1. Rename `.env.example` under the `example` folder to `.env`;
2. Save your `access token` in the `.env` file;
3. Execute `yarn install` or `yarn`;
4. Run `yarn dev` and you can see the examples running.

You can then open your browser and access the following URLs:
```text
http://127.0.0.1:3000/reverse?longitude=116.42&latitude=39.92

http://127.0.0.1:3000/forward?searchText=Beijing
```
You will be able to see the results. If you don't want to run it yourself but still want to see the returned data, please refer to the second point.

### 3.2 See Return Data Examples
1. [forward](./testRecord/forward.md);
2. [reverse](./testRecord/reverse.md).