import "./Header.css"
import argentBankLogo from "../../assets/img/argentBankLogo.webp"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { setUser } from "../../redux/features/userProfile"
import { useNavigate } from "react-router-dom"

function Header() {

    const [dispatched, setDispatched] = useState(false); 
    const userData = useSelector((state) => state.userProfile.user)
    const token = useSelector((state) => state.userProfile.token)
    const navigate = useNavigate()
    const dispatch = useDispatch()

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
                    setDispatched(true)
                } else {
                    console.error("Erreur :", response.status);
                    navigate("/")
                }
            } catch (error) {
                console.error("Erreur :", error.message);
            } 
        }

        fetchData();
    }, [dispatch, navigate]); // Assurez-vous que le useEffect dépende de dispatch et navigate


    if (dispatched == true) {
        return (
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/">
                    <img
                        className="main-nav-logo-image"
                        src={argentBankLogo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                {dispatched && ( // Afficher le contenu après le dispatch
                    <div>
                        <Link className="main-nav-item" to="/user">
                            <i className="fa fa-user-circle"></i>
                            {userData.userName}
                        </Link>
                        <Link to="/login" className="main-nav-item" >
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </Link>
                    </div>
                )}
            </nav>
        )
    } else {
        return (
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/">
                    <img
                        className="main-nav-logo-image"
                        src={argentBankLogo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    <Link className="main-nav-item" to="/login">
                        <i className="fa fa-sign-out"></i>
                        Sign In
                    </Link>
                </div>
            </nav>
        )
    }
}

export default Header;
