import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  SubTitle: {
    paddingTop: '2rem',
    paddingBottom: '1rem',
  },
});

const SubTitle = (props) => {
  const classes = useStyles();

  return (
    <>
      {props.isMobileSize ? (
        <Typography variant='body2' className={classes.SubTitle}>
          {props.subTitle}
        </Typography>
      ) : (
        <Typography className={classes.SubTitle}>{props.subTitle}</Typography>
      )}
    </>
  );
};

export default SubTitle;
