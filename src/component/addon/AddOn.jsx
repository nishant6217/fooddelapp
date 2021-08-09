import React from "react";
import { Card, Box, makeStyles, Typography, Button } from "@material-ui/core";
import { addon } from "../../constants/data";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAddon } from "../../redux/actions/cartAction";

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
  container: {
    padding: "90px 0px 0px 20px",
    width: "67%",
  },
});

function AddOn(props) {
  console.log(addon);
  const history = useHistory();
  const dispatch = useDispatch();
  const addToCarts = (addon) => {
    dispatch(addAddon(addon));
    history.push("/cart");
  };
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      {addon.map((addon) => (
        <Card className={classes.component}>
          <Box className={classes.leftComponent}>
            <img src={addon.url} className={classes.image} />
          </Box>
          <Box className={classes.rightComponent}>
            <Typography className={classes.mealName}>{addon.name}</Typography>
            <Typography style={{ marginTop: 10 }} className={classes.mealPrice}>
              ₹ {addon.price}
            </Typography>
            <Box style={{ display: "flex" }}>
              <Box className={classes.btnBox}>
                <Button
                  variant="outlined"
                  color="secondary"
                  className={classes.remove}
                  onClick={() => addToCarts(addon)}
                >
                  add
                </Button>
              </Box>
            </Box>
          </Box>
        </Card>
      ))}
    </Box>
  );
}

export default AddOn;
