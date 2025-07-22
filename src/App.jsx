import './App.css'
import { useFetchye } from 'fetchye'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate();

  const { data: pocketdata, error: pocketerror, isLoading: pocketisLoading } = useFetchye(
    "http://127.0.0.1:8090/api/collections/testing/records/n1kvy882szoh0v9"
  );
  console.log({ id: '127.0.0.1:8090', pocketdata, pocketerror, pocketisLoading });

  return (
    <>
	  <div>
        <h1>{pocketdata?.body.Title}</h1>
        <h2>Number of edits: {pocketdata?.body.number_of_changes}</h2>
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
