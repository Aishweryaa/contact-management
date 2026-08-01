import { useState } from "react";
import { saveContact } from "../services/ContactService";

function AddContact() {

    const [contact, setContact] = useState({
        name: "",
        phone: "",
        email: "",
        address: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setContact({
            ...contact,
            [name]: value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        saveContact(contact)
            .then(() => {
                alert("Contact Saved Successfully");

                setContact({
                    name: "",
                    phone: "",
                    email: "",
                    address: ""
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>

            <h2>Add Contact</h2>

            <form onSubmit={handleSubmit}>

                <label>Name</label>
                <br />

                <input
                    type="text"
                    name="name"
                    value={contact.name}
                    onChange={handleChange}
                />

                <br /><br />

                <label>Phone</label>
                <br />

                <input
                    type="text"
                    name="phone"
                    value={contact.phone}
                    onChange={handleChange}
                />

                <br /><br />

                <label>Email</label>
                <br />

                <input
                    type="email"
                    name="email"
                    value={contact.email}
                    onChange={handleChange}
                />

                <br /><br />

                <label>Address</label>
                <br />

                <input
                    type="text"
                    name="address"
                    value={contact.address}
                    onChange={handleChange}
                />

                <br /><br />

                <button type="submit">
                    Save Contact
                </button>

            </form>

        </div>
    );

}

export default AddContact;
//abc