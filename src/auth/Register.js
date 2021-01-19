import React from "react";
import firebase from "firebase";
import rootRef from "../firebase/firebase";
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
    role:"Merchant",
    user:"",
    loading:false,
    value: "Merchant"
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChang = (e, { value }) => {
    this.setState({
        role: e.target.value
    })

    this.setState({ value })
};

componentDidMount(){

  firebase.auth().onAuthStateChanged(firebaseUser => {
    console.log(firebaseUser)
    if(firebaseUser){
    this.setState({user:firebaseUser.uid});
    this.postData(firebaseUser.uid);}
  })
}
  postData = (data) =>{
    this.setState({loading:true})
    localStorage.setItem("token",true)
    rootRef.child(data).set({
      first_name: this.state.firstname,
      last_name:this.state.lastname,
      email: this.state.email,
      role: this.state.role
  });
  if(this.state.role ==="Bank"){
  
window.location.href ="/marketplace/Bank/"
    
  }
  else{
    window.location.href ="/marketplace/rewards/"
  }
  this.setState({loading:false})
}
 networkCalling = () =>{

  this.setState({loading:true})
  const email = this.state.email;
  const pass = this.state.password1;
  const auth = firebase.auth();

  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise.catch(e =>this.setState({error:e.message,loading:false}));

}


  render() {
    const {firstname, email, password1,lastname} = this.state;
    console.log(this.state.role)


   
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
           
           <h6 style ={{textAlign:"center",color:"red"}}>{this.state.error}</h6>
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
                  id ="firstName"
                 
                />
                   <Form.Input
                  onChange={this.handleChange}
                  value={lastname}
                  name="lastname"
                  icon="user"
                  iconPosition="left"
                  placeholder="lastname"
                  type="text"
                  id ="lastName"
                 
                />
                <Form.Input
                  onChange={this.handleChange}
                  value={email}
                  name="email"
                  fluid
                  icon="mail"
                  iconPosition="left"
                  placeholder="email"
                  id = "signupEmail"
                 
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
                  id = "signupPassword"
               
                />
               
               <Form.Field>
                                                <Label color="black" for="radioGroup">Merchant</Label>
                                                <br />
                                                <Radio

                                                    name='radioGroup'
                                                    value='Merchant'
                                                    style={{ position: "relative", left: "-72px", top: "-32px", marginTop: "8px" }}

                                                    checked={this.state.value === 'Merchant'}
                                                    id = "Merchant"
                                                    onChange={this.handleChang}
                                                    required= "true"
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
                                                    id = "Bank"
                                                    onChange={this.handleChang}
                                                    required= "true"
                                                />
                                            </Form.Field>
 <Button
                  style={{ backgroundColor: "black", color: "white",borderRadius:"1rem" }}
                  fluid
                  size="large"
                  onClick = {this.networkCalling}
                loading ={this.state.loading}
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
           
           <h6 style ={{textAlign:"center",color:"red"}}>{this.state.error}</h6>
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
                  placeholder="lastname"
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
                                                    id = "Merchant"
                                                    onChange={this.handleChang}
                                                    required= "true"
                                                />
                                            </Form.Field>
                                            <Form.Field>
                                                <Label color="black" for="radioGroup">Bank</Label>
                                                <br />
                                                <Radio
                                                 required= "true"

                                                    name='radioGroup'

                                                    value='Bank'
                                                    style={{ position: "relative", left: "-72px", top: "-32px", marginTop: "8px" }}
                                                    checked={this.state.value === 'Bank'}
                                                    id = "Bank"
                                                    onChange={this.handleChang}
                                                />
                                            </Form.Field>
 <Button
                  style={{ backgroundColor: "black", color: "white",borderRadius:"1rem" }}
                  fluid
                  size="large"
                  onClick = {this.networkCalling}
                
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

