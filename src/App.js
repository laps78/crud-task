import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import CRUD_form from './components/CRUD_form/CRUD_form.js'

function App() {
  const [ actualCRUDS, setAcualCruds ] = useState([]);
  const addCrud = (newCrud) => setAcualCruds(prevCruds => [...prevCruds, newCrud]);
  return (
    <div className="App">
      <CRUD_form addCrud={addCrud} />
    </div>
  );
}

export default App;
