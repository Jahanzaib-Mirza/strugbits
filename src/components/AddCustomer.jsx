import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { addCustomer } from "../redux/customerSlice";


const AddCustomer = ({ click ,data}) => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(
      addCustomer({
        first,
        last,
        email,
        avatar: "https://reqres.in/img/faces/1-image.jpg",
      })
    );
    setEmail("");
    setFirst("");
    setLast("");
    click(false);
  };
  useEffect(()=>{
    return ()=>{
    }
  },[])
  return (
    <div className="addCardPage">
      <div className="card">
        <div className="header">
          <CloseIcon className="closeIcon" onClick={() => click(false)} />
          <h2 style={{ color: "#fff", textAlign: "center", padding: 10 }}>
            Add New Customer
          </h2>
        </div>
        <div className="cardBody">
          <input
            type="text"
            placeholder="First Name"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={last}
            onChange={(e) => setLast(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="addCustomer" style={{ width: "100%" }} onClick={submit}>
            Add Customer
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCustomer;
