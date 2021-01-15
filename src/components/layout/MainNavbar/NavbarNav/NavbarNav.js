import React from "react";

import { Nav } from "shards-react";

import Notifications from "./Notifications";
import UserActions from "./UserActions";



export default class  NavbarNav extends React.Component {
  render(){
console.log(this.props.activstatenav)
  return(
    <>
    {this.props.activstatenav===false? null: window.innerWidth<768?
    <div>
    <span className="title-brand" style={{fontSize:"1rem",marginTop:"-23px"}}>TOKUTEN</span>
    <span className="inner-txt" style={{fontSize:"10px",marginLeft:"28px",marginTop:"23px"}} >とくてん</span>
    </div>:null
  }
  <Nav style={{marginTop:window.innerWidth<769?"26px":null}}navbar className="border-left flex-row">
 {this.props.activstatenav===false? window.innerWidth<768?<><span class="title-brand">TOKUTEN</span>
              <span class="inner-txt" style={{margin:"3rem"}}>とくてん</span></>:null: window.innerWidth<768?
    <>
 
    <UserActions />
    <Notifications  />
  
  
    </>:
     <>
 
    
     <Notifications  />
     <UserActions />
    
   
     </>

    
 }
  </Nav>
  </>
);
  }
}