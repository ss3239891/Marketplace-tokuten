import React from "react";
import firebase from "firebase";
import rootRef from "../firebase/firebase";
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


class LoginForm extends React.Component {
  state = {
    email: "",
    password: "",
    loading:false,
    error:""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount(){
    //Add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser){
        this.setState({loading:true})
          console.log("Welcome!");
          localStorage.setItem("token",true)
          rootRef.child(firebaseUser.uid).on('value', snapshot => {
              var role = snapshot.child('role').val();
              if (role === 'Merchant'){
                window.location.href ="/marketplace/rewards/"
              }else if (role === 'Bank'){
                window.location.href ="/marketplace/bank/"
              }
          });
      }else {
          console.log("not logged in!");
      }
  });
  }

  networkCalling = () =>{
    this.setState({loading:true})
    const email = this.state.email;
    const pass = this.state.password;
    const auth = firebase.auth();
  
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e =>this.setState({error:e.message,loading:false}));
  }
  

  render() {
    
    const { email, password } = this.state;
   

    return (
        <>
       {window.innerWidth>1390? <Grid
        textAlign="center"
        style={{ height: "100vh",marginLeft:"-235px",marginTop:window.innerWidth>635?"-85px":"null" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" style={{ color: "black" }} textAlign="center">
            Log-in to your account

            <h6 style ={{textAlign:"center",color:"red"}}>{this.state.error}</h6>
          </Header>
          

          <React.Fragment>
            <Form size="large" onSubmit={this.handleSubmit} >
              <Segment stacked>
                <Form.Input
                  onChange={this.handleChange}
                  value={email}
                  name="email"
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="email"
                 
                />
                <Form.Input
                  onChange={this.handleChange}
                  fluid
                  value={password}
                  name="password"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
               
                />

                <Button
                  style={{ backgroundColor: "black", color: "white",borderRadius:"1rem" }}
                  fluid
                  size="large"
                  onClick = {this.networkCalling}
                  loading= {this.state.loading}
                
                >
                  Login
                </Button>
              </Segment>
            </Form>
            <Message style={{borderRadius:"1rem"}}>
            <NavLink to="/log"> Forget your password? </NavLink>
            </Message>
            <Message style={{borderRadius:"1rem"}}>
              New to us? <NavLink to="/register">Sign Up</NavLink>
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
            Log-in to your account
            <h6 style ={{textAlign:"center",color:"red"}}>{this.state.error}</h6>
          </Header>
          

          <React.Fragment>
            <Form size="large" onSubmit={this.handleSubmit} >
              <Segment stacked>
                <Form.Input
                  onChange={this.handleChange}
                  value={email}
                  name="email"
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="email"
               
                />
                <Form.Input
                  onChange={this.handleChange}
                  fluid
                  value={password}
                  name="password"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
               
                />

                <Button
                  style={{ backgroundColor: "black", color: "white",borderRadius:"1rem" }}
                  fluid
                  size="large"
                  onClick = {this.networkCalling}
                  loading= {this.state.loading}
                
                >
                  Login
                </Button>
              </Segment>
            </Form>
            <Message style={{borderRadius:"1rem"}}>
            <NavLink to="/log"> Forget your password? </NavLink>
            </Message>
            <Message style={{borderRadius:"1rem"}}>
              New to us? <NavLink to="/register">Sign Up</NavLink>
            </Message>


          </React.Fragment>
        </Grid.Column>
      </Grid>
     
       }
        </>
    );
  }
}


export default LoginForm;

