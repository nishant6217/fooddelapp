import React from "react";
import { makeStyles, Box, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";

import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  container: {
    paddingTop: 10,
    display: "flex",
    justifyContent: "space-between",
    padding: "0 70px 0 70px",
  },
  heading: {
    textAlign: "center",
    fontSize: 40,
    color: "#d70f64",
  },
}));

function Menu(props) {
  const meals = props.meals;
  console.log(meals);
  const classes = useStyles();

  if (meals === undefined) {
    return <Typography>Loading..</Typography>;
  } else
    return (
      <Box>
        <Typography className={classes.heading}>Recommended..</Typography>

        <Box className={classes.container}>
          {meals.map((item) => (
            <Link to={`getmeals/${item.name}`} style={{ textDecoration: "none" }}>
              <Card className={classes.root}>
                <CardMedia
                  className={classes.media}
                  image={item.url}
                  title={item.name}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          ))}
        </Box>
      </Box>
    );
}

export default Menu;
