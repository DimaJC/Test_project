import React, { useState } from "react";

import "./style.scss";
function Contacts() {
  const [contactList, setContactList] = useState([]);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [editingContact, setEditingContact] = useState(null);
  const [newContact, setNewContact] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewContact({ ...newContact, [name]: value });
  };
  const handleAddContact = () => {
    const { firstName, lastName, phone, email } = newContact;

    if (!firstName || !lastName || !phone || !email) {
      alert("Please fill out everything");
      return;
    }
    setContactList([...contactList, { id: Date.now(), ...newContact }]);
    setNewContact({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
    });
  };
  const handleDeleteContact = (id) => {
    setContactList(contactList.filter((contact) => contact.id !== id));
  };
  const handleEditContact = (contact) => {
    setEditingContact(contact);
  };
  const handleSaveEdit = () => {
    setContactList(
      contactList.map((contact) =>
        contact.id === editingContact.id ? editingContact : contact
      )
    );
    setEditingContact(null);
  };
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };
  const filteredContacts = contactList
    .filter(
      (contact) =>
        contact.firstName.toLowerCase().includes(filter.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "firstName") {
        return a.firstName.localeCompare(b.firstName);
      } else if (sortBy === "lastName") {
        return a.lastName.localeCompare(b.lastName);
      } else {
        return 0;
      }
    });

  return (
    <div>
      <h1 className="contact-manager-container">Contact management</h1>

      <div className="contact-manager-form">
        <input
          type="text"
          name="firstName"
          placeholder="Name"
          value={newContact.firstName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          value={newContact.lastName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={newContact.phone}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newContact.email}
          onChange={handleInputChange}
        />
        <button
          className="contact-manager-add-button"
          onClick={handleAddContact}
        >
          Add contact
        </button>
      </div>
      <div className="contact-manager-filer-sort">
        <input
          className="contact-manager-filter"
          type="text"
          placeholder="Filter by name or last name"
          value={filter}
          onChange={handleFilterChange}
        />
        <select className="contact-manager-sort" onChange={handleSortChange}>
          <option value="">Without sorting</option>
          <option value="firstName">Sort by name</option>
          <option value="lastName">Sort by last name</option>
        </select>
      </div>
      <ul className="contact-manager-list">
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            {editingContact?.id === contact.id ? (
              <div className="contact-manager-info">
                <input
                  className="contact-manager-edit-input"
                  type="text"
                  value={editingContact.firstName}
                  onChange={(event) =>
                    setEditingContact({
                      ...editingContact,
                      firstName: event.target.value,
                    })
                  }
                />
                <input
                  className="contact-manager-edit-input"
                  type="text"
                  value={editingContact.lastName}
                  onChange={(event) =>
                    setEditingContact({
                      ...editingContact,
                      lastName: event.target.value,
                    })
                  }
                />
                <input
                  className="contact-manager-edit-input"
                  type="text"
                  value={editingContact.phone}
                  onChange={(event) =>
                    setEditingContact({
                      ...editingContact,
                      phone: event.target.value,
                    })
                  }
                />
                <input
                  className="contact-manager-edit-input"
                  type="text"
                  value={editingContact.email}
                  onChange={(event) =>
                    setEditingContact({
                      ...editingContact,
                      email: event.target.value,
                    })
                  }
                />
                <button
                  className="contact-manager-save-button"
                  onClick={handleSaveEdit}
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="contact-manager-info">
                {contact.firstName} {contact.lastName} | {contact.phone} |{" "}
                {contact.email}
                <button
                  className="contact-manager-edit-button"
                  onClick={() => handleEditContact(contact)}
                >
                  Edit
                </button>
                <button
                  className="contact-manager-edit-button"
                  onClick={() => handleDeleteContact(contact.id)}
                >
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="contact-manager-count">
        Total contacts: {filteredContacts.length}
      </div>
    </div>
  );
}

export default Contacts;
