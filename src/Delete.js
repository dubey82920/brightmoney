import { MDBBtn } from "mdb-react-ui-kit";
import React from "react";
import { useDispatch } from "react-redux";
import { deletBill } from "./reducx/billslice";

function Delete(props) {
  const dispatch = useDispatch();
  
  const handledelet = async (id, e) => {
    // console.log(id)
    e.preventDefault();
    dispatch(deletBill({id}));
  };
  return <MDBBtn onClick={(e) => handledelet(props.id, e)}>Delete</MDBBtn>;
}

export default Delete;
