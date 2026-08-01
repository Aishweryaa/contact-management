import { useEffect, useState } from "react";
import { getAllContacts } from "../services/ContactService";

function ContactList() {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        loadContacts();
    }, []);

    function loadContacts() {
        getAllContacts()
            .then((response) => {
                setContacts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <h2>Contact List</h2>

            <table border="1" cellPadding="10">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
                </thead>

                <tbody>

                {contacts.map((contact) => (

                    <tr key={contact.id}>

                        <td>{contact.id}</td>
                        <td>{contact.name}</td>
                        <td>{contact.phone}</td>
                        <td>{contact.email}</td>
                        <td>{contact.address}</td>

                    </tr>

                ))}

                </tbody>

            </table>

        </div>
    );
}

export default ContactList;