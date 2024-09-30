import { FaUser, FaPhoneAlt } from "react-icons/fa";

import classes from "./Contact.module.css";

function Contact({ id, name, number, deleteContact }) {
  return (
    <li className={classes["contact"]}>
      <ul className={classes["fields"]}>
        <li>
          <FaUser />
          <span className={classes["field"]}>{name}</span>
        </li>
        <li>
          <FaPhoneAlt />
          <span className={classes["field"]}>{number}</span>
        </li>
      </ul>
      <button
        type="button"
        onClick={() => deleteContact(id)}
        className={classes["btn"]}
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;
