import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import CrudForm from "./components/CrudForm/CrudForm.js";
import CrudDesk from "./components/CrudDesk/CrudDesk";

function App() {
  const [actualCRUDS, setActualCRUDS] = useState([]);
  const getData = async function () {
    try {
      let response = await fetch("http://localhost:7777/notes", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await response.json();
      setActualCRUDS((prevCruds) => [...data]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const postData = async (url = "http://localhost:7777/notes", data = {}) => {
    try {
      await fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const addCRUD = (newCrud) => {
    postData("http://localhost:7777/notes", newCrud)
      .then(getData())
      .catch((err) => console.log(err));
  };

  const deleteCRUD = (id) => {
    // delete request
    const asyncDelete = async (url, data = {}) => {
      try {
        await fetch(url, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }).then(getData());
      } catch (err) {
        console.log(err);
      }
    };

    // delete from server & update
    asyncDelete(`http://localhost:7777/notes/${id}`, { id });
  };

  return (
    <div className="App">
      <p>
        Beshure do not forget to start server at
        <strong>localhost:7777</strong>
        <br />
        by typing <strong>"npm start"</strong>
        <br />
        in your terminal being at
        <strong>
          "~/Проекты/GITHUB/Netology-hw/ra16-homeworks/lifecycle-http/crud-task/backend"
        </strong>
      </p>
      <hr />
      <CrudDesk cruds={actualCRUDS} deleteCRUD={deleteCRUD} />
      <CrudForm addCRUD={addCRUD} />
    </div>
  );
}

export default App;
