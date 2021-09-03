import React from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = createStyles({
  notchedOutline: {
    borderColor: "#00a7db !important",
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
      style={{ width: "50%" }}
      InputProps={{
        classes: {
          notchedOutline: classes.notchedOutline,
        },
      }}
      InputLabelProps={{
        style: { color: "#696969" },
      }}
    />
  );
});

export default TextInput;
