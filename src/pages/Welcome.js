import React, { useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../providers/User";

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

      setUserName(name);
      navigate("/chat", { replace: true }); // replace route so as not to go back. Otherwise remove options obj
    },
    [navigate, setUserName, name]
  ); // no actual need adding setUserName & navigate

  const buttonStyle = {};
  buttonStyle.marginLeft = "auto";
  buttonStyle.marginRight = "auto";
  buttonStyle.display = "block";

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Greet User</h5>
        <form onSubmit={onSubmit} className="card-text">
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            value={name}
            onChange={handleNameChange}
          />
          <button className="btn btn-primary" style={buttonStyle}>
            Submit Name
          </button>
        </form>
      </div>
    </div>
  );
};

export default Welcome;
