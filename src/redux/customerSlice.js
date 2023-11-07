import { createSlice, nanoid,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  customers: null,
  loading:true
};

export const fetchCustomers = createAsyncThunk("fetchCustomers",async()=>{
    const res = await axios.get("https://reqres.in/api/users?page=1")
    return res.data.data
})

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  extraReducers : (builder)=>{
    builder.addCase(fetchCustomers.fulfilled,(state,action)=>{
        state.customers=action.payload;
    })
  },
  reducers: {
    addCustomer: (state, action) => {
      const customer = {
        id: nanoid(),
        first_name: action.payload.first,
        first_last: action.payload.first,
        email: action.payload.email,
        avatar: action.payload.avatar
      };
      state.customers.push(customer);
    },
    removeCustomer: (state, action) => {
      state.customers = state.customers.filter(
        (customer) => customer.id !== action.payload
      );
    },
  },
});

export const {addCustomer,removeCustomer} = customerSlice.actions
export default customerSlice.reducer