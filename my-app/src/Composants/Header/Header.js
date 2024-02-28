
import "./Header.css";
import argentBankLogo from "../../assets/img/argentBankLogo.webp";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UseUserData from "../Services/useUserData";

const Header = () => {
    const userData = useSelector((state) => state.userProfile.user);

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
            <UseUserData />
            {userData && (
                <div>
                    <Link className="main-nav-item" to="/user">
                        <i className="fa fa-user-circle"></i>
                        {userData.userName}
                    </Link>
                    <Link
                        to="/login"
                        onClick={() => {
                            localStorage.clear("token");
                            window.location.href = "/login"
                        }}
                        className="main-nav-item"
                    >
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </Link>
                </div>
            )}
            {!userData && (
                <div>
                    <Link className="main-nav-item" to="/login">
                        <i className="fa fa-sign-out"></i>
                        Sign In
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Header;
