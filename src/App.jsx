import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserCard from "./components/UserCard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./fetching/Users";

function App() {
  const [role, setRole] = useState("standard");

  const changeRole = () => {
    setRole("Admin");
  };
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <UserCard
              name="Tycoon"
              email="kabuzitycoon@gmail.com"
              role={role}
              changeRole={changeRole}
            />
          }
        />
        <Route path="/about" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
