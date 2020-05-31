import React from "react";
import PropTypes from "prop-types";
import { Text, Button } from "./ContactItem.styles";
import iconClose from "../../helpers/icon/Delete_icon.svg";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/action";
const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(deleteContact(id));
  };

  const { name, number, id } = contact;
  return (
    <>
      <Text>{name}</Text>
      <Text> {number}</Text>
      <Button src={iconClose} onClick={remove}></Button>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactItem;
