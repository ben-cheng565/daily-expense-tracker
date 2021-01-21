import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";

import useTransactions from "../../useTransactions";

import useStyles from "./detailStyles";

const Details = (props) => {
  const classes = useStyles();
  const { totalPerType, chartData } = useTransactions(props.title);

  const title = `${props.title}: $${totalPerType}`;

  return (
    <Card
      className={props.title === "Income" ? classes.income : classes.expense}
    >
      <CardHeader title={title} />
      <CardContent>
        {/* <Typography variant="h5">${totalPerType}</Typography> */}
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default Details;
