import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
export default function CopyRight() {
          return (
                    <Fragment>
                              <Typography align="center">
                                        {'Copyright ©'}
                                        <Link
                                                  color="inherit"
                                                  href="https://material-ui.com"
                                        >
                                                  Hello
                                        </Link>{' '}
                                        {new Date().getFullYear()}
                                        {'.'}
                              </Typography>
                    </Fragment>
          );
}
