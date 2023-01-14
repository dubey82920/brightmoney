import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
} from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";
import { updateBill } from "./reducx/billslice";

export default function App(props) {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  const [formdata, setformdata] = useState({
    id: props.item.id,
    description: props.item.description,
    category: props.item.category,
    amount: props.item.amount,
    date: props.item.date,
    status: props.item.status,
  });

  const handelonchange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };
  const dispatch = useDispatch();
  const handleupdate = () => {
    dispatch(updateBill({ formdata }));
    toggleShow();
  };
  return (
    <>
      <MDBBtn onClick={toggleShow}>Update</MDBBtn>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Update Bill</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBInput
                label="Description"
                name="description"
                type="text"
                onChange={handelonchange}
                value={formdata.description}
              ></MDBInput>
              <br />
              <MDBInput
                label="Category"
                type="text"
                name="category"
                onChange={handelonchange}
                value={formdata.category}
              ></MDBInput>
              <br />
              <MDBInput
                label="Amount"
                type="text"
                name="amount"
                onChange={handelonchange}
                value={formdata.amount}
              ></MDBInput>
              <br />
              <MDBInput
                label="Status"
                type="text"
                name="status"
                onChange={handelonchange}
                value={formdata.status}
              ></MDBInput>
              <br />
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn onClick={handleupdate}>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
