import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, makeStyles, Typography, Button } from "@material-ui/core";
import { removeFromCart } from "../../redux/actions/cartAction";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import OrderDetail from "./OrderDetail";

const useStyles = makeStyles({
  component: {
    marginTop: 65,
    padding: "30px 135px",
    display: "flex",
  },
  leftComponent: {
    width: "67%",
  },
  header: {
    padding: "15px 24px",
    background: "#fff",
  },
  btn: {
    display: "flex",
    marginLeft: "auto",
  },
});

function Cart(props) {
  const classes = useStyles();
  const { cartItem } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("1111111111111", cartItem);
  });
  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <>
      {cartItem.length ? (
        <Box className={classes.component}>
          <Box className={classes.leftComponent}>
            <Box className={classes.header}>
              <Typography
                style={{ fontWeight: 600, fontSize: 18, color: "#d70f64" }}
              >
                My Cart({cartItem.length})
              </Typography>
            </Box>
            {cartItem.map((meal) => (
              <CartItem meal={meal} removeItemFromCart={removeItemFromCart} />
            ))}

            <Box className={classes.btn}>
              <Button variant="outlined" color="secondary">
                Checkout
              </Button>
            </Box>
          </Box>

          <OrderDetail cartItem={cartItem} />
        </Box>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}

export default Cart;
