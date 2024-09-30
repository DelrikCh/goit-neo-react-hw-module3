import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";

import { useEffect, useState } from "react";

const initial_contacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function load_contacts() {
  return (
    JSON.parse(localStorage.getItem("PhoneBookContacts")) || initial_contacts
  );
}

function save_contacts(contacts) {
  localStorage.setItem("PhoneBookContacts", JSON.stringify(contacts));
}

function App() {
  let [contacts, setContacts] = useState(load_contacts);
  useEffect(() => {
    save_contacts(contacts);
  }, [contacts]);
  const addContact = ({ name, number }) => {
    const contact = {
      id: "id-" + Date.now(),
      name: name,
      number: number,
    };
    setContacts((prevContacts) => [contact, ...prevContacts]);
  };
  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };
  const [filter, setFilter] = useState("");

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox value={filter} onChange={(e) => setFilter(e.target.value)} />
      <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
    </>
  );
}

export default App;
