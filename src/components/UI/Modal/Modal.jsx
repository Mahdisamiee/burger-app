import React from 'react'

import classes from './Modal.module.css'
import BackDrop from '../BackDrop/BackDrop'

const  Modal = (props) => {
  return (
    <>
      <BackDrop show={props.showModal} clicked={props.closedModal} />
      <div 
        style={{
          transform: props.showModal ? "translateY(0)": "translateY(-100vh)",
          opacity: props.showModal ? "1" : "0"
        }} 
        className={classes.Modal}
      >
        {props.children}
      </div>
    </>
  )
}

export default Modal
