import React, { useState, useEffect } from "react";
//import { Test } from './Phonebook.styles';
//redux
import { updateFormLocalStorage } from "../../redux/contacts/action";
import { useSelector, useDispatch } from "react-redux";
//Components
import ContactForm from "../../Components/ContactForm/ContactForm";
import ContactList from "../../Components/ContactList/ContactList";
import TitleLogo from "../../Components/TitleLogo/TitleLogo";
import ContactFilter from "../../Components/ContactFilter/ContactFilter";
//Helpers
import storage from "../../helpers/storage";
//toast
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Phonebook = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  const [logo, setLogo] = useState(false);

  useEffect(() => {
    setLogo(true);
    const arrContacts = storage.get("contacts");
    if (!arrContacts) {
      storage.save("contacts", []);
      return;
    }
    dispatch(updateFormLocalStorage(arrContacts));
  }, [dispatch]);

  useEffect(() => {
    storage.save("contacts", contacts);
  }, [contacts]);

  return (
    <div>
      <TitleLogo logo={logo} />
      <ContactForm />
      <ContactFilter showFilter={contacts.length > 1} />
      <ContactList />
    </div>
  );
};

export default Phonebook;
