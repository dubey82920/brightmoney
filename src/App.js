import "./App.css";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import {
  MDBContainer,
  MDBRow,
  MDBTable,
  MDBCol,
  MDBTableHead,
  MDBTableBody,
  MDBBtn,
} from "mdb-react-ui-kit";
import { toast, ToastContainer } from "react-toastify";
import Delete from "./Delete";
import { useDispatch, useSelector } from "react-redux";
import { loadAllData } from "./reducx/billslice";
import Search from "./Search";
import Update from "./Update";
import Addbill from "./Addbill";
function App() {
  const dispatch = useDispatch();
  const loadallbills = () => {
    dispatch(loadAllData({ toast }));
  };
  useEffect(() => {
    loadallbills();
  }, []);
  const { bills } = useSelector((state) => ({ ...state.billing }));

  return (
    <div className="App">
      <ToastContainer />
      <MDBContainer>
        <Search />
        <Addbill />
        <div style={{ marginTop: "100px" }}>
          <h2>Your Bills</h2>
          <MDBRow>
            <MDBCol size="12">
              <MDBTable>
                <MDBTableHead dark>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Description</th>
                    <th scope="col">Category</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
                  </tr>
                </MDBTableHead>
                {!bills ? (
                  <MDBTableBody className="align-center mb-0">
                    <tr>
                      <td colSpan={8} className="text-center mb-0">
                        No Data Found
                      </td>
                    </tr>
                  </MDBTableBody>
                ) : (
                  bills.map((item, index) => (
                    <MDBTableBody key={index}>
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.description}</td>
                        <td>{item.category}</td>
                        <td>{item.amount}</td>
                        <td>{item.date}</td>
                        <td>{item.status}</td>
                        <td>
                          <Update item={item}/>
                        </td>
                        <td>
                          <Delete id={item.id} />
                        </td>
                      </tr>
                    </MDBTableBody>
                  ))
                )}
              </MDBTable>
            </MDBCol>
          </MDBRow>
        </div>
      </MDBContainer>
    </div>
  );
}

export default App;
