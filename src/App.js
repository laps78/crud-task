// import "./App.css";
// import React from "react";
// import { useEffect, useState } from "react";
// import CrudForm from "./components/CrudForm/CrudForm";
// import CrudDesk from "./components/CrudDesk/CrudDesk";

// const serverURL = "http://localhost:7777/notes";
// const DEFAULT_MESSAGE = {
//   message: "test",
// };
// let state = { notes: [], noteObj: DEFAULT_MESSAGE };

// function App() {
//   const [actualCRUDS, setActualCRUDS] = useState([]);
//   const getData = async function () {
//     try {
//       let response = await fetch(serverURL, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       let data = await response.json();
//       console.log("app.getData: data - ", data);
//       setActualCRUDS(data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   const postData = () => {
//     const responce = fetch(serverURL, {
//       method: "POST",
//       body: JSON.stringify(state.noteObj),
//       headers: {
//         "Content-Type": "application/json",
//       },

//       // const responce = await fetch(serverURL, {
//       //   headers: {
//       //     "Content-Type": "application/json",
//       //   },
//       //   method: "POST",
//       //   body: JSON.stringify(data),
//     });
//     //return responce.json();
//   };

//   const addCRUD = (newCrud) =>
//     setActualCRUDS((prevCruds) => {
//       console.log(`adding... `, newCrud);
//       postData(serverURL, newCrud);
//       return [...prevCruds, newCrud];
//     });

//   const deleteCRUD = (id) => {
//     // delete from state
//     console.log(`deleting crud ${id}`);
//     // update request
//     console.log(`update request (${id}) ...`);
//     return true;
//   };

//   return (
//     <div className="App">
//       <p>
//         Beshure do not forget to start server at
//         <strong>localhost:7777</strong>
//         <br />
//         by typing <strong>"npm start"</strong>
//         <br />
//         in your terminal being at
//         <strong>
//           "~/Проекты/GITHUB/Netology-hw/ra16-homeworks/lifecycle-http/crud-task/backend"
//         </strong>
//       </p>
//       <hr />
//       <CrudDesk cruds={actualCRUDS} deleteCRUD={deleteCRUD} />
//       <CrudForm addCRUD={addCRUD} />
//     </div>
//   );
// }

// export default App;

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
      setActualCRUDS((prevCruds) => data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const postData = async (url = "http://localhost:7777/notes", data = {}) => {
    await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  const addCRUD = (newCrud) =>
    setActualCRUDS((prevCruds) => {
      postData("http://localhost:7777/notes", newCrud);
      return [...prevCruds, newCrud];
    });

  const deleteCRUD = (id) => {
    // delete from state
    setActualCRUDS((prevCruds) => {
      asyncDelete(`http://localhost:7777/notes/${id}`, { id });
      return [...prevCruds.filter((crud) => crud.id !== id)];
    });
    // delete request
    const asyncDelete = async (url, data = {}) => {
      await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    };
    // update request
    getData();
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
