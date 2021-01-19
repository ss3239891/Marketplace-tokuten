import React, { Component } from 'react'
import {
    Button,
    Form,
    Grid,
    Header,
   TextArea,
    Segment,
    Label
  } from "semantic-ui-react";
  import firebase from "firebase";
import rootRef from "../firebase/firebase";
import {rewardRef} from "../firebase/firebase";
  


export class Page3 extends Component {
    state = {
        title: "",
       description: "",
       quantity:0,
       price:0,
        loading:false,
        ownerEmail:"",
        ownerUid :"",
        ownerName:"",
        StudentObjects: [],
        message:""
      };
    
      handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

      addQuantity=()=>{
          this.setState({quantity:this.state.quantity+1})
      }
      subtractQuantity=()=>{
          if(this.state.quantity>0){
        this.setState({quantity:this.state.quantity-1})}
    }
    subtractPrice=()=>{
        if(this.state.price>0){
      this.setState({price:this.state.price-1})}
  }
      addPrice=()=>{
        this.setState({price:this.state.price+1})
    }
  
    sendingData=()=>{
        this.setState({loading:true})
        const autoRewardId = rewardRef.push().key;
        rewardRef.child(autoRewardId).set({
            owner_uid: this.state.ownerUid,
            owner_name: this.state.ownerName,
            owner_email: this.state.ownerEmail,
            title: this.state.title,
            quantity: this.state.quantity,
            price: "$" + this.state.price,
            totalPrice: "$" + (this.state.price* this.state.quantity)
        }).then(()=>{
            this.setState({message:"Reward created successfully!"})
        });
        this.setState({loading:false})
      }
    


    componentDidMount(){
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser){
               console.log(firebaseUser)
             
               rootRef.child(firebaseUser.uid).on('value', snapshot => {
                   this.setState({ ownerName : snapshot.child('first_name').val() + " " + snapshot.child('last_name').val()})
                   this.setState({ ownerEmail : snapshot.child('email').val()})
                   this.setState({ ownerUid : firebaseUser.uid});


                   rewardRef.on('value', snapshot => {
                    if (snapshot.val() != null) {  
                       this.setState({  StudentObjects: snapshot.val()  
                        }); 
                      
                    } 
                   
                  
                });
                
                });
               
            }
          
    })
}


    //Adding 'create' event

  

    
    render() {
        return (
            <div style={{width:"100%",height:"100vh",backgroundColor:"#d3d3d3"}}>
               
                
                <Grid style={{marginLeft:"24rem",position:"relative",top:"91px"}}>
                
                <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" style={{ color: "black" }} textAlign="center">
           Create Rewards
          </Header>
          <h6 style={{color: "green", textAlign: "center"}}>{this.state.message}</h6>
          

          <React.Fragment>
            <Form size="large" onSubmit={this.handleSubmit} >
              <Segment stacked>
                  <Label style={{marginLeft:"10rem",marginBottom:"1rem"}} color="black">Title</Label>
                 
                <Form.Input
                  onChange={this.handleChange}
           
                  name="title"
                  fluid
              
                
                 
                />
                <Label style={{marginLeft:"9rem",marginBottom:"1rem"}} color="black">Description</Label>
                <TextArea style={{marginBottom:"1rem"}}  name="description"
                   fluid
               
                  
                     onChange={this.handleChange} placeholder='Description' />

                 
                 
<Label style={{marginLeft:"9.5rem",marginBottom:"1rem"}} color="black">Quantity</Label>
<div style={{display:"flex",marginBottom:"17px",marginLeft:"120px"}}>
<Button color="black" onClick={this.addQuantity} style={{marginLeft:"-5px",borderRadius:"2rem"}}>+</Button><h3 style={{margin:"10px"}}>{this.state.quantity}</h3><Button onClick={this.subtractQuantity} style={{borderRadius:"2rem"}} color="black">-</Button>
</div>
<Label style={{marginLeft:"10.5rem",marginBottom:"1rem"}} color="black">Price</Label>
<div style={{display:"flex",marginBottom:"17px",marginLeft:"113px"}}>
<Button onClick={this.addPrice}color="black" style={{marginLeft:"-5px",borderRadius:"2rem"}}>+</Button><h3 style={{margin:"10px"}}>{this.state.price}$</h3><Button onClick={this.subtractPrice} style={{borderRadius:"2rem"}} color="black">-</Button>
</div>
<Label style={{marginLeft:"9rem",marginBottom:"1rem"}} color="black"> Total Price</Label>
<div style={{display:"flex",marginBottom:"17px",marginLeft:"179px"}}>
<h3 style={{margin:"4px",marginLeft:"-3px"}}>{this.state.quantity*this.state.price}$</h3>
</div>
                <Button
                  style={{ backgroundColor: "black", color: "white",borderRadius:"1rem" }}
                  fluid
                  size="large"
                  onClick = {this.sendingData}
                  loading= {this.state.loading}
                
                >
                 Create Reward
                </Button>
              </Segment>
            </Form>
            


          </React.Fragment>
        </Grid.Column>
      </Grid> 
              
                </div>
                
        )
    }
}

export default Page3
