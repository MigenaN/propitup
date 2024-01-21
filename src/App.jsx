import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonCard from './component/personcard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="PersonCard">
      <PersonCard name="Doe, Jane" age={45} haircolor="Black" />
      <PersonCard name="Smith, John" age={88} haircolor="Brown" />
      <PersonCard name="Fillmore, Millard" age={50} haircolor="Brown" />
      <PersonCard name="Smith, Maria" age={62} haircolor="Brown" />
      </div>  
    </>
  )
}

export default App
