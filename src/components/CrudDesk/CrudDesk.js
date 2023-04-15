import "./CrudDesk.css";
import { nanoid } from "nanoid";
import React from "react";
import CrudItem from "../../components/CrudItem";

function CrudDesk({ cruds, deleteCRUD }) {
  console.log("CRUDDESK-cruds: ", cruds);
  const makeCruds = () => {
    cruds.forEach((crud) => {
      console.log("precreating...", crud.id);
      return (
        <CrudItem
          key={nanoid()}
          id={crud.id}
          text={crud.value}
          deleteFunction={deleteCRUD}
        />
      );
    });
  };

  return (
    <div className="CRUD_desk_wrapper">
      <h3>CRUD desk</h3>
      <div className="CRUD_desk">{makeCruds()}</div>
    </div>
  );
}

export default CrudDesk;
