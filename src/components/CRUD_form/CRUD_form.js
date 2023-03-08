import './CRUD_form.css' ;
import { nanoid } from 'nanoid';

function CRUD_form ({addCrud}) {
  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    const formCurrentValue = evt.target.textarea.value; 
  }
 return (
   <div className="CRUD_form_wrapper">
    <form className="CRUD_form" onSubmit={formSubmitHandler}>
      <label htmlFor="textarea"></label>
      <input type="textarea" name="textarea" placeholder={``}></input>
    </form>
   </div>); 
}

export default CRUD_form;
