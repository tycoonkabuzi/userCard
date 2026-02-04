import styles from "./style.module.css";

const UserCard = ({ name, email, role, changeRole }) => {
  return (
    <div className={styles.background}>
      <h1>User Data</h1>
      <ul>
        <li>
          Name: <b>{name}</b>
        </li>
        <li>
          email: <b>{email}</b>
        </li>
        <li>
          role : <b>{role}</b>
        </li>
      </ul>

      <button className={styles.button} onClick={changeRole}>
        Promote
      </button>
    </div>
  );
};
export default UserCard;
