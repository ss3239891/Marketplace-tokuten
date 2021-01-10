import React from "react";
import {
  Form,
  InputGroup,
  FormInput
} from "shards-react";

export default class NavBarSearch extends React.Component {
  render(){
    return(
      <>
      {this.props.activstatenav===false?null:
  <Form className="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
    <InputGroup seamless className="ml-3">
     
      <FormInput
      style={{height:"45%",border:"3px solid",margin:"18px", fontWeight:"400"}}
        className="navbar-search"
        placeholder=" 🔍   Search dashbord"
      />
    </InputGroup>
  </Form>
  }
  </>
);

    }}