import ContactList from "../ContactList/ContactList"
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import { selectError, selectLoading } from "../../redux/selectors";
import MessageError from "../MessageError/MessageError";
import Loading from "../Loading/Loading";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className={CSS.header}>Contact List</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loading />}
      {error && <MessageError message={error} />}
      <ContactList />
    </div>
  );
};

export default App;