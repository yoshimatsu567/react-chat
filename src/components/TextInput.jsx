import React from "react";
import TextField from "@material-ui/core/TextField";

const TextInput = React.memo((props) => {
  return (
    <TextField
      id={props.id}
      label={props.label}
      required={props.required}
      value={props.value}
      onChange={props.onChange}
      type={props.type}
      variant="outlined"
      margin="dense"
      autoFocus={true}
    />
  );
});

export default TextInput;
