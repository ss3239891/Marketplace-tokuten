import React, { Component } from 'react'
import "./create-rewards.css"
export class Page1 extends Component {
    render() {
        return (
            <div className="main-div" style={{borderRadius:"1rem"}}>
           <u><h6 style={ {cursor:"pointer",width:"10rem" ,fontWeight:"bold"}}> Use Template </h6></u>
           <br/>
           <span style={{marginLeft:"36px",fontWeight:"bold"}}>Or</span> 
           <br/>
           <a href ="/create-rewards-2/"><u><h6 style={ {cursor:"pointer",width:"15rem",marginTop:"20px",marginLeft:"-13px",fontWeight:"bold"}}>Create New Reward</h6></u></a> 

            </div>
        )
    }
}

export default Page1

