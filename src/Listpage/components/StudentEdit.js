import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import StudentSearchBar from './StudentSearchBar';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor:'lightgrey',
    flexGrow: 1,
    marginTop:30,
    marginLeft:450,
    width:900,
    borderRadius:7,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    marginLeft:30,
    marginTop:10,
    marginBottom:10,
  },
  button: {
    height:30,
    marginTop:30,
  },
  add_student: {
      marginTop:30,
      float:'right',
      marginRight:10,
  }
}));

export default function StudentEdit() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={11}>
          <Paper className={classes.paper}>student</Paper>
        </Grid>
        {/* <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid> */}
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <StudentSearchBar />
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
          <Button className={classes.button} variant="contained" color="primary"  size="small">Edit</Button>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
          <Button className={classes.button} variant="contained" color="primary"  size="small">Edit</Button>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
          <Button className={classes.button} variant="contained" color="primary"  size="small">Edit</Button>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
          <Button className={classes.button} variant="contained" color="primary"  size="small">Edit</Button>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
          <Button className={classes.button} variant="contained" color="primary"  size="small">Edit</Button>
        </Grid>
      </Grid>
      <Button className={classes.add_student} variant="contained" color="primary">
        back
      </Button>
      <Button className={classes.add_student} variant="contained" color="secondary">
        add student
      </Button>
    </div>
  );
}