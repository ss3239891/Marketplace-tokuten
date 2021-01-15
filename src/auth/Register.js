import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,Label,Radio
} from "semantic-ui-react";

import { NavLink} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'


class RegisterForm extends React.Component {
  state = {
    firstname:"",
    email: "",
    password1: "",
    lastname:"",
    Merchant:"",
    Bank:"",
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
  
  
  };
  handleChang = (e, { value }) => {
    this.setState({
        [e.target.id]: e.target.value
    })

    this.setState({ value })
};


  render() {
    const {firstname, email, password1,lastname} = this.state;
   

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
                  value={firstname}
                  name="firstname"
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="firstname"
                 
                />
                   <Form.Input
                  onChange={this.handleChange}
                  value={lastname}
                  name="lastname"
                  icon="user"
                  iconPosition="left"
                  placeholder="re enter password"
                  type="text"
                 
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
               
               <Form.Field>
                                                <Label color="black" for="radioGroup">Merchant</Label>
                                                <br />
                                                <Radio

                                                    name='radioGroup'
                                                    value='Merchant'
                                                    style={{ position: "relative", left: "-72px", top: "-32px", marginTop: "8px" }}

                                                    checked={this.state.value === 'Merchant'}
                                                    onChange={this.handleChang}
                                                />
                                            </Form.Field>
                                            <Form.Field>
                                                <Label color="black" for="radioGroup">Bank</Label>
                                                <br />
                                                <Radio

                                                    name='radioGroup'

                                                    value='Bank'
                                                    style={{ position: "relative", left: "-72px", top: "-32px", marginTop: "8px" }}
                                                    checked={this.state.value === 'Bank'}
                                                    onChange={this.handleChang}
                                                />
                                            </Form.Field>
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
           Register your account
          </Header>
          

          <React.Fragment>
            <Form size="large" onSubmit={this.handleSubmit} >
              <Segment stacked>
              <Form.Input
                  onChange={this.handleChange}
                  value={firstname}
                  name="firstname"
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="firstname"
                 
                />
                   <Form.Input
                  onChange={this.handleChange}
                  value={lastname}
                  name="lastname"
                  icon="user"
                  iconPosition="left"
                  placeholder="re enter password"
                  type="text"
                 
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
               
               <Form.Field>
                                                <Label color="black" for="radioGroup">Merchant</Label>
                                                <br />
                                                <Radio

                                                    name='radioGroup'
                                                    value='Merchant'
                                                    style={{ position: "relative", left: "-72px", top: "-32px", marginTop: "8px" }}

                                                    checked={this.state.value === 'Merchant'}
                                                    onChange={this.handleChang}
                                                />
                                            </Form.Field>
                                            <Form.Field>
                                                <Label color="black" for="radioGroup">Bank</Label>
                                                <br />
                                                <Radio

                                                    name='radioGroup'

                                                    value='Bank'
                                                    style={{ position: "relative", left: "-72px", top: "-32px", marginTop: "8px" }}
                                                    checked={this.state.value === 'Bank'}
                                                    onChange={this.handleChang}
                                                />
                                            </Form.Field>
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

