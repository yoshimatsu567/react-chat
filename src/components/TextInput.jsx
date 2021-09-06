import React from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { SKY_BLUE, GRAY } from "../utils/constants";

const styles = createStyles({
  notchedOutline: {
    borderColor: `${SKY_BLUE} !important`,
  },
});

const TextInput = withStyles(styles)((props) => {
  const { classes } = props;

  return (
    <TextField
      id="outlined-basic"
      label={props.textInputLabel}
      required={true}
      value={props.value}
      onChange={props.onChange}
      type="text"
      variant="outlined"
      margin="dense"
      autoFocus={true}
      style={{ width: "40rem" }}
      InputProps={{
        classes: {
          notchedOutline: classes.notchedOutline,
        },
      }}
      InputLabelProps={{
        style: { color: GRAY },
      }}
      onCompositionStart={props.onCompositionStart}
      onCompositionEnd={props.onCompositionEnd}
      onKeyDown={props.onKeyDown}
    />
  );
});

export default TextInput;
