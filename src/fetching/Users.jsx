import { useContext, useEffect, useState } from "react";
import styles from "./styles.module.css";
import { ThemeContext } from "./ThemeContext";

const Users = () => {
  //   Display their names and emails in a list
  //   Include a loading indicator while fetching

  //   Create a ThemeContext for “light” and “dark” modes

  // Wrap your app with the provider

  // Create a toggle button to switch themes

  // Access the theme in two different components
  const { theme, toggleTheme } = useContext(ThemeContext);

  const link = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(data);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(link);
        const users = await res.json();
        setData(users);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);
  return (
    <div className={theme ? styles.white : styles.black}>
      <button onClick={toggleTheme}>Change</button>
      <h1>Users</h1>
      {loading === true ? (
        <p>Loading...</p>
      ) : (
        data.map((user, index) => (
          <ol start={index + 1}>
            <li>
              {user.name}: {user.email}
            </li>
          </ol>
        ))
      )}
    </div>
  );
};

export default Users;
