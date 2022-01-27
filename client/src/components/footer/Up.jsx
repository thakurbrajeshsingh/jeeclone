import React from "react";
import { Button, makeStyles, AppBar, Toolbar, Box } from "@material-ui/core";

const useStyle = makeStyles({
  container: {
    background: "#2E5274",
    marginBottom:"0px"
    // marginTop: "60vh",
  },
  footimg: {
    margin: "0px 60px 0px 60px",
    padding: 1,
  },
});

const Main = () => {
  const img1 = "https://i.ibb.co/P5ww41r/1.png";
  const img2 = "https://i.ibb.co/K2DzGBw/2.png";
  const img3 = "https://i.ibb.co/B2C04CB/3.png";
  const img4 = "https://i.ibb.co/FKH4Qwr/4.png";
  const img5 = "https://i.ibb.co/fCQK34h/5.png";

  const classes = useStyle();
  return (
    <>
      
        <Box className={classes.container}>
          <img src={img1} className={classes.footimg} />
          <img src={img2} className={classes.footimg} />
          <img src={img3} className={classes.footimg} />
          <img src={img4} className={classes.footimg} />
          <img src={img5} className={classes.footimg} />
        </Box>
      
    </>
  );
};

export default Main;
