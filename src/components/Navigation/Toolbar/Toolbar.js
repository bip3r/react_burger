import React from "react";
import Logo from "../../Logo/Logo";
import classes from "./Toolbar.module.css";
import NavigationItems from "./NavigationItems/NavigationItems";
import SidedrawerToggle from "../Sidedrawer/SidedrawerToggle/SidedrawerToggle";
const toolbar = props => (
  <header className={classes.Toolbar}>
    <SidedrawerToggle clicked={props.drawerClicked} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
