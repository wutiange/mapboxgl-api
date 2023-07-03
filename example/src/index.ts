import express from 'express'
import { ForwardGeocoding, MapboxglGeocode, ReverseGeocoding, setAccessToken } from '@wutiange/mapboxgl-api'

const app = express()
setAccessToken(process.env.MAPBOX_ACCESS_TOKEN ?? '')
app.get("/reverse", async (req, res) => {
  try {
    const params = (req.query ?? {}) as unknown as ReverseGeocoding
    const result = await MapboxglGeocode.reverse(params as ReverseGeocoding)
    res.send(JSON.stringify(result))
  } catch (err: unknown) {
    res.status(400).send((err as Error).message)
  }
})

app.get("/forward", async (req, res) => {
  try {
    const params = (req.query ?? {}) as unknown
    const result = await MapboxglGeocode.forward(params as ForwardGeocoding)
    res.send(JSON.stringify(result))
  } catch (err: unknown) {
    res.status(400).send((err as Error).message)
  }
})

app.listen(3000, () => {
  console.log("Server is listening on port 3000")
})