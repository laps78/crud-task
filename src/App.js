import './App.css';
import { useState } from 'react';
import CrudForm from './components/CrudForm/CrudForm.js'
import CrudDesk from './components/CrudDesk/CrudDesk'

function App() {
  const postData = async (url = '', data = {}) => {
    const responce = await fetch(url, {
      method: 'POST',
      body: data,
    });
    return responce.json();
  }
  const [ actualCRUDS, setAcualCruds ] = useState([]);
  const addCrud = (newCrud) => setAcualCruds(prevCruds => {
      postData('http://localhost:7777/notes', newCrud);
      return [...prevCruds, newCrud];
    }
  );
  const deleteCrud = (id) => {
    // delete from state
    // update request
    return true;
  }

  return (
    <div className="App">
      <p>Beshure not forget to start server at <strong>localhost:7777/notes</strong><br/>by typing <strong>"npm start"</strong><br/>in your terminal being at <strong>"~/Проекты/GITHUB/Netology-hw/ra16-homeworks/lifecycle-http/crud-task/backend$"</strong></p>
      <hr/>
      <CrudDesk cruds={ actualCRUDS } deleteCrud={deleteCrud}/>
      <CrudForm addCrud={addCrud} />
    </div>
  );
}

export default App;
