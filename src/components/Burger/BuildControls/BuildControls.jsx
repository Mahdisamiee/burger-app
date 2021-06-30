import React from 'react'
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl'

const controls = [
  {label: "Salad", type: "salad"},
  {label: "Bacon", type: "bacon"},
  {label: "Cheese", type: "cheese"},
  {label: "Meat", type: "meat"},
]

function BuildControls(props) {
  return (
    <div className={classes.BuildControls}>
      <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
      {controls.map((control)=>(
          <BuildControl 
            label={control.label} 
            key={control.type} 
            added={()=> props.addIngredient(control.type)}
            removed={()=> props.deleteIngredient(control.type)}
            disabled={props.disabled[control.type]}
          />
        )
      )}
      <button className={classes.OrderButton} disabled={!props.purchasable}>CHECK OUT</button>
    </div>
  )
}

export default BuildControls
