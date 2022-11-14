import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [customers, setCustomers] = useState([])  

  const handleGetCustomers = async () => {
    const data = await fetch('/api/customers')
    const cus = await data.json()

    setCustomers(cus)

  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <button onClick={handleGetCustomers}>Get customers</button>
        <ul>
          {
            customers.map((cus) => <li>{cus.name}</li>)
          }
        </ul>
      </div>

    </div>
  )
}

export default App
