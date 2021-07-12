import React from 'react'
import classes from './BackDrop.module.css'

const BackDrop = (props) => {
  return props.showModal ? <div className={classes.BackDrop} onClick={props.clicked}></div> : null
  
}

export default BackDrop
