import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserCard from "./components/UserCard";
import { Route, Routes } from "react-router-dom";
import Users from "./fetching/Users";
import { ThemeProvider } from "./fetching/ThemeContext";
import Login from "./login/Login";
import Todo from "./todoApp/Todo";

function App() {
  const [role, setRole] = useState("standard");

  const changeRole = () => {
    setRole("Admin");
  };
  return (
    <>
      <ThemeProvider>
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
          <Route path="/users" element={<Users />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
