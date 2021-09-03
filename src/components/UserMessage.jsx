import React from "react";
import { Typography, Grid } from "@material-ui/core";

const UserMessage = (props) => {
  return (
    <Grid
      container
      style={{
        marginBottom: 5,
        justifyContent: "flex-end",
      }}
    >
      <Typography
        style={{
          fontSize: "10px",
          color: "#696969",
          alignSelf: "flex-end",
          paddingRight: "5px",
        }}
      >
        5分前
      </Typography>
      <Grid
        item
        xs={5}
        style={{
          textAlign: "left",
          backgroundColor: "#00a7db",
          padding: "8px",
          borderRadius: "5px",
        }}
      >
        <Typography
          style={{
            color: "#ffffff",
            fontSize: "14px",
            wordWrap: "break-word",
          }}
        >
          {props.sentence}
        </Typography>
        <Typography
          style={{
            color: "#ffffff",
            fontSize: "0.4rem",
            textAlign: "right",
          }}
        >
          {props.username}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default UserMessage;
