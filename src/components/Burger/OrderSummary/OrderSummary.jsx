import React from 'react'

import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map((igKey) => {
      return <li key={igKey}>
              <span style={{textTransform:"capitalize"}}>{igKey}</span>: {props.ingredients[igKey]}</li>
    })
  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burgur with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong> the order price is : {props.totalPrice.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.cancelPurchase}>CANCEL</Button>
      <Button btnType="Success" clicked={props.continuePurchase}>CONTINUE</Button>
    </>
  )
}


export default OrderSummary