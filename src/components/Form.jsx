import React from "react";
import TextInput from "../components/TextInput";
import SubmitButton from "../components/SubmitButton";
import { Box, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/styles";
import { WHITE } from "../utils/constants";

const useStyles = makeStyles({
  FormWrapper: {
    marginTop: "1rem",
    marginBottom: "1rem",
    borderRadius: "1rem",
    width: "98%",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: WHITE,
  },
  SubTitle: {
    paddingTop: "2rem",
    paddingBottom: "1rem",
  },
  SubSentence: {
    paddingBottom: "1rem",
  },
  InputAndButtonWrapper: {
    paddingRight: "0.5rem",
    paddingLeft: "0.5rem",
    paddingBottom: "2rem",
    display: "flex",
    justifyContent: "center",
  },
});

const useSize = () => {
  const theme = useTheme();
  const isMobileSize = useMediaQuery(theme.breakpoints.down("xs"));
  return { isMobileSize };
};

const Form = React.memo((props) => {
  const classes = useStyles();
  const { isMobileSize } = useSize();

  return (
    <>
      <Box color="inherit" className={classes.FormWrapper} boxShadow={5}>
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
});

export default Form;
