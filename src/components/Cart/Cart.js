import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartItemsArray = cartItems.map((cartItem) => {
    return (
      <CartItem
        key={cartItem.itemId}
        item={{
          title: cartItem.name,
          quantity: cartItem.quantity,
          total: cartItem.totalPrice,
          price: cartItem.price,
        }}
      />
    );
  });
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cartItemsArray}</ul>
    </Card>
  );
};

export default Cart;
