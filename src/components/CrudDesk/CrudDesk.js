import './CrudDesk.css';
import { useEffect, useState } from 'react';

function CrudDesk({ cruds, deleteCrud }) {
  const [data, setData] = useState([]);
  const getData = async (url = '', data = {}) => {
    const responce = await fetch(url, {
      method: 'GET',
      'Content-Type': 'application/json',
    })
  }

  useEffect(() => {
    getData('http://localhost:7777/notes')
      .then((data) => setData(data));
  })

  return (
    <div className="CRUD_desk_wrapper">
      <h3>CRUD desk</h3>
      <div className="CRUD_desk">
        { 'the content' }
      </div>
    </div>
  );
}

export default CrudDesk;
