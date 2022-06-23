import React from "react";
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = () => {
    return(
        <>
            <div className={classes.header}>
                <div className={classes.logo}>
                    <NavLink to="/loans" className="h2 semi-bold">Current Loans</NavLink>
                </div>
            </div>
            <div className={classes.headerMargin}></div>
        </>
    );
};

export default Header;
