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
import { addBill } from "./reducx/billslice";

export default function Addbill() {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  const [formdata, setformdata] = useState({
    id:5 ,
    description: "",
    category: "",
    amount: "",
    date:"",
    status:"",
  });

  const handelonchange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };
  const dispatch = useDispatch()
  const handleupdate = () => {
    let datem = new Date()
    setformdata({date : datem.toLocaleDateString()})
    dispatch(addBill({formdata}))
    toggleShow()
  }
  return (
    <div style={{marginTop :"20px"}}>
      <MDBBtn onClick={toggleShow}>Add Bill</MDBBtn>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Add Bill</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
            <MDBInput
                label="Id"
                name="id"
                type="text"
                onChange={handelonchange}
                value={formdata.id}
              ></MDBInput>
              <br />
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
              <MDBInput
                label="Date"
                type="date"
                name="date"
                onChange={handelonchange}
                value={formdata.date}
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
    </div>
  );
}
