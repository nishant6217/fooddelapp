import React, { useEffect } from "react";
import {
  Box,
  Typography,
  makeStyles,
  Divider,
  Button,
  Checkbox,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMealDetail } from "../../redux/actions/restroAction";
import { addToCart } from "../../redux/actions/cartAction";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  wrapper: {
    paddingTop: 100,
  },
  container: {
    display: "flex",
    padding: "10px 60px 10px 60px",
  },
  image: {
    width: 310,
    borderRadius: 5,
  },
  mealName: {
    fontSize: 32,
    fontWeight: 600,
    color: "#d70f64",
  },
  mealPrice: {
    fontSize: 17,
    paddingTop: 10,
    color: "#9E9E9E",

    //#9E9E9E
  },
  mealDecription: {
    paddingTop: 10,
    fontSize: 14,
  },
  textCon: {
    paddingLeft: 50,
  },
  button: {
    padding: "10px 0px 0px 610px",
  },
});

function MealDetail({ match }) {
  const classes = useStyles();
  const history = useHistory();
  const { meal } = useSelector((state) => state.getMealDetail);
  const dispatch = useDispatch();
  const addToCarts = () => {
    dispatch(addToCart(meal.name));
    history.push("/cart");
  };

  useEffect(() => {
    dispatch(getMealDetail(match.params.id));
  }, [dispatch]);
  if (meal === undefined) {
    return <Typography>Loading...</Typography>;
  } else
    return (
      <Box className={classes.wrapper}>
        <Divider />
        <Box className={classes.container}>
          <Box className={classes.imageCon}>
            <img src={meal.url} className={classes.image} />
          </Box>
          <Box className={classes.textCon}>
            <Typography className={classes.mealName}>{meal.name}</Typography>
            <Typography className={classes.mealPrice}>
              ₹ {meal.price}
            </Typography>
            <Typography className={classes.mealDecription}>
              {meal.description}
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box className={classes.button}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => addToCarts()}
          >
            ADD TO CART
          </Button>
        </Box>
      </Box>
    );
}

export default MealDetail;
