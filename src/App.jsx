import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserCard from "./components/UserCard";

function App() {
  const [role, setRole] = useState("standard");

  const changeRole = () => {
    setRole("Admin");
  };
  return (
    <>
      <UserCard
        name="Tycoon"
        email="kabuzitycoon@gmail.com"
        role={role}
        changeRole={changeRole}
      />
    </>
  );
}

export default App;
