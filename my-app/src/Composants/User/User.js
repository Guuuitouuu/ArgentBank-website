import React from "react";
import UserLogic from "../Services/UserLogic";
import Transaction from "../Transaction/Transaction";
import "./User.css"

function User() {
  const {usernameRef, toggleModif, renderComponent, handleSubmit, userData, toggleModifs } = UserLogic();

  if (renderComponent) {
    return (
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {userData.userName}
          </h1>
          {!toggleModif && (
            <button onClick={toggleModifs} className="edit-button">
              Edit Name
            </button>
          )}
          {toggleModif && (
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
                <input type="text" disabled value={userData.lastName}></input>
              </div>
              <div className="button-container">
                <button type="submit" className="edit-button">
                  Save
                </button>
                <button onClick={toggleModifs} className="edit-button">
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Transaction transacType="Argent Bank Checking" value="$2,082.79" disponibility="Available Balance" />
        <Transaction transacType="Argent Bank Savings (x6712)" value="$10,928.42" disponibility="Avaible Balance" />
        <Transaction transacType="Argent Bank Credit Card (x8349)" value="$184.30" disponibility="Current Balance" />
      </main>
    );
  } else {
    return null;
  }
}

export default User;
