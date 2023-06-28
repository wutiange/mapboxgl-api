import express from 'express'
import mapboxglApi from '@wutiange/mapboxgl-api'
import { ForwardGeocoding, ReverseGeocoding } from '../../lib/types/MapboxglGeocodeType'

const app = express()
mapboxglApi.setAccessToken(process.env.MAPBOX_ACCESS_TOKEN ?? '')
/** 
  endpoint?: 'mapbox.places' | 'mapbox.places-permanent'
  longitude: number
  latitude: number
  country?: string
  language?: string
  types?: string
  reverseMode?: 'distance' | 'score' | 'limit'
  limit?: number
  routing?: boolean
  worldview?: string
 */
app.get("/reverse", async (req, res) => {
  try {
    const params = (req.query ?? {}) as unknown
    const result = await mapboxglApi.MapboxglGeocode.reverse(params as ReverseGeocoding)
    res.send(JSON.stringify(result))
  } catch (err: unknown) {
    res.status(400).send((err as Error).message)
  }
})

app.get("/forward", async (req, res) => {
  try {
    const params = (req.query ?? {}) as unknown
    const result = await mapboxglApi.MapboxglGeocode.forward(params as ForwardGeocoding)
    res.send(JSON.stringify(result))
  } catch (err: unknown) {
    res.status(400).send((err as Error).message)
  }
})

app.listen(3000, () => {
  console.log("Server is listening on port 3000")
})