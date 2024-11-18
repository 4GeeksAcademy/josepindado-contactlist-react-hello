import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";


import injectContext from "./store/appContext";


import AddNewContact from "./views/addnewcontact";
import UpdateContact from "./views/updatecontact"

const Layout = () => {

	return (
		<div>
			<BrowserRouter>
				<ScrollToTop>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/addnewcontact" element={<AddNewContact />} />
						<Route path="/updatecontact/:id" element={<UpdateContact />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);