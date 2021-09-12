import React from 'react';
import TextInput from './TextInput';
import SubmitButton from './SubmitButton';
import SubTitle from './SubTitle';
import SubSentence from './SubSentence';
import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/styles';
import { WHITE } from '../utils/constants';

const useStyles = makeStyles({
  FormWrapper: {
    marginTop: '1rem',
    marginBottom: '1rem',
    borderRadius: '1rem',
    width: '98%',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: WHITE,
  },
  InputAndButtonWrapper: {
    paddingRight: '0.5rem',
    paddingLeft: '0.5rem',
    paddingBottom: '2rem',
    display: 'flex',
    justifyContent: 'center',
  },
});

const useSize = () => {
  const theme = useTheme();
  const isMobileSize = useMediaQuery(theme.breakpoints.down('xs'));
  return { isMobileSize };
};

const InputFormCard = (props) => {
  const classes = useStyles();
  const { isMobileSize } = useSize();

  return (
    <>
      <Box color='inherit' className={classes.FormWrapper} boxShadow={5}>
        <SubTitle isMobileSize={isMobileSize} subTitle={props.subTitle} />
        <SubSentence
          isMobileSize={isMobileSize}
          subSentence={props.subSentence}
        />
        <Box className={classes.InputAndButtonWrapper}>
          <TextInput
            textInputLabel={props.textInputLabel}
            value={props.value}
            onChange={props.onChange}
            onCompositionStart={props.onCompositionStart}
            onCompositionEnd={props.onCompositionEnd}
            onKeyDown={props.onKeyDown}
          />
          <SubmitButton
            buttonLabel={props.buttonLabel}
            onClick={() => props.onClick()}
          />
        </Box>
      </Box>
    </>
  );
};

export default InputFormCard;
