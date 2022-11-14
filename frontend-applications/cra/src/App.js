import { useEffect, useState } from 'react';
import './App.css';

console.log("ENV:  ", process.env)
function App() {
  const [customers, setCustomers] = useState([])
  const [text, setText] = useState('No hope')

  const handleGetCustomers = async () => {
    const data = await fetch(`/api/customers`)
    const c = await data.json()

    console.log(c)
    setCustomers(c)
  }

  const handleGetTest = async () => {
    const data = await fetch('/api/other')
    const c = await data.text()
    setText(c)
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleGetCustomers}>Get customers</button>
        <ul>

        {
          customers.map((cus) => {
            return <li>{cus.name}</li>
          })
        }
        <button onClick={handleGetTest}>Change text</button>
        <h1>{text}</h1>
        </ul>
      </header>
    </div>
  );
}

export default App;
