import React from "react";
import { Card, Box, makeStyles, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  component: {
    display: "flex",
    borderRadius: 0,
  },
  leftComponent: {
    marginTop: 20,
    paddingLeft: 20,
    paddingBottom: 20,
  },
  rightComponent: {
    marginTop: 20,

    paddingLeft: 300,
  },
  image: {
    width: 140,
    borderRadius: 5,
  },
  mealName: {
    fontSize: 18,
    fontWeight: 300,
    color: "#d70f64",
  },
  mealPrice: {
    fontSize: 17,

    color: "#878787",
  },
  remove: {
    fontSize: 10,
  },
  btnBox: {
    paddingTop: 10,
  },
  addon: {
    fontSize: 10,
    paddingLeft: 5,
  },
});

function CartItem({ meal, removeItemFromCart }) {
  const classes = useStyles();
  return (
    <Card className={classes.component}>
      <Box className={classes.leftComponent}>
        <img src={meal.url} className={classes.image} />
      </Box>
      <Box className={classes.rightComponent}>
        <Typography className={classes.mealName}>{meal.name}</Typography>
        <Typography style={{ marginTop: 10 }} className={classes.mealPrice}>
          ₹ {meal.price}
        </Typography>
        <Box style={{ display: "flex" }}>
          <Box className={classes.btnBox}>
            <Button
              variant="outlined"
              color="secondary"
              className={classes.remove}
              onClick={() => removeItemFromCart(meal.name)}
            >
              remove
            </Button>
          </Box>
          {meal.description  ?(
            <Box className={classes.btnBox} style={{ paddingLeft: 5 }}>
            <Link to={`addon`} style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                color="secondary"
                className={classes.remove}
              >
                add on
              </Button>
            </Link>
          </Box>
          ):
          (
            <Box></Box>
          )}
        </Box>
      </Box>
    </Card>
  );
}

export default CartItem;
