import React from 'react'

import classes from './BuildControl.module.css';

function BuildControl(props) {
  return (
    <div className={classes.BuildControl}>
      <label className={classes.Label}>{props.label}</label>
      <button onClick={props.removed} className={classes.Less} disabled={props.disabled}>Less</button>
      <button onClick={props.added} className={classes.More}>More</button>
    </div>
  )
}

export default BuildControl
