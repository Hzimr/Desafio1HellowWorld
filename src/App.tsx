import { useState } from 'react'
import './App.css'

function App() {
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);
  const [result, setresult] = useState(0);

    const sum = () => {
      const result = valueA + valueB;
      setresult(result);
    }

  return (
    <div className="App">
      <h1>Sum 2 numbers React</h1>
      <div className="numeros">
        <input type="number" value={valueA} onChange={(e) => setValueA(+e.target.value)} placeholder='Primeiro número' />
        <input type="number" value={valueB} onChange={(e) => setValueB(+e.target.value)} placeholder='Segundo número' />
      </div>
      <div className="card">
        <button onClick={sum}>
          <text>
            +
          </text>
        </button >
      </div>
      <p >  
        {result}
      </p>
    </div>
  )
}

export default App
