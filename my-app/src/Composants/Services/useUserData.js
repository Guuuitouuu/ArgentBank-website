
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/features/userProfile";

const UseUserData = () => {
    const [dispatched, setDispatched] = useState(false);
    
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    dispatch(setUser(data.body));
                    setDispatched(true);
                } else {
                }
            } catch (error) {
                console.error("Erreur :", error.message);
            }
        }

        fetchData();
    }, [dispatch]);

    return null; 
};

export default UseUserData;
