import React, { useContext } from "react";

import "../../styles/home.css";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { Contacts } from "./contacts";

export const Home = () => {

	const { store, actions } = useContext(Context)
	console.log(store.contacts);



	return (
		<div className="text-center mt-5">


			<div className="contacts ">
				<h2 className="header">Contacts</h2>
				<ul className="list-group">


					{store.contacts?.map((contact, index) => (
						<li className="list-group-item  justify-content-between" key={index}>
							<Contacts contact={contact} />
						</li>

					))}

				</ul>
				<div className="d-flex justify-content-end">
				<Link to={'/addnewcontact'} className="addContact fa fa-solid fa-plus"></Link>
				</div>
				
			</div>
		</div>
	)
};