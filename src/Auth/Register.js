import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Style/Auth.scss';
import firebase from '../firebase';
import {
          Grid,
          Form,
          Segment,
          Button,
          Header,
          Message,
          Icon
} from 'semantic-ui-react';
export default class Register extends Component {
          state = {
                    username: '',
                    email: '',
                    password: ''
          };
          handleChange = event => {
                    this.setState({
                              [event.target.name]: event.target.value
                    });
          };
          handleSubmit = event => {
                    event.preventDefault();
                    firebase.auth()
                              .createUserWithEmailAndPassword(
                                        this.state.email,
                                        this.state.password
                              )
                              .then(createUser => {
                                        console.log(createUser);
                              })
                              .catch(err => {
                                        console.error(err);
                              });
          };
          render() {
                    const { username, email, password } = this.state;
                    return (
                              <Grid textAlign="center" verticalAlign="middle">
                                        <Grid.Column style={{ maxWidth: 450 }}>
                                                  <Header
                                                            as="h2"
                                                            icon
                                                            color="orange"
                                                            textAlign="center"
                                                  >
                                                            <Icon
                                                                      className="Register_icon"
                                                                      name="hand spock"
                                                                      color="orange"
                                                            />
                                                  </Header>
                                                  <Form
                                                            onSubmit={
                                                                      this
                                                                                .handleSubmit
                                                            }
                                                            size="large"
                                                  >
                                                            <Segment stacked>
                                                                      <Form.Input
                                                                                fluid
                                                                                name="username"
                                                                                icon="user"
                                                                                iconPosition="left"
                                                                                placeholder="UserName"
                                                                                onChange={
                                                                                          this
                                                                                                    .handleChange
                                                                                }
                                                                                type="text"
                                                                                value={
                                                                                          username
                                                                                }
                                                                      />
                                                                      <Form.Input
                                                                                fluid
                                                                                name="email"
                                                                                icon="mail"
                                                                                iconPosition="left"
                                                                                placeholder="Email Address"
                                                                                onChange={
                                                                                          this
                                                                                                    .handleChange
                                                                                }
                                                                                type="email"
                                                                                value={
                                                                                          email
                                                                                }
                                                                      />
                                                                      <Form.Input
                                                                                fluid
                                                                                name="password"
                                                                                icon="lock"
                                                                                iconPosition="left"
                                                                                placeholder="Password"
                                                                                onChange={
                                                                                          this
                                                                                                    .handleChange
                                                                                }
                                                                                type="password"
                                                                                value={
                                                                                          password
                                                                                }
                                                                      />
                                                                      <Button
                                                                                color="orange"
                                                                                fluid
                                                                                size="large"
                                                                      >
                                                                                Submit
                                                                      </Button>
                                                            </Segment>
                                                            <Message>
                                                                      Already A
                                                                      User?
                                                                      <Link to="/login">
                                                                                Login
                                                                      </Link>
                                                            </Message>
                                                  </Form>
                                        </Grid.Column>
                              </Grid>
                    );
          }
}
