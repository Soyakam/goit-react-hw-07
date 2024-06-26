import { visibleContacts  } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

import { useSelector } from "react-redux";

const ContactList = () => {
  
  const contacts = useSelector(visibleContacts);
  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id} className={css.contactItem}>
            <Contact
              name={contact.name}
              number={contact.Number}
              id={contact.id}
              
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;