import React from "react";
import classes from "./Loan.module.css";

const Loan = props => {
    return(
        <div className={classes.loan}>
            {
                props.active
                    ? <span className={classes.loanLabel}>Invested</span>
                    : null
            }
            <div className={classes.loanCont}>
                <h3 className="h3 semi-bold">{props.loan.title}</h3>
                <div className="text">
                    <span>ID - {props.loan.id}, </span>
                    <span>Tranche - {props.loan.tranche}</span>
                </div>
            </div>
            <button className="btn" onClick={() => props.onPopupOpen(props.loan)}>Invest</button>
        </div>
    );
};

export default Loan;
