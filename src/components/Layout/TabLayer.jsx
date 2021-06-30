import React from "react";
import classes from "./TabLayer.module.css";

function TabLayer(props) {
  return (
    <>
      <div>Toolbar / Sidebar / Backdrop</div>
      <main className={classes.Content}>{props.children}</main>
    </>
  );
}

export default TabLayer;
