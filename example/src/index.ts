import express from 'express'
import { ForwardGeocoding, Geocoding, ReverseGeocoding, MapboxGL } from '@wutiange/mapboxgl-api'

const app = express()
MapboxGL.setAccessToken(process.env.MAPBOX_ACCESS_TOKEN ?? '')
app.get("/reverse", async (req, res) => {
  try {
    const params = (req.query ?? {}) as unknown
    const result = await Geocoding.reverse(params as ReverseGeocoding)
    res.send(JSON.stringify(result))
  } catch (err: unknown) {
    res.status(400).send((err as Error).message)
  }
})

app.get("/forward", async (req, res) => {
  try {
    const params = (req.query ?? {}) as unknown
    const result = await Geocoding.forward(params as ForwardGeocoding)
    res.send(JSON.stringify(result))
  } catch (err: unknown) {
    res.status(400).send((err as Error).message)
  }
})

app.get("/batchReverse", async (req, res) => {
  try {
    // 目前这个还没调通，还不知道原因，我已经按官方的方式进行了调用
    const lngLats = [[29.028295, 40.98701], [-80.129575, 26.099282], [-118.2042, 34.120901]]
    const result = await Geocoding.batchReverse({lngLats})
    res.send(JSON.stringify(result))
  } catch (err: unknown) {
    res.status(400).send((err as Error).message)
  }
})

app.get("/batchForward", async (req, res) => {
  try {
    console.log(req.query)
    const searchTexts = ['北京市', '深圳市', '遵义市']
    const result = await Geocoding.batchForward({searchTexts})
    res.send(JSON.stringify(result))
  } catch (err: unknown) {
    res.status(400).send((err as Error).message)
  }
})

app.listen(3000, () => {
  console.log("Server is listening on port 3000")
})