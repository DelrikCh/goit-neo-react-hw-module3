import classes from "./ContactList.module.css";
import Contact from "../Contact/Contact";

function ContactList({ contacts, deleteContact }) {
  const contact_components = contacts.map((contact) => (
    <Contact
      key={contact.id}
      id={contact.id}
      name={contact.name}
      number={contact.number}
      deleteContact={deleteContact}
    />
  ));
  return (
    <div>
      <ul className={classes["contacts"]}>{contact_components}</ul>
    </div>
  );
}

export default ContactList;
