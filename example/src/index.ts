import express from 'express'
import { ForwardGeocoding, Geocoding, ReverseGeocoding, MapboxGL } from '@wutiange/mapboxgl-api'

const app = express()
MapboxGL.setAccessToken(process.env.MAPBOX_ACCESS_TOKEN ?? '')
app.get("/reverse", (req, res) => {
  const params = (req.query ?? {}) as unknown
  Geocoding.reverse(params as ReverseGeocoding).then(result => {
    res.send(JSON.stringify(result))
  }).catch(err => {
    res.status(400).send((err as Error).message)
  })
})

app.get("/forward", (req, res) => {
  const params = (req.query ?? {}) as unknown
  Geocoding.forward(params as ForwardGeocoding).then(result => {
    res.send(JSON.stringify(result))
  }).catch(err => {
    res.status(400).send((err as Error).message)
  })
})

app.get("/batchReverse", (req, res) => {
  // 目前这个还没调通，还不知道原因，我已经按官方的方式进行了调用
  const lngLats = [[29.028295, 40.98701], [-80.129575, 26.099282], [-118.2042, 34.120901]]
  Geocoding.batchReverse({ lngLats }).then(result => {
    res.send(JSON.stringify(result))
  }).catch(err => {
    res.status(400).send((err as Error).message)
  })
})

app.get("/batchForward", (req, res) => {
  const searchTexts = ['北京市', '深圳市', '遵义市']
  Geocoding.batchForward({ searchTexts }).then(result => {
    res.send(JSON.stringify(result))
  }).catch(err => {
    res.status(400).send((err as Error).message)
  })
})

app.listen(3000, () => {
  console.log("Server is listening on port 3000")
})