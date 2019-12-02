import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import Home from '../Home/Home';
import Student from '../Student/Student';
import Course from '../Course/Course';
// import ListPage from '../Listpage/ListPage';
// import StudentList from '../Listpage/StudentList';
// import StudentEdit from '../Listpage/StudentEdit';

const Routes = () => {
          return (
                    <Fragment>
                              <Switch>
                                        <Route
                                                  exact
                                                  path="/"
                                                  component={Home}
                                        />
                                        <Route
                                                  path="/login"
                                                  component={Login}
                                        />
                                        <Route
                                                  path="/register"
                                                  component={Register}
                                        />
                                        <Route
                                                  exact
                                                  path="/students"
                                                  component={Student}
                                        />
                                        <Route
                                                  exact
                                                  path="/course"
                                                  component={Course}
                                        />
                              </Switch>
                    </Fragment>
          );
};

export default Routes;
