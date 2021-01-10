import React from "react";

import { Nav } from "shards-react";

import Notifications from "./Notifications";
import UserActions from "./UserActions";



export default class  NavbarNav extends React.Component {
  render(){
console.log(this.props.activstatenav)
  return(
  <Nav navbar className="border-left flex-row">
 {this.props.activstatenav===false? window.innerWidth<768?<><span class="title-brand">TOKUTEN</span>
              <span class="inner-txt" style={{margin:"4rem"}}>とくてん</span></>:null:
    <>
    <Notifications  />
    <UserActions /></>
 }
  </Nav>
);
  }
}