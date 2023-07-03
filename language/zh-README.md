# 基于 mapboxgl 的 api 封装

说明文档语言：中文 | [English](../README.md)

**<span style="color: red">特别提醒，请尽量在后台中使用</span>**，因为在前端容易暴露 `access token` 。

## 1. 安装
```
npm install @wutiange/mapboxgl-api
// 或
yarn add @wutiange/mapboxgl-api
```

## 2. 使用
首先在需要的位置导入：
```ts
import { ForwardGeocoding, Geocoding, ReverseGeocoding, MapboxGL } from '@wutiange/mapboxgl-api'
```
首先需要先设置好 `access token` ，然后才能继续操作：
```ts
import { MapboxGL } from '@wutiange/mapboxgl-api'
MapboxGL.setAccessToken("你的 mapboxgl access token")
```
接下来就可以对位置进行解析了，包括从经纬度到位置和从位置到经纬度。
```ts
import { Geocoding } from '@wutiange/mapboxgl-api'
// 从经纬度到位置信息
Geocoding.reverse({ longitude: 116.42, latitude: 39.92 }).then((res) => {
  console.log(res)
})
// 从位置信息到经纬度
Geocoding.forward({ searchText: "北京市朝阳区朝阳公园" }).then((res) => {
  console.log(res)
})
```
## 3. 更多帮助
### 3.1 看示例，跑示例
如果你想自己跑起来看效果。
1. 将 `example` 下的 `.env.example` 改成 `.env` ；
2. 将你的 `access token` 保存到 `.env` 中；
3. 执行 `yarn install` 或 `yarn` ；
4. 执行 `yarn dev` 就可以看到示例跑起来了。

接下来可以打开浏览器，输入以下地址访问：
```text
http://127.0.0.1:3000/reverse?longitude=116.42&latitude=39.92

http://127.0.0.1:3000/forward?searchText=北京
```
就可以看到结果了；如果你不愿意自己跑，也想看看返回的数据，那请看第二点。

### 3.2 看返回数据示例
1. [forward](./testRecord/forward.md);
2. [reverse](./testRecord/reverse.md).
