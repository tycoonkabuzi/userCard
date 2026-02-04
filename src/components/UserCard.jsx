import styles from "./style.module.css";

const UserCard = ({ name, email, role }) => {
  return (
    <div className={styles.background}>
      <h1>User Data</h1>
      <ul>
        <li> Name: {name}</li>
        <li> email: {email}</li>
        <li>role :{role}</li>
      </ul>

      <button className={styles.button}>Promote</button>
    </div>
  );
};
export default UserCard;
