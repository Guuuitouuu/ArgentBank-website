import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser, setToken } from "../redux/features/userProfile"


import Footer from "../Composants/Footer/Footer";
import Header from "../Composants/Header/Header";
import User from "../Composants/User/User";

function UserPage() {


    
    return (
        <>
            <Header />
            <User />
            <Footer />
        </>
    );
}

export default UserPage;
