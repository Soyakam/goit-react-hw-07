import { deleteContact } from "../../redux/contactsOps";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";


const Contact = ({ name, number,id, }) => {
  const dispatch = useDispatch();

   const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  
  return (
    <div className={css.contact}>
      <p className={css.contactName}>Name: {name}</p>
      <p className={css.contactNumber}>Number: {number}</p>

      <button
        className={css.deleteButton}
        type="button"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;


