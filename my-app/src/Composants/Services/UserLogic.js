import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/features/userProfile";
import { useNavigate } from "react-router";

function UserLogic() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const usernameRef = useRef(null);
  const [toggleModif, setToggleModif] = useState(false);
  const [renderComponent, setRenderComponent] = useState(false);

  const userData = useSelector((state) => state.userProfile.user);

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
          Authorization: `Bearer ${localStorage.getItem("token")}`,
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

  return {
    navigate,
    dispatch,
    usernameRef,
    toggleModif,
    renderComponent,
    handleSubmit,
    userData,
    toggleModifs
  };
}

export default UserLogic;
