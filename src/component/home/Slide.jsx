import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Box, makeStyles, Typography, Divider } from "@material-ui/core";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const useStyles = makeStyles({
  component: {
    background: "#f9ffe5",
  },
  image: {
    height: 200,
    borderRadius: 4,
  },
  hungry: {
    padding: "15px 30px",
  },
  hungryText: {
    fontSize: 30,

    fontFamily: "sans-serif",
    color: "#d70f64",
  },
  subtext: {
    fontFamily: "museo-sans , sans-serif",
    fontWeight: 300,
    fontSize: 14,
  },
  text: {
    fontSize: 14,
    marginTop: 5,
  },
});
function Slide({ restro }) {
  const classes = useStyles();
  return (
    <Box className={classes.component}>
      <Box className={classes.hungry}>
        <Typography className={classes.hungryText}>Hungry ?</Typography>
        <Typography className={classes.subtext}>
          Order food from favourite restaurants near you.
        </Typography>
      </Box>
      <Divider></Divider>
      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={false}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        showDots={false}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {restro.map((restro) => (
          <Link to={`restro/${restro.id}`}>
            <Box textAlign="center" style={{ paddingTop: 20 }}>
              <img src={restro.url} className={classes.image} />
              <Typography
                className={classes.text}
                style={{ fontWeight: 600, color: "#212121" }}
              >
                {restro.title.shortTitle}
              </Typography>
              <Typography className={classes.text} style={{ color: "#212121" }}>
                {restro.title.longTitle}
              </Typography>

              <Typography className={classes.text} style={{ color: "#d70f64" }}>
                {restro.discount}
              </Typography>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Box>
  );
}

export default Slide;
