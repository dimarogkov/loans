import React from "react";
import classes from "./Error.module.css";
import {NavLink} from "react-router-dom";

const Error = () => {
    return(
        <div className={classes.error}>
            <h2 className="h1 semi-bold">Error 404</h2>
            <div className="text">This page is not find</div>
            <NavLink to="/loans" className="btn">Back Home</NavLink>
        </div>
    );
};

export default Error;
