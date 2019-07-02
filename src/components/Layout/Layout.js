import React, { Component } from "react";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Sidedrawer from "../Navigation/Sidedrawer/Sidedrawer";
class Layout extends Component {
  state = {
    showSidedrawer: false
  };
  sideDrawerClosedHandler = () => {
    this.setState({ showSidedrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return {
        showSidedrawer: !prevState.showSidedrawer
      };
    });
  };
  render() {
    return (
      <React.Fragment>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <Toolbar drawerClicked={this.sideDrawerToggleHandler} />
        <Sidedrawer
          sideDrawerState={this.state.showSidedrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
