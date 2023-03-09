import './CRUD_form.css' ;
import { nanoid } from 'nanoid';

function CRUD_form({ addCrud }) {
  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    const formCurrentValue = evt.target.textarea.value;
    if (formCurrentValue.length > 0) {
      const newData = {
        id: nanoid(),
        content: formCurrentValue,
      };
      addCrud(newData);
    }
  }
 return (
   <div className="CRUD_form_wrapper">
    <form className="CRUD_form" onSubmit={formSubmitHandler}>
      <label htmlFor="textarea"></label>
       <textarea className="form_textarea" name="textarea" placeholder={``} rows="5"></textarea>
       <button className="form_submit_button" type="submit">submit</button>
    </form>
   </div>); 
}

export default CRUD_form;
