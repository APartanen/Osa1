import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  //() => setCounter(counter + 1)

  const onGoodClick = () => setGood(good + 1)
  const onNeutralClick = () => setNeutral(neutral +1)
  const onBadClick = () => setBad(bad +1)

  return (
    <div>
    <h1>Give feedback</h1>
    <button onClick={onGoodClick} >Good</button>
    <button onClick={onNeutralClick}>Neutral</button>
    <button onClick={onBadClick}>Bad</button>

    <h1>statistics</h1>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)