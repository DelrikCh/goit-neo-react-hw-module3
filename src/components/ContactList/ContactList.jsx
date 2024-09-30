import classes from "./ContactList.module.css";

function ContactList({ contacts }) {
  return (
    <div>
      <ul className={classes["contacts"]}>{contacts}</ul>
    </div>
  );
}

export default ContactList;
