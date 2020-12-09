import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  
  
  return ( 
<div> 
  <p>good {props.good}</p>
  <p>neutral {props.neutral}</p>
  <p>bad {props.bad}</p>

  <p>all {props.kaikki}</p>
  <p>average {(props.good-props.bad)/props.kaikki}</p>
  <p>positive {(props.good/props.kaikki) * 100}</p>
  </div>
  )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [kaikki, setAll] = useState(0)
  //() => setCounter(counter + 1)

  const onGoodClick = () => {
    setGood(good + 1)
    setAll(kaikki + 1)
  }

  const onNeutralClick = () => {
    setNeutral(neutral +1)
    setAll(kaikki + 1)
  }

  const onBadClick = () =>{
    setBad(bad +1)
    setAll(kaikki + 1)
  }

  return (
    <div>
    <h1>Give feedback</h1>
    <button onClick={onGoodClick} >Good</button>
    <button onClick={onNeutralClick}>Neutral</button>
    <button onClick={onBadClick}>Bad</button>

    <h1>statistics</h1>
    <Statistics good = {good} neutral = {neutral} bad = {bad} kaikki = {kaikki}/>



    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)