import React from "react";
import logo from "./logo.png"

const Header = () => {
    return (
        <>
           <header className="header">
               <nav className="nav">
                   <div className="img">
                       <img src={logo} alt="logo"></img>
                   </div>
               </nav>
           </header>
        </>
    )
}

export default Header;
