import "./User.css";
import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/features/userProfile";
import Transaction from "../Transaction/Transaction";
import { useNavigate } from "react-router";

function User() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const usernameRef = useRef(null);
  const [toggleModif, setToggleModif] = useState(false);
  const [renderComponent, setRenderComponent] = useState(false); 


  const userData = useSelector((state) => state.userProfile.user);
  const token = useSelector((state) => state.userProfile.token);

  useEffect(() => {
    if (userData) {
      setRenderComponent(true);
    }
  }, [userData]);

  function toggleModifs() {
    setToggleModif(!toggleModif);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const usernameValue = usernameRef.current.value;
    console.log(usernameValue);
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: usernameValue,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        dispatch(setUser(data.body));
        toggleModifs();
      } else {
        console.error("Erreur :", response.status);
      }
    } catch (error) {
      console.error("Erreur :", error.message);
    }
  };

  if(renderComponent == true) { return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{userData.userName}</h1>
        {!toggleModif && <button onClick={toggleModifs} className="edit-button">Edit Name</button>}
        {toggleModif &&
          <form onSubmit={handleSubmit} className="form-edit">
            <div className="input-container">
              <span>Username :</span>
              <input type="text" name="salut" defaultValue={userData.surName} ref={usernameRef}></input>
            </div>
            <div className="input-container">
              <span>First name :</span>
              <input type="text" value={userData.firstName} disabled></input>
            </div>
            <div className="input-container">
              <span>Last name :</span>
              <input type="text" disabled value={userData.lastName} ></input>
            </div>
            <div className="button-container">
              <button type="submit" className="edit-button">Save</button>
              <button onClick={toggleModifs} className="edit-button">Cancel</button>
            </div>
          </form>
        }
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Transaction transacType="Argent Bank Checking" value="$2,082.79" disponibility="Available Balance" />
      <Transaction transacType="Argent Bank Savings (x6712)" value="$10,928.42" disponibility="Avaible Balance" />
      <Transaction transacType="Argent Bank Credit Card (x8349)" value="$184.30" disponibility="Current Balance" />
    </main>
  )}
}

export default User;
