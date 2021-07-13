import React, { Component } from "react";
import classes from "./TabLayer.module.css";

import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class TabLayer extends Component {

  state = {
    showSideDrawer : false,
  }

  sideDrawerCloseHandler = () => {
    this.setState({showSideDrawer : false})
  }
  sideDrawerToggleHandler = () => {
    this.setState((preState)=>{
      return {showSideDrawer : !this.state.showSideDrawer}
    })
  }

  render(){
    return (
      <>
        <Toolbar  
          drawerToggleclicked={this.sideDrawerToggleHandler}
        />
        <SideDrawer 
          open={this.state.showSideDrawer} 
          closed={this.sideDrawerCloseHandler}  
        />
        <main className={classes.Content}>{this.props.children}</main>
      </>
    );
  }
}

export default TabLayer;
