import classes from "./CartButton.module.css";
import { cartActions } from "../../store";
import { useDispatch } from "react-redux/es/exports";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const cartToggleHandler = () => {
    dispatch(cartActions.showCart());
  };

  return (
    <button className={classes.button} onClick={cartToggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
