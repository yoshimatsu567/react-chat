import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  Alert: { marginTop: '1%' },
});

const ImportantIndication = () => {
  const classes = useStyles();
  return (
    <>
      <Alert variant='outlined' color='error' className={classes.Alert}>
        タブを消したり、画面から離れたりする際はログアウトをしてください！
      </Alert>
    </>
  );
};

export default ImportantIndication;
