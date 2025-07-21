import { useState } from 'react'
import './App.css'
import { useFetchye } from 'fetchye'
import { useNavigate } from 'react-router-dom'
import { CheckmarkOutline } from '@carbon/icons-react'
import styles from './edit.module.scss';

function App() {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const { data: pocketdata, error: pocketerror, isLoading: pocketisLoading } = useFetchye(
    "http://127.0.0.1:8090/api/collections/testing/records/n1kvy882szoh0v9"
  );

  const useUpdateDatabase = (Title, number_of_changes) => fetch(
    "http://127.0.0.1:8090/api/collections/testing/records/n1kvy882szoh0v9",
    {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Title,
        number_of_changes,
      }),
    }
  );


  const [title, setTitle] = useState(pocketdata.body.Title);
  const numberOfChanges = pocketdata.body.number_of_changes

  console.log({ pocketdata, pocketerror, pocketisLoading });

  return (
    <>
      <div className={styles.column_display}>
        { success && <div><CheckmarkOutline /> success updating database</div> }
        <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder={title} />
        <button onClick={() => {
          useUpdateDatabase(title, numberOfChanges+1).then(() => {
            setSuccess(true)
          })
        }}>
          update database
        </button>
      </div>
      <div className="card">
        number of changes = {numberOfChanges}
      </div>
      <div className="card">
        <button onClick={() => {
          navigate("/")
        }}>
          navigate to Fetch
        </button>
        <button onClick={() => {
          navigate("/force-fetch")
        }}>
          navigate to ForceFetch
        </button>
      </div>
    </>
  )
}

export default App
