import { useContext, useEffect, useRef } from 'react'
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
    console.log("fetchye not forced fetch")
  }

  const { data: pocketdata, error: pocketerror, isLoading: pocketisLoading } = useFetchye(
    "http://127.0.0.1:8090/api/collections/testing/records/n1kvy882szoh0v9"
  );
  const { data, error, isLoading } = useFetchye(id);
  console.log({ id, data, error, isLoading });
  console.log({ id: '127.0.0.1:8090', pocketdata, pocketerror, pocketisLoading });

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
        number of renders = {numOfRenders.current}
      </div>
      <div className="card">
        <button onClick={() => {
          navigate("/edit")
        }}>
          edit
        </button>
        <button onClick={() => {
          navigate("/force-fetch")
        }}>
          ForceFetch
        </button>
      </div>
    </>
  )
}

export default App
