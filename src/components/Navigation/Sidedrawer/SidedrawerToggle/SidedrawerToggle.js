import React from "react";
import classes from "./SidedrawerToggle.module.css";
const sidedrawerToggle = props => {
  return (
    <div onClick={props.clicked} className={classes.SidedrawerToggle}>
      <div />
      <div />
      <div />
    </div>
  );
};

export default sidedrawerToggle;
