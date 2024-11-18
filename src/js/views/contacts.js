import React, {useContext} from "react";
import { useNavigate } from 'react-router';
import { Context } from "../store/appContext";
import update from "../../img/update.png"


export const Contacts = ({contact}) => {
	console.log(contact)
	const {store, actions} = useContext(Context)
	const contactId = contact.id;
	const contactIdString = contactId.toString();
	const navigate = useNavigate();
	console.log(contactIdString);
	const handleClick = () => {
	  navigate("/updatecontact/"+contactIdString);
	}
	
	return (
	<div className="contact-card">
		<div className="contact-info grid-container">
		<img className="contact-photo grid-item-photo" src="https://cdn.pixabay.com/photo/2022/06/05/07/04/person-7243410_1280.png" alt="" />
		<div className="info d-flex grid-item">
			<span className="name fw-bold">{contact.name}</span>
			<span className="address">
			<i className="fa fa-solid fa-address-book"></i> {contact.address}
			</span>
			<span className="phone">
			<i className="fa fa-solid fa-phone"></i> {contact.phone}
			</span>
			<span className="email">
			<i className="fa fa-solid fa-envelope"></i> {contact.email}
			</span>
		</div>
		<div className="buttons grid-item d-flex align-items-center">
		<button style={{border: "none", borderRadius: "7px"}} onClick={(e) => handleClick()}>
			<img className="updateicon" src={update} alt="Update" />
		</button>
		<button
			onClick={(e) => actions.deleteContact(contact.id)}
			className="fa fa-solid fa-trash"
		></button>
		</div>
		</div>

		
	</div>
	);
};
