import React from "react";
import { Input, Lable, Container } from "./ContactFilter.styles";
import { filterContact } from "../../redux/filter/action";
import { useSelector, useDispatch } from "react-redux";

const ContactFilter = ({ showFilter }) => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    dispatch(filterContact(e));
  };
  return (
    <Container in={showFilter}>
      <Lable htmlFor="name">
        Find contact by name
        <Input type="text" value={filter} onChange={inputHandler} />
      </Lable>
    </Container>
  );
};

export default ContactFilter;
