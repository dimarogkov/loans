import React from "react";
import classes from "./Popup.module.css";
import {useForm} from "react-hook-form";

const Popup = props => {
    const {
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm({mode: 'onBlur'});

    const cls = [
        "inputBlock",
        Object.keys(errors).length > 0 ? "invalid" : null
    ];

    return(
        <div className={classes.popup}>

            <div className={classes.popupLayer}></div>

            <div className={classes.popupContainer}>
                <div className={classes.layerClose} onClick={props.onPopupClose}></div>

                <div className={classes.popupBlock}>
                    <div className={classes.popupClose} onClick={props.onPopupClose}/>

                    <div className={classes.popupCont}>
                        <h1 className="h1 semi-bold">Invest in Loan</h1>
                        <div className="text">{props.loan.title}</div>
                        <div className="text">
                            <p>Amount available: ${ props.isInputChanged? props.changedAvailable: props.loan.available }</p>
                            <p>Loan ends in: 1 month 10 days</p>
                        </div>
                    </div>

                    <div className={classes.popupForm}>
                        <div className="h2 semi-bold">Investment amount</div>
                        <form onSubmit={handleSubmit(props.onSubmit)}>
                            <div className={cls.join(" ")}>
                                { errors[props.loan.id] && <p>{ errors[props.loan.id].message }</p> }
                                <input
                                    {...register(props.loan.id, {
                                        required: {
                                            value: true,
                                            message: "Input is Required"
                                        },
                                        max: {
                                            value: +props.loan.available.replace(',',''),
                                            message: `The maximum value of this Loan is - $ ${props.loan.available.replace(',','.')}`
                                        },
                                        min: {
                                            value: 1,
                                            message: "The min value is $1"
                                        },
                                        pattern: {
                                            value: /^[0-9]+$/,
                                            message: "Value Should be Number"
                                        }
                                    })}
                                    type="number"
                                    placeholder="Amount"
                                    onChange={event => props.onChange(event, props.loan)} />
                            </div>
                            <button type="submit" className="btn" disabled={!isValid}>Invest</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Popup;
