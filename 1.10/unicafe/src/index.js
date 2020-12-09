import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button =(props) => {
  return ( 
<button onClick = {props.Click}>{props.text}</button>
)
}

const StatisticLine = (props) => {

return(
  <p>{props.text} {props.value}</p>
)

}

const Statistics = (props) => {
  
  if (props.kaikki === 0) {
    return(
      <p>No feedback given</p>
    )
  }
  
  else { 
  return ( 
  <div> 

    <StatisticLine text = "good"      value = {props.good}/>
    <StatisticLine text = "neutral"   value = {props.neutral}/>
    <StatisticLine text = "bad"       value = {props.bad}/>
    <StatisticLine text = "all"       value = {props.kaikki}/>
    <StatisticLine text = "average"   value = {(props.good-props.bad)/props.kaikki}/>
    <StatisticLine text = "positive"  value = {(props.good/props.kaikki) * 100}/>

  </div>
  )
}
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

  const onBadClick = () => {
    setBad(bad +1)
    setAll(kaikki + 1)
  }

  return (
    <div>
    <h1>Give feedback</h1>
    <Button Click = {onGoodClick}     text = "Good"    />
    <Button Click = {onNeutralClick}  text = "Neutral" />
    <Button Click = {onBadClick}      text = "Bad"     /> 


    <h1>statistics</h1>
    <Statistics good = {good} neutral = {neutral} bad = {bad} kaikki = {kaikki}/>



    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)