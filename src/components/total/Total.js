import React from "react";
import classes from "./Total.module.css";

const Total = props => (
    <div className={classes.total}>
        <div className="text semi-bold">
            <p>Total amount available for investment:</p>
            <p>$ {props.totalAmount}</p>
        </div>
    </div>
);

export default Total;
