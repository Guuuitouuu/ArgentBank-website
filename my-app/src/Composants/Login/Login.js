import { useNavigate } from "react-router-dom";
import React, { useRef } from "react"
import { useDispatch } from "react-redux";
import { setUser, setToken } from "../../redux/features/userProfile";
import "./Login.css"

function Login() {
  localStorage.removeItem("token")
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const usernameValue = usernameRef.current.value;
    const passwordValue = passwordRef.current.value;

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

        const data = await response.json();
        dispatch(setToken(data.body.token))
        localStorage.setItem("token", data.body.token);
        
        

        try {
          const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${data.body.token}`,
            },
          }); if (response.ok) {
            const data = await response.json();
            dispatch(setUser(data.body))
            navigate("/")
          } else {
            console.error("Erreur :", response.status)
          }
        }  catch (error) {
          console.error("Erreur :", error.message)
        }
        
      } else {

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
              >Remember me</label>
          </div>

            <button className="sign-in-button">Sign In</button>
          
        </form>
      </section>
    )
}

export default Login