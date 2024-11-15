import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const UpdateContact = () => {

const { store, actions } = useContext(Context);
const [name, setName] = useState('')
const [address, setAddress] = useState('')
const [phone, setPhone] = useState('')
const [email, setEmail] = useState('')
const navigate = useNavigate()
const [contact, setContact] = useState({});
const { id } = useParams();
// to useParams to get the id passed through the url
// then in useEffect use that id to filter through store.contacts to get the individual contact that is being edited
// const [contact, setContact] = useState('') set the contact with that information
// const [name, setName] = useState(contact.name) set form values with contact information

const handleClick = async () => {
  await actions.updateContact(name, email, phone, address, id);
  navigate("/");
}

useEffect(() => {
    let contacts = store.contacts;
    console.log(contacts);
    let contact = contacts.find((contact) => contact.id === parseInt(id));
    setContact(contact);
    setName(contact.name);
    setEmail(contact.email);
    setPhone(contact.phone);
    setAddress(contact.address);
}, []);

    return ( 
        

<div className="text-center mt-5">
<div className="contacts ">
    <h2 className="header">Update Contact</h2>
    <div className="form-floating mb-3">
  <input onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="floatingInput" placeholder={contact.name}/>
  <label for="floatingInput">{contact.name}</label>
</div>
    <div className="form-floating mb-3">
  <input onChange={(e) => setAddress(e.target.value)} type="address" className="form-control" id="floatingInput" placeholder={contact.address}/>
  <label for="floatingInput">{contact.address}</label>
</div>
    <div className="form-floating mb-3">
  <input onChange={(e) => setPhone(e.target.value)} type="number" className="form-control" id="floatingInput" placeholder={contact.phone}/>
  <label for="floatingInput">{contact.phone}</label>
</div>
    <div className="form-floating mb-3">
  <input  onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder={contact.email}/>
  <label for="floatingInput">{contact.email}</label>
</div>

<div className="d-flex justify-content-between">
<Link to="/" className="homeButton fa fa-solid fa-chevron-left"></Link>
<button onClick={(e) => handleClick()} className="newContact fa fa-solid fa-check"></button>
</div>
</div>
</div>


     );
}
 
export default UpdateContact;