import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card'


const URL = `http://localhost:9009/api/apod?api_key=DEMO_KEY`

function App() {
  const [data, setData] = useState()

  useEffect(() => {
     function fetchAPOD() {
      axios.get(URL)
        .then(res => {
          console.log(res.data);
          setData(res.data)
        })
        .catch(err => {
        console.error(err)
      })
    }
    fetchAPOD()
   
  },[])

  if (!data) return 'Fetching data...'

  return (
    <section>
      <Card
        title={data.title}
        text={data.explanation}
        imageURL={data.url}
        date={data.date}
      />
      
   </section>
  )
}

export default App
