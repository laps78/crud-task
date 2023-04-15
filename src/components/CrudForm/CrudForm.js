import "./CrudForm.css";
import React from "react";
import { nanoid } from "nanoid";

function CrudForm({ addCRUD }) {
  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    const formCurrentValue = evt.target.textarea.value;
    evt.target.textarea.value = "";
    if (formCurrentValue.length > 0) {
      const newData = {
        id: nanoid(),
        content: formCurrentValue,
      };
      addCRUD(newData);
    }
  };
  return (
    <div className="CRUD_form_wrapper">
      <form className="CRUD_form" onSubmit={formSubmitHandler}>
        <label htmlFor="textarea"></label>
        <textarea
          className="form_textarea"
          name="textarea"
          placeholder={``}
          rows="5"
        ></textarea>
        <button className="form_submit_button" type="submit">
          submit
        </button>
      </form>
    </div>
  );
}

export default CrudForm;
