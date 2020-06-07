import React from "react";
import {
  withStyles,
  Typography,
  Card,
  CardHeader,
  CardContent,
} from "@material-ui/core";
import PropTypes from "prop-types";
import styles from "../styles";

function TaskCard(props) {
  const classes = props.classes;

  return (
    <Card className={classes.card}>
      <CardHeader
        title={props.name}
        titleTypographyProps={{ variant: "h5" }}
        className={classes.cardHeader}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="body1">{props.description}</Typography>
      </CardContent>
    </Card>
  );
}

TaskCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TaskCard);
