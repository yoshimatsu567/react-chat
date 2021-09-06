import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  MainTitle: {
    flexGrow: 1,
  },
});

const HeaderMainTitle = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h5" className={classes.MainTitle}>
        チャットアプリ
      </Typography>
    </>
  );
};

export default HeaderMainTitle;
