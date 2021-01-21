import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
import useStyles from "./mainStyles";
import Form from "./Form/Form";
import List from "./List/List";

import { appContext } from "../../context/context";
import TipCard from "./TipCard";

const Main = () => {
  const classes = useStyles();
  const { balance } = useContext(appContext);

  const balanceColor = balance > 0 ? "rgb(0, 255, 0)" : "rgb(255, 0, 0)";

  return (
    <>
      <Card className={classes.root}>
        <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
        <CardContent>
          <Typography
            align="center"
            variant="h6"
            style={{ marginTop: "-10px", color: balanceColor }}
          >
            Total Balance: ${balance}
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ lineHeight: "1.5em", marginTop: "10px" }}
          >
            <TipCard />
          </Typography>
          <Divider className={classes.divider} />
          <Form />
        </CardContent>
        <CardContent className={classes.cardContent}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <List />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default Main;
