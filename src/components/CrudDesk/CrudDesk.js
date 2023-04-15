import "./CrudDesk.css";
import { nanoid } from "nanoid";
import React from "react";
import CrudItem from "./CrudItem/CrudItem";

function CrudDesk({ cruds, deleteCRUD }) {
  return (
    <div className="CRUD_desk_wrapper">
      <h3>CRUD desk</h3>
      <div className="CRUD_desk">
        {cruds.map((crud) => (
          <CrudItem
            key={nanoid()}
            id={crud.id}
            text={crud.content}
            deleteFunction={deleteCRUD}
          />
        ))}
      </div>
    </div>
  );
}

export default CrudDesk;
