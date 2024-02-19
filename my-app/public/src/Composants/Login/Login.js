import { useNavigate } from "react-router-dom";
import React, { useRef } from "react"
import "./Login.css"

function Login() {

  const navigate = useNavigate()

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const usernameValue = usernameRef.current.value;
    const passwordValue = passwordRef.current.value;

    console.log(usernameValue)
    console.log(passwordValue)


    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: usernameValue,
          password: passwordValue,
        }),
      });

      if (response.ok) {
        // La requête a réussi (status code 2xx)
        const data = await response.json();
        sessionStorage.setItem("token", data.body.token);
        navigate("/")
        
      } else {
        // La requête a échoué (status code différent de 2xx)
        console.error("Erreur HTTP :", response.status);
      }
    } catch (error) {
      console.error("Erreur lors de la requête :", error.message);
    }
  }

    return (
        <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label
            ><input ref={usernameRef} type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label
            ><input ref={passwordRef} type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
              >Remember me</label
            >
          </div>

            <button className="sign-in-button">Sign In</button>
          
        </form>
      </section>
    )
}

export default Login