import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card'

const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`







function App() {
  const [apod, setApod] = useState()

  useEffect(() => {
     function fetchPhoto() {
      axios.get(URL)
        .then(res => {
          console.log(res.data);
          setApod(res.data)
        })
        .catch(err => {
        console.error(err)
      })
    }
    //fetchPhoto()
    setApod({
        "date": "2024-04-07",
        "explanation": "Will the sky be clear enough to see the eclipse? This question is already on the minds of many North Americans hoping to see tomorrow's solar eclipse.  This question was also on the mind of many people attempting to see the total solar eclipse that crossed North America in August 2017.  Then, the path of total darkness shot across the mainland of the USA from coast to coast, from Oregon to South Carolina -- but, like tomorrow's event, a partial eclipse occurred above most of North America.  Unfo...",
        "hdurl": "https://apod.nasa.gov/apod/image/2404/EclipseWyoming_Cooper_960.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "A Total Solar Eclipse over Wyoming",
        "url": "https://apod.nasa.gov/apod/image/2404/EclipseWyoming_Cooper_960.jpg"
  })
   
  },[])

  if (!apod) return 'Fetching photo of the day...'

  return (
    <section>
      <Card
        title={apod.title}
        text={apod.explanation}
        imageURL={apod.url}
        date={apod.date}
      />
      
   </section>
  )
}

export default App
