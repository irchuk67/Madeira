import React from "react";
import Logo from './../Assets/images/Logo.jpg'
import Nav from "./NavBar";
import MakeOrderButton from "./MakeOrderButton";
import classes from './header.module.css'

function Header(){
    return(
        <div className={classes.headerWrapper}>
            <img alt='logo'  src={Logo} className={classes.logo}/>
            <Nav className={classes.navBar}/>
            <MakeOrderButton classNAme={classes.orderButton}/>
        </div>
    )

}
export default Header;