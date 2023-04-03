import './App.css';
import { useEffect, useState } from 'react';
import CrudForm from './components/CrudForm/CrudForm.js'
import CrudDesk from './components/CrudDesk/CrudDesk'

function App() {
  const [actualCRUDS, setActualCRUDS] = useState([]);
  const getData = async function () {
    try {
      let response = await fetch('http://localhost:7070', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      });
      let data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const postData = async (url = 'http://localhost:7070/notes', data = {}) => {
    const responce = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: data,
    });
    return responce.json();
  }
  

  // make a js async function that makes 'GET' query to http://localhost:7070 with CORS headers and logs data to console
  
  const addCRUD = (newCrud) => setActualCRUDS(prevCruds => {
      postData('http://localhost:7070/notes', newCrud);
      return [...prevCruds, newCrud];
    }
  );
  const deleteCRUD = (id) => {
    // delete from state
    // update request
    return true;
  }

  return (
    <div className="App">
      <p>Beshure do not forget to start server at <strong>localhost:7777/notes</strong><br/>by typing <strong>"npm start"</strong><br/>in your terminal being at <strong>"~/Проекты/GITHUB/Netology-hw/ra16-homeworks/lifecycle-http/crud-task/backend"</strong></p>
      <hr/>
      <CrudDesk cruds={ actualCRUDS } deleteCRUD={deleteCRUD}/>
      <CrudForm addCRUD={addCRUD} />
    </div>
  );
}

export default App;
