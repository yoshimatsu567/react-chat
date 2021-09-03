import React from "react";
import Button from "@material-ui/core/Button";

const SubmitButton = React.memo((props) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => props.onClick()}
      style={{ marginLeft: "3%", backgroundColor: "#00a7db" }}
    >
      {props.buttonLabel}
    </Button>
  );
});

export default SubmitButton;
