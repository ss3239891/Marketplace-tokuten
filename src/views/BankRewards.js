import React, { Component } from 'react'
import {
    Container,
    Row,
    
   
  } from "shards-react";
  import PageTitle from "../components/common/PageTitle";

export default class BankRewards extends Component {
    render() {
        return (
            <Container fluid className="main-content-container px-4">
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
              <PageTitle sm="4" title="Marketplace" className="text-sm-left title-maine" />
            </Row>
    
          
    
            
     
           </Container>
       
        )
    }
}

