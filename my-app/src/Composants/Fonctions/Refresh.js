import React from "react"
import { useDispatch } from "react-redux";
import { setUser, setToken } from "../../redux/features/userProfile";

async function Refresh() {

    const dispatch = useDispatch()

    const rntoken = localStorage.getItem("token")

    try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${rntoken}`,
            },
          }); if(response.ok) {
            const data = await response.json();
            dispatch(setUser(data.body))
            console.log("salut")
          } else {
            console.error("Erreur", response.status)
          } 
    }   catch(error) {
            console.error("Erreur :", error.message )
          }

}

export default Refresh