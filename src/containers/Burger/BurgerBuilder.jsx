import React, { Component } from 'react';
import BurgerGUI from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
  salad: 0.5,
  meat: 1.5,
  cheese: 0.7,
  bacon: 1
}

export default class Burger extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese:0,
      meat: 0,
    },
    totalPrice: 4,
    purchasable: false,
    showModal: false,
  }

  updatedPurchaseState = (ingredients={...this.state.ingredients}) => {
    
    const sum = Object.keys(ingredients).reduce((sum, currentKey) => {return sum += ingredients[currentKey]}, 0)
    
    this.setState({purchasable: sum > 0})
  }

  addIngredientHandler = (type) => {
    let updatedCount = this.state.ingredients[type] + 1;
    let updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    
    this.state.ingredients[type] = updatedCount;

    let updatedIngredients = {...this.state.ingredients}

    this.setState({
      ingredients : updatedIngredients,
      totalPrice: updatedPrice
    })
    // update purchasable
    this.updatedPurchaseState(updatedIngredients);
  }
  
  deleteIngredientHandler = (type) => {
      if(this.state.ingredients[type] == 0){return}

      let updatedCount = this.state.ingredients[type] - 1;
      let updatedPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
      
      this.state.ingredients[type] = updatedCount;
      
      let updatedIngredients = {...this.state.ingredients}
      
      this.setState({
        ingredients : updatedIngredients,
        totalPrice: updatedPrice
      })
    
    // update purchasable
    this.updatedPurchaseState(updatedIngredients);
  }

  showModalHandler = () => {
    this.setState({ 
      showModal: true
    })
  }

  closeModalHandler = () => {
    this.setState({
      showModal: false
    })
  }

  continuePurchaseHandler = () => {
    alert("ooff! you continued!!");
    this.setState({
      showModal: false
    })
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    }
    for(let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] == 0;
    }
    return (
      <>
        <Modal showModal={this.state.showModal} closedModal={this.closeModalHandler}>
          <OrderSummary 
            ingredients={this.state.ingredients}
            totalPrice={this.state.totalPrice}
            cancelPurchase={this.closeModalHandler}
            continuePurchase={this.continuePurchaseHandler}
          />
        </Modal>
        <BurgerGUI ingredients={this.state.ingredients}/>
        <BurgerControls 
          addIngredient={this.addIngredientHandler}
          deleteIngredient={this.deleteIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          showModal={this.showModalHandler}
        />
      </>
    )
  }
}
