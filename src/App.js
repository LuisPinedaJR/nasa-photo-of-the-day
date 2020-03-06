import React from 'react'
import './App.css'
//import Card from './components/CardData'
import Clap from './components/Clap'
import Rocket from './components/Rocket'
import CardData from './components/CardData'
import Alien from './components/Alien'
// import CardComponent from './components/CardComponent'
function App() {
  return (
    <div className="App">
      {/* <CardComponent /> */}
      <CardData />
      <div className="buttons">
        <Clap />
        <Alien />
        <Rocket />
      </div>
    </div>
  )
}

export default App
