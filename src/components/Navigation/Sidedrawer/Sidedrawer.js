import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../Toolbar/NavigationItems/NavigationItems";
import classes from "./Sidedrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
const sidedrawer = props => {
  let attachedClasses = [classes.Sidedrawer, classes.Close];
  if (props.sideDrawerState) {
    attachedClasses = [classes.Sidedrawer, classes.Open];
  }
  return (
    <React.Fragment>
      <Backdrop show={props.sideDrawerState} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default sidedrawer;
