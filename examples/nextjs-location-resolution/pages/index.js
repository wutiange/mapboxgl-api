import Head from 'next/head';
import styles from '../styles/Home.module.css';
import mapboxglApi from '@wutiange/mapboxgl-api';
import { useEffect } from 'react';
console.log(mapboxglApi.MapboxglGeocode)
mapboxglApi.setAccessToken("你的accessToken")

export default function Home() {

  useEffect(() => {
    // mapboxglApi.MapboxglGeocode.reverse({ longitude: 116.42, latitude: 39.92 }).then((res) => {
    //   console.log(res)
    // })
    // mapboxglApi.MapboxglGeocode.forward({ searchText: "北京市朝阳区朝阳公园" }).then((res) => {

    //   console.log(res)
    // })
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <input />
        <button>你好</button>
      </div>
    </div>
  )
}
