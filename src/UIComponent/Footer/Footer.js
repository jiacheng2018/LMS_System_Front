import Typography from '@material-ui/core/Typography';
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyl = makeStyles(theme => ({
          icon: {
                    marginRight: theme.spacing(2)
          },
          heroContent: {
                    backgroundColor: theme.palette.background.paper,
                    padding: theme.spacing(8, 0, 6)
          },
          heroButtons: {
                    marginTop: theme.spacing(4)
          },
          cardGrid: {
                    paddingTop: theme.spacing(8),
                    paddingBottom: theme.spacing(8)
          },
          card: {
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
          },
          cardMedia: {
                    paddingTop: '56.25%' // 16:9
          },
          cardContent: {
                    flexGrow: 1
          }
}));
export default function Footer() {
          const classes = useStyl();
          return (
                    <Fragment>
                              <footer className={classes.footer}>
                                        <Typography
                                                  variant="h6"
                                                  align="center"
                                                  gutterBottom
                                        >
                                                  Footer
                                        </Typography>
                                        <Typography
                                                  variant="subtitle1"
                                                  align="center"
                                                  color="textSecondary"
                                                  component="p"
                                        >
                                                  Something here to give the
                                                  footer a purpose!
                                        </Typography>
                              </footer>
                    </Fragment>
          );
}
