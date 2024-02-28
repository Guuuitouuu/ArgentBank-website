import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser, setToken } from "../../redux/features/userProfile";

function LoginLogic() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  let [Error, setError] = useState(false)

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
        dispatch(setToken(data.body.token));
        localStorage.setItem("token", data.body.token);

        try {
          const profileResponse = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${data.body.token}`,
            },
          });
          if (profileResponse.ok) {
            const profileData = await profileResponse.json();
            setError(false)
            dispatch(setUser(profileData.body));
            navigate("/");
          } else {
            console.error("Erreur : ", profileResponse.status);
          }
        } catch (error) {
          console.error("Erreur :", error.message);
        }
      } else {
        console.error("Erreur : Identifiants/Mot de passe incorrect :", response.status);
        setError(true)
      }
    } catch (error) {
      console.error("Erreur lors de la requête :", error.message);
    }
  };

  return {
    handleSubmit,
    usernameRef,
    passwordRef,
    Error
  };
}

export default LoginLogic;
