import React from "react";
import { Box, Typography, makeStyles, Divider } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";

const useStyles = makeStyles({
  component: {
    width: "30%",
    background: "#fff",
    marginLeft: 20,

    border: "1px solid #f0f0f0",
  },
  header: {
    padding: "16px 24px",
    borderBottom: "1px solid #f0f0f0",
  },
  container: {
    padding: "15px 24px",
    "& > * ": {
      marginTop: 20,
      fontSize: 14,
    },
  },
  price: {
    float: "right",
  },
});

function OrderDetail({ cartItem }) {
  const classes = useStyles();
  const [price, setPrice] = useState(0);
  const totalAmount = () => {
    let price = 0;
    cartItem.map((item) => {
      price += item.price;
    });
    setPrice(price);
  };
  useEffect(() => {
    totalAmount();
  }, [cartItem]);
  return (
    <Box className={classes.component}>
      <Box className={classes.header}>
        <Typography style={{ color: "#d70f64" }}>DETAILS</Typography>
      </Box>
      <Box className={classes.container}>
        <Typography>
          Price({cartItem.length} Item){" "}
          <span className={classes.price}>₹ {price}</span>
        </Typography>

        <Typography>
          Delivery Charges <span className={classes.price}>₹ 40</span>
        </Typography>
        <Divider />

        <Typography style={{ fontWeight: 600 }}>
          Total Amount<span className={classes.price}>₹ {price + 40}</span>
        </Typography>
      </Box>
    </Box>
  );
}

export default OrderDetail;
