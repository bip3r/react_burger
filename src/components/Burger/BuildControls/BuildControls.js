import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" }
];

const buildControls = props => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>{props.price.toFixed(2)}$</strong>
      </p>
      {controls.map(element => {
        return (
          <BuildControl
            added={() => props.ingAdded(element.type)}
            removed={() => props.ingRemoved(element.type)}
            key={element.label}
            label={element.label}
            disabled={props.disabled[element.type]}
          />
        );
      })}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.purchased}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
