const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [
				
			]
		},
		actions: {
			getContactsList: async () => {
				const store = getStore();
				const response = await fetch("https://playground.4geeks.com/contact/agendas/Andyalpa");
				if (response.ok) {
					const data = await response.json();
					setStore({ contacts: data.contacts });
				} else {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/Andyalpa",
						{
							method: "POST"
						}
					);
				}
			},
			addContact: async (name, address, phone, email) => {
				const store = getStore();
				const response = await fetch("https://playground.4geeks.com/contact/agendas/Andyalpa/contacts", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						name: name,
						email: email,
						address: address,
						phone: phone
					})
				});
				if (!response.ok) {
					throw new Error("Network was not ok")
				}
				getActions().getContactsList();
			},

			updateContact: async (name, address, phone, email, contactId) => {
				const store = getStore();
				const response = await fetch("https://playground.4geeks.com/contact/agendas/Andyalpa/contacts/" + contactId, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						name: name,
						email: email,
						address: address,
						phone: phone
					})
				});
				if (!response.ok) {
					throw new Error("Network was not ok")
				}
				getActions().getContactsList();
			},

			deleteContact: async (contactId) => {
				const store = getStore();
				const response = await fetch("https://playground.4geeks.com/contact/agendas/Andyalpa/contacts/" + contactId, {
					method: "DELETE",
					headers: { "Content-Type": "application/json", }

				});
				if (!response.ok) {
					throw new Error("Delete was not ok")
				}
				getActions().getContactsList();
			}









		}
	};
};

export default getState;