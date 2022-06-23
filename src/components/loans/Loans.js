import React, {useEffect, useState} from "react";
import classes from "./Loans.module.css";
import Data from "../../data/loans.json";
import Loan from "../loan/Loan";
import Loader from "../../ui/loader/Loader";
import Popup from "../../ui/popup/Popup";
import Total from "../total/Total";

const Loans = () => {
    const [loader, loaderSet] = useState(true);
    const [loans, loansSet] = useState([]);
    const [isPopupOpen, isPopupOpenSet] = useState(false);
    const [loanInPopup, loanInPopupSet] = useState({});
    const [loanInvested, loanInvestedSet] = useState({});
    const [changedAvailable, changedAvailableSet] = useState(0);
    const [totalAmount, totalAmountSet] = useState(0);
    const [isInputChanged, isInputChangedSet] = useState(false);

    useEffect(() => {
        try {
            setTimeout(() => {
                loansSet(Data.loans);
                loaderSet(false);
                const calcAllAvailable = (Data.loans.reduce((acc, item) => acc + parseFloat(item.available.replace(',', '.')), 0)).toFixed(3).replace('.', ',');
                totalAmountSet(calcAllAvailable);
            }, 2000);
        } catch (error) {
            console.log(error);
        }
    }, [loansSet, loaderSet, totalAmountSet]);

    const onPopupOpen = loan => {
        document.body.classList.add('lock');
        isPopupOpenSet(true);
        loanInPopupSet(loan);
    }

    const onPopupClose = () => {
        document.body.classList.remove('lock');
        isPopupOpenSet(false);
        loanInPopupSet({});
        changedAvailableSet(0);
        isInputChangedSet(false);
    }

    const onChange = (event, loan) => {
        const thAvailable = +loan.available.replace(',', '');
        const currentAvailable = +event.target.value;
        const newAvailable = +(thAvailable - currentAvailable);

        isInputChangedSet(true);
        changedAvailableSet(Intl.NumberFormat('en-US').format(newAvailable));
    }

    const onSubmit = data => {
        loanInvestedSet({
            active: +Object.keys(data)[0]
        });

        const calcAllAvailable = +totalAmount.replace(',','') - +data[Object.keys(data)]
        totalAmountSet(Intl.NumberFormat('en-US').format(calcAllAvailable));

        onPopupClose();
    }

    return(
        <>
            { isPopupOpen
                ? <Popup loan={loanInPopup}
                         changedAvailable={changedAvailable}
                         isInputChanged={isInputChanged}
                         onPopupClose={onPopupClose}
                         onChange={onChange}
                         onSubmit={onSubmit}/>
                : null
            }

            {
                loader
                    ? <Loader />
                    : <>
                        <div className={classes.loans}>
                            {
                                loans.map((loan, index) => (
                                    <Loan
                                        key={index}
                                        loan={loan}
                                        active={loanInvested.active === +loan.id}
                                        onPopupOpen={onPopupOpen} />
                                ))
                            }
                        </div>

                        <Total totalAmount={totalAmount} />
                    </>
            }
        </>
    );
};

export default Loans;
