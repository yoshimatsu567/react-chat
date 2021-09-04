import React from "react";
import TextInput from "../components/TextInput";
import SubmitButton from "../components/SubmitButton";
import { Box, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  FormWrapper: {
    paddingTop: "3rem",
    paddingBottom: "4rem",
  },
  SubTitle: {
    paddingBottom: "1rem",
  },
  SubSentence: {
    paddingBottom: "1rem",
  },
  InputAndButtonWrapper: {
    display: "flex",
    justifyContent: "center",
  },
});

const useSize = () => {
  const theme = useTheme();
  const isMobileSize = useMediaQuery(theme.breakpoints.down("xs"));
  return { isMobileSize };
};

const Form = (props) => {
  const classes = useStyles();
  const { isMobileSize } = useSize();

  return (
    <>
      <Box color="inherit" className={classes.FormWrapper}>
        {isMobileSize ? (
          <Typography variant="body2" className={classes.SubTitle}>
            {props.subTitle}
          </Typography>
        ) : (
          <Typography className={classes.SubTitle}>{props.subTitle}</Typography>
        )}
        {isMobileSize ? (
          <Typography variant="subtitle2" className={classes.SubSentence}>
            {props.subSentence}
          </Typography>
        ) : (
          <Typography className={classes.SubSentence}>
            {props.subSentence}
          </Typography>
        )}
        <Box className={classes.InputAndButtonWrapper}>
          <TextInput
            textInputLabel={props.textInputLabel}
            value={props.value}
            onChange={props.onChange}
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

export default Form;
