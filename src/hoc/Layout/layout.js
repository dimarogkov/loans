import React from "react";
import classes from "./Layout.module.css";
import Header from "../../components/header/Header";

const Layout = props => {
    return(
        <div className={classes.layout}>
            <Header />
            <main>
                { props.children }
            </main>
        </div>
    );
};

export default Layout;
