import React from "react";
import { AppBar, Toolbar, makeStyles, Box } from "@material-ui/core";
import { Link } from "react-router-dom";



// importing components 
import HeaderButtons from "./HeaderButtons";

const useStyles = makeStyles({
  header: {
    background: "#FFFFFF",
    height: 67,
  },
  logo: {
    width: "151px",
  },
  component:{
      marginLeft : "9%"
  }
});

function Header(props) {
  const classes = useStyles();
  const urlLogo =
    "https://www.foodpanda.com/wp-content/uploads/2019/12/food-panda-logo-vector.png";
  return (
    <AppBar className={classes.header}>
      <Toolbar>
        <Link to="/" className={classes.component}>
          <img src={urlLogo} className={classes.logo} />
        </Link>
        <HeaderButtons />
      </Toolbar>
    </AppBar>
    
  );
}

export default Header;
