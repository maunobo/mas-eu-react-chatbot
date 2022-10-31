import React, { useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../providers/User";
import "./Welcome.css";

const Welcome = () => {
  const { setUserName } = useContext(UserContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleNameChange = useCallback(({ target }) => {
    setName(target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (name.trim().length !== 0) {
        setUserName(name);
        navigate("/chat", { replace: true });
      } else {
        alert("Please enter a name");
      }
    },
    [navigate, setUserName, name]
  );

  return (
    <div className="form-box">
      <form onSubmit={onSubmit} className="card-text">
        <div>
          <label>Enter your name to proceed to the chatbot</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <button className="btn btn-primary">Submit Name</button>
      </form>
    </div>
  );
};

export default Welcome;
