import React, { useEffect, useState } from 'react'
import CardComponent from './CardComponent'
import axios from 'axios'
import key from '../api'

function CardData() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
      .then(response => {
        console.log(response.data)
        setData(response.data)
      })
  }, [])

  return (
    <div className="card-div">
      <h1 className="card-h1">{data.title}</h1>
      <h2 className="card-h2">{data.date}</h2>
      <p className="card-p">{data.explanation}</p>

      <img className="card-image" src={data.hdurl} alt="nasa-space" />
    </div>
  )
}

export default CardData
