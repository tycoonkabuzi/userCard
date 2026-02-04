import { useEffect, useState } from "react";
import styles from "./styles.module.css";
const Users = () => {
  //   Display their names and emails in a list
  //   Include a loading indicator while fetching
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
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);
  return (
    <div>
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
