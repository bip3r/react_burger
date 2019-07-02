import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Model from "../../components/UI/Model/Model";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
const ING_PRICES = {
  salad: 0.5,
  cheese: 0.7,
  meat: 1.6,
  bacon: 1.2
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      meat: 0,
      cheese: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchased: false
  };

  canBurgerBePurchased(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }

  addIngredientHandler = type => {
    const newIng = {
      ...this.state.ingredients
    };
    newIng[type]++;
    const newPrice = this.state.totalPrice + ING_PRICES[type];
    this.setState({
      ingredients: newIng,
      totalPrice: newPrice
    });
    this.canBurgerBePurchased(newIng);
  };

  removeIngredientHandler = type => {
    const newIng = {
      ...this.state.ingredients
    };
    if (newIng[type] <= 0) {
      return;
    }
    newIng[type]--;
    const newPrice = this.state.totalPrice - ING_PRICES[type];
    this.setState({
      ingredients: newIng,
      totalPrice: newPrice
    });
    this.canBurgerBePurchased(newIng);
  };

  purchaseHandler = () => {
    this.setState({ purchased: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchased: false });
  };

  purchaseSuccessHandler = () => {
    alert("congrats!");
  };

  render() {
    const disableInfo = {
      ...this.state.ingredients
    };

    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }

    return (
      <React.Fragment>
        <Model
          show={this.state.purchased}
          modelClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            cancel={this.purchaseCancelHandler}
            buy={this.purchaseSuccessHandler}
            price={this.state.totalPrice}
          />
        </Model>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingAdded={this.addIngredientHandler}
          ingRemoved={this.removeIngredientHandler}
          disabled={disableInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          purchased={this.purchaseHandler}
        />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
