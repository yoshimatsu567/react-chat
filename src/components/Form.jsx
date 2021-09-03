import React from "react";
import TextInput from "../components/TextInput";
import SubmitButton from "../components/SubmitButton";
import { Box, Typography } from "@material-ui/core";

const Form = (props) => {
  return (
    <>
      <Box color="inherit" style={{ paddingTop: "3%", paddingBottom: "5%" }}>
        <Typography style={{ paddingBottom: "2%" }}>
          {props.subTitle}
        </Typography>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
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
