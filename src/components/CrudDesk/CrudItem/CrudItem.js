import "./CrudItem.css";
import React from "react";

function CrudItem({ id, text, deleteFunction }) {
  return (
    <article className="deskItem" id={id}>
      <div className="deskItem_button" onClick={() => deleteFunction(id)}>
        X
      </div>
      <div className="deskItem_text">{text}</div>
    </article>
  );
}

export default CrudItem;
