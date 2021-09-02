import React from "react";
import Button from "@material-ui/core/Button";

const SubmitButton = React.memo((props) => {
  return (
    <Button variant="contained" color="primary" onClick={() => props.onClick()}>
      {props.label}
    </Button>
  );
});

export default SubmitButton;
