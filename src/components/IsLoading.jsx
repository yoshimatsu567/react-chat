import React from 'react';
import Loader from 'react-loader-spinner';
import { Box } from '@material-ui/core';
import { SKY_BLUE } from '../utils/constants';

const IsLoading = () => {
  return (
    <Box style={{ paddingTop: '7rem' }}>
      <Loader type='Grid' color={SKY_BLUE} height={'4rem'} width={'4rem'} />
    </Box>
  );
};

export default IsLoading;
