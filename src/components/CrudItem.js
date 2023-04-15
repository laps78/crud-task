import React from "react";

function CrudItem({ id, text, deleteFunction }) {
  const handleClick = (event) => {
    event.preventDefault();
    deleteFunction(id);
  };
  console.log("creating...", id);
  return (
    <article className="deskItem" id={id}>
      <div className="deskItem_button" onClick={handleClick}>
        X
      </div>
      <div className="deskItem_text">{text}</div>
    </article>
  );
}

export default CrudItem;
