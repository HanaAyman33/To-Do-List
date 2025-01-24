import React, { useEffect, useState } from "react";
import ToDoList from "./ToDoList";

function Login() {
  const [username, setUsername] = useState("");
  const [date, setDate] = useState(Date.now());
  const [tdList, setTDList] = useState(false);

  const handleSubmit = () => {
    setTDList(true);
  }

  return (
    <>
      {tdList ? (
        <ToDoList username={username} date={date} tdList={() => setTDList(false)} /> // Pass username and date as props
      ) : (
        <div>
          <h1 className="welcome">Welcome to Done</h1>
          <h2 className="intro">Where everything that needs to get done, gets done!</h2>
          <div className="login-container">
            <label className="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
            <br />
            <label className="date">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Enter a date"
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
    </>
  );
}

export default Login;