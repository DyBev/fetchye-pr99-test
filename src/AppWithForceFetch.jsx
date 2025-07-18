import { useContext, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useFetchye } from 'fetchye'
import { IdContext } from './IdContext'
import { useNavigate } from 'react-router-dom'


function App() {
  const { id, setId } = useContext(IdContext)
  const navigate = useNavigate();
  const numOfRenders = useRef(0);
  numOfRenders.current += 1;
  if (numOfRenders.current == 1) {
    console.log(`fetchye forced fetch, with ${id}`)
  }

  const { data, error, isLoading } = useFetchye(id, {
    forceInitialFetch: true 
  });
  console.log({ id, data, error, isLoading });

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {
          console.log(`updating count to ${id === 1 ? 2 : 1}`)
          setId(id === 1 ? 2 : 1);
        }}>
          id is {id}
        </button>
        <button onClick={() => {
          console.log(`navigating to App`)
          navigate("/")
        }}>
          navigate to App
        </button>
      </div>
    </>
  )
}

export default App
