import { Link } from "react-router-dom";
import React, { useState, useContext} from "react";
import {  useNavigate } from "react-router";
import { Context } from "../store/appContext";


const AddNewContact = () => {
const {  actions } = useContext(Context);
const [name, setName] = useState('')
const [address, setAddress] = useState('')
const [phone, setPhone] = useState('')
const [email, setEmail] = useState('')
const navigate = useNavigate()

const handleClick = async () => {
  if(!name || !address || !phone || !email) {
    alert("All fields are required");
    return;
  }
  await actions.addContact(name, email, phone, address);
  navigate("/");
}

    return ( 
        

<div className="text-center mt-5">
<div className="contacts ">
    <h2 className="header">Add New Contact</h2>
    <div className="form-floating mb-3">
  <input onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="floatingInput" placeholder=""/>
  <label for="floatingInput">Name</label>
</div>
    <div className="form-floating mb-3">
  <input onChange={(e) => setAddress(e.target.value)} type="address" className="form-control" id="floatingInput" placeholder=""/>
  <label for="floatingInput">Address</label>
</div>
    <div className="form-floating mb-3">
  <input onChange={(e) => setPhone(e.target.value)} type="number" className="form-control" id="floatingInput" placeholder=""/>
  <label for="floatingInput">Phone</label>
</div>
    <div className="form-floating mb-3">
  <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div className="d-flex justify-content-between">
<Link to="/" className="homeButton fa fa-solid fa-chevron-left"></Link>
<button onClick={(e) => handleClick()} className="newContact fa fa-solid fa-check"></button>
</div>
</div>
</div>


     );
}
 
export default AddNewContact;