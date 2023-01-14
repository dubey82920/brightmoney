import React, { useState, useEffect } from "react";
import { MDBBtnGroup, MDBBtn } from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";
import { loadAllData, searchCategorie } from "./reducx/billslice";
import { toast } from "react-toastify";
const Search = () => {
  const [Value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleReset = (e) => {
    setValue("")
    dispatch(loadAllData({toast}));
  };

  const handlesearch = (e) => {
    e.preventDefault();
    dispatch(searchCategorie({ Value }));
  };
  return (
    <div>
      <form
        action=""
        style={{
          margin: "auto",
          pading: "15px",
          maxWidth: "400px",
          alignContent: "center",
          marginTop: "25px",
        }}
        className="d-flex input-group w-auto"
        onSubmit={handlesearch}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Search Category"
          value={Value}
          onChange={(e) => setValue(e.target.value)}
        />
        <MDBBtnGroup>
          <MDBBtn type="submit" color="dark">
            Search
          </MDBBtn>
          <MDBBtn className="mx-2" color="info" onClick={() => handleReset()}>
            Reset
          </MDBBtn>
        </MDBBtnGroup>
      </form>
    </div>
  );
};

export default Search;
