import classes from "./CartButton.module.css";
import { uiActions } from "../../store";
import { useDispatch, useSelector } from "react-redux/es/exports";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const cartToggleHandler = () => {
    dispatch(uiActions.showCart());
  };

  return (
    <button className={classes.button} onClick={cartToggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
