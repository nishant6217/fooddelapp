import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRestroDetails } from "../../redux/actions/restroAction";
import { Box, Typography, makeStyles, Divider } from "@material-ui/core";
import Menu from "../menu/Menu";

const useStyles = makeStyles({
  container: {
    paddingTop: 68,
    width: "100%",

    background: "#FFFFFF",
  },
  image: {
    height: 175,
    width: 250,
    borderRadius: 5,
  },
  subContainer: {
    display: "flex",
    padding: "45px 0px 45px 77px",
  },
  detailText: {
    paddingLeft: "55px",
  },
  restName: {
    fontSize: 32,
    fontWeight: 600,
    color: "#d70f64",
  },
  restDetail: {
    fontSize: 17,
    paddingTop: 10,
    color: "#212121",
  },
  offer: {
    paddingLeft: 240,
  },
});

function DetailView({ match }) {
  const classes = useStyles();
  const { restro } = useSelector((state) => state.getRestroDetail);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestroDetails(match.params.id));
  }, [dispatch]);
  return (
    <Box className={classes.container}>
      <Box className={classes.subContainer}>
        <Box>
          <img src={restro.url} className={classes.image} />
        </Box>
        <Box className={classes.detailText}>
          <Typography className={classes.restName}>
            Belgian Waffle Factory
          </Typography>
          <Typography className={classes.restDetail}>
            American, Desserts, Fast Food
          </Typography>
          <Typography className={classes.restDetail}>
            M.I.G. 5Th Block, Koramangala
          </Typography>

          <Typography style={{ color: "#d70f64", paddingTop: 10 }}>
            500+ Ratings
          </Typography>
        </Box>
      </Box>
      <Divider></Divider>
      <Menu />
    </Box>
  );
}

export default DetailView;
