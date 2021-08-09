import React from "react";
import { Box, makeStyles, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles({
  component: {
    padding: "80px 140px",
    width: "80%",
    background: "#fff",
  },
  image: {
    width: "50%",
  },
  container: {
    textAlign: "center",
    paddingTop: 10,
  },
  btn: {
    paddingRight: "50",
  },
});

function EmptyCart(props) {
  const history = useHistory();
  const addItem = () => {
    history.push("/");
  };
  const classes = useStyles();
  const emptyCartUrl =
    "https://i.pinimg.com/originals/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.png";
  return (
    <Box className={classes.component}>
      <Box className={classes.container}>
        <img src={emptyCartUrl} className={classes.image} />
        <Box>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.btn}
            onClick={() => addItem()}
          >
            hungry ?
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default EmptyCart;
