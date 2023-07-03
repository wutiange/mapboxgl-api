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

app.listen(3000, () => {
  console.log("Server is listening on port 3000")
})