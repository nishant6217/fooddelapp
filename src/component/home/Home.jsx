import { Box } from "@material-ui/core";
import React from "react";
import Banner from "./Banner";
import Slide from "./Slide";
// import { restro } from "../../constants/data";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRestro as listRestro } from "../../redux/actions/restroAction";

function Home(props) {
  const { restro } = useSelector((state) => state.getRestro);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listRestro());
  }, [dispatch]);
  return (
    <div>
      <Banner />
      <Slide restro={restro} />
    </div>
  );
}

export default Home;
