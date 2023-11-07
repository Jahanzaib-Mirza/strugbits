import React from "react";
import { useDispatch } from "react-redux";
import { removeCustomer } from "../redux/customerSlice";

const CustomerInfo = ({id,first_name,last_name,email,avatar}) => {
    const dispatch = useDispatch();
  return (
    <div className="customerInfo">
      <div className="avatar">
        <img src={avatar} alt=""/>
      </div>
      <div className="custId">{id}</div>
      <div className="name">{first_name} {last_name}</div>
      <div className="email">{email}</div>
      <div className="action">
        <button className="delete"onClick={()=>dispatch(removeCustomer(id))}>Delete</button>
      </div>
    </div>
  );
};

export default CustomerInfo;
