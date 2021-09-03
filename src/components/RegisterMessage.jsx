import React from "react";
import { Typography, Grid } from "@material-ui/core";

const RegisterMessage = (props) => {
  return (
    <Grid
      container
      style={{
        backgroundColor: "#ffffff",
        marginBottom: 5,
        justifyContent: "flex-start",
      }}
    >
      <Grid
        item
        style={{
          textAlign: "left",
          backgroundColor: "#dcdcdc",
          padding: "8px",
          borderRadius: "5px",
        }}
        xs={5}
      >
        <Typography style={{ fontSize: "14px", wordWrap: "break-word" }}>
          {props.sentence}
        </Typography>
        <Typography style={{ fontSize: "0.4rem", textAlign: "right" }}>
          {props.username}
        </Typography>
      </Grid>
      <Typography
        style={{
          fontSize: "10px",
          color: "#696969",
          alignSelf: "flex-end",
          paddingLeft: "5px",
        }}
      >
        5分前
      </Typography>
    </Grid>
  );
};

export default RegisterMessage;
