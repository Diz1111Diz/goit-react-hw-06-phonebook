import React from "react";

import { List, Item } from "./ContactList.styles";
import ContactItem from "../ContactItem/ContactItem";
import { TransitionGroup } from "react-transition-group";
import { useSelector } from "react-redux";
import filterContact from "../../helpers/filterContact";

const ContactList = ({ deleteContact }) => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);

  const filteredContact = filterContact(contacts, filter);

  return (
    <TransitionGroup component={List}>
      {filteredContact.map((contact) => (
        <Item key={contact.id}>
          <ContactItem contact={contact}></ContactItem>
        </Item>
      ))}
    </TransitionGroup>
  );
};

export default ContactList;
