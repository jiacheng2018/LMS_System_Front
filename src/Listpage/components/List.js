import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: 600,
    height:500,
    marginLeft:550,
    marginTop:-175,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 30,
    textAlign:'center',
  },
  pos: {
    marginTop: 100,
    marginLeft:230,
  },
  admin_info : {
    marginLeft:65,
  },
  twoButton: {
    marginLeft:230,
    marginTop:10,
  }
});

export default function List() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Hello, Welcome to JR Academy.
        </Typography>
        <Typography className={classes.admin_info} variant="h5" component="h2">
          Role: admin
        </Typography>
        <Typography className={classes.admin_info} variant="h5" component="h2">
        Last Logged In:
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.twoButton} variant="contained" color="primary" className={classes.pos} size="small">Course List</Button>
      </CardActions>
      <CardActions>
        <Button className={classes.twoButton} variant="contained" color="primary" size="small">Studen List</Button>
      </CardActions>
    </Card>
  );
}