import "./Header.css"
import argentBankLogo from "../../assets/img/argentBankLogo.png"
import React from "react"
import {Link} from "react-router-dom"

function Header() {
    return (
        <nav class="main-nav">
      <Link class="main-nav-logo" to="/">
        <img
          class="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link class="main-nav-item" to="/user">
          <i class="fa fa-user-circle"></i>
          Tony
        </Link>
        <Link class="main-nav-item" to="/login">
          <i class="fa fa-sign-out"></i>
          Sign Out
        </Link>
      </div>
    </nav>
    )
}



export default Header