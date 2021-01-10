import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

import { NavLink} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'


class RegisterForm extends React.Component {
  state = {
    username:"",
    email: "",
    password1: "",
    password2:"",
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
  
  
  };

  render() {
    const {username, email, password1,password2 } = this.state;
   

    return (
        <>
       {window.innerWidth>1390? <Grid
        textAlign="center"
        style={{ height: "100vh",marginLeft:"-235px",marginTop:window.innerWidth>635?"-85px":"null" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" style={{ color: "black" }} textAlign="center">
           Register your account
          </Header>
          

          <React.Fragment>
            <Form size="large" onSubmit={this.handleSubmit} >
              <Segment stacked>
              <Form.Input
                  onChange={this.handleChange}
                  value={username}
                  name="username"
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="username"
                 
                />
                <Form.Input
                  onChange={this.handleChange}
                  value={email}
                  name="email"
                  fluid
                  icon="mail"
                  iconPosition="left"
                  placeholder="email"
                 
                />
                <Form.Input
                  onChange={this.handleChange}
                  fluid
                  value={password1}
                  name="password1"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
               
                />
                  <Form.Input
                  onChange={this.handleChange}
                  value={password2}
                  name="password2"
                  icon="lock"
                  iconPosition="left"
                  placeholder="re enter password"
                  type="password"
                 
                />
 <Button
                  style={{ backgroundColor: "black", color: "white",borderRadius:"1rem" }}
                  fluid
                  size="large"
                
                >
                 Signup
                </Button>
              </Segment>
            </Form>
            
            <Message style={{borderRadius:"1rem"}}>
              Already have acccount ? <NavLink to="/login">Login</NavLink>
            </Message>



          </React.Fragment>
        </Grid.Column>
      </Grid> :
      <Grid
        textAlign="center"
        style={{ height: "100vh",marginLeft:window.innerWidth>635?"-175px":"null",marginTop:window.innerWidth>635?"-85px":"null" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" style={{ color: "black" }} textAlign="center">
           Register  your account
          </Header>
          

          <React.Fragment>
            <Form size="large" onSubmit={this.handleSubmit} >
              <Segment stacked>
              <Form.Input
                  onChange={this.handleChange}
                  value={username}
                  name="username"
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="username"
                 
                />
                <Form.Input
                  onChange={this.handleChange}
                  value={email}
                  name="email"
                  fluid
                  icon="mail"
                  iconPosition="left"
                  placeholder="email"
                 
                />
                <Form.Input
                  onChange={this.handleChange}
                  fluid
                  value={password1}
                  name="password1"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
               
                />
                  <Form.Input
                  onChange={this.handleChange}
                  value={password2}
                  name="password2"
                  icon="lock"
                  iconPosition="left"
                  placeholder="re enter password"
                  type="password"
                 
                />

                <Button
                  style={{ backgroundColor: "black", color: "white",borderRadius:"1rem" }}
                  fluid
                  size="large"
                
                >
                 Signup
                </Button>
              </Segment>
            </Form>
            
            <Message style={{borderRadius:"1rem"}}>
              Already have acccount ? <NavLink to="/login">Login</NavLink>
            </Message>


          </React.Fragment>
        </Grid.Column>
      </Grid>
     
       }
        </>
    );
  }
}


export default RegisterForm;

