# 基于 mapboxgl 的 api 封装

## 1. 安装
```
npm install @wutiange/mapboxgl-api
// 或
yarn add @wutiange/mapboxgl-api
```

## 2. 使用
首先在需要的位置导入：
```ts
import mapboxglApi from '@wutiange/mapboxgl-api';
```
目前这个下面只有 `MapboxglGeocode` 的实现，通过下面的代码来获取：
```ts
mapboxglApi.MapboxglGeocode
```
首先需要先设置好 `access token` ，然后才能继续操作：
```ts
mapboxglApi.setAccessToken("你的 mapboxgl access token")
```
接下来就可以对位置进行解析了，包括从经纬度到为止和从位置到经纬度。
```ts
// 从经纬度到为止信息
mapboxglApi.MapboxglGeocode.reverse({ longitude: 116.42, latitude: 39.92 }).then((res) => {
  console.log(res)
})
// 从位置信息到经纬度
mapboxglApi.MapboxglGeocode.forward({ searchText: "北京市朝阳区朝阳公园" }).then((res) => {
  console.log(res)
})
```