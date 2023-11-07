import React, { useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import CustomerInfo from "./CustomerInfo";
import AddCustomer from "./AddCustomer";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "../redux/customerSlice";
const Customer = () => {
    const data = useSelector((state) => state.customers);
    const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    console.log(data);
  };
  const handleClose = () => setOpen(false);
  useEffect(() => {
    dispatch(fetchCustomers())
  }, []);
  return (
    <div style={{ background: "#F3F3F3", padding: 5 }}>
      <button className="addCustomer" onClick={handleOpen}>
        <AddIcon />
        <p>Add Customer</p>
      </button>
      <div className="tableHead">
        <p>Avatar</p>
        <p>Customer Id</p>
        <p>Customer Name</p>
        <p>Email</p>
        <p>Action</p>
      </div>
      {data && data.map((item) => (
        <CustomerInfo
          id={item.id}
          first_name={item.first_name}
          last_name={item.last_name}
          avatar={item.avatar}
          email={item.email}
        />
      ))}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <AddCustomer click={handleClose} data={data} />
      </Modal>
    </div>
  );
};

export default Customer;
