import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react';
import "./create-rewards.css"
export class Page1 extends Component {
    render() {
        return (

            <div className="main-div" >
                
                <div class="ui breadcrumb"  style={{marginTop:'20px',marginLeft:'30px',background:'none',fontFamily:'Nunito',fontSize:'25px'}}><div style={{fontWeight:'bold'}} class="section">Rewards</div> <Icon style={{color:' rgba(0, 0, 0, 0.7)',width:'50px'}} aria-hidden="true" name="chevron right"/><div style={{fontWeight:'normal'}} class=" section">Create Reward</div></div>
                <hr style={{width:'330px',border: '1px solid rgba(0, 0, 0, 0.4)',marginLeft:'45px',marginTop:'0px'}}></hr>


                <div className="subdiv1 " style={{ borderRadius: "20px", border: "1px solid #c4C4c4", height: "370px", width: '88%',marginLeft:'5%',marginBottom:'10%',marginTop:'50px' }}>

                    <u><h6 className="template"  style={{ cursor: "pointer", width: "10rem", fontWeight: "bold", color: "black", marginLeft: '40%', marginTop: '10%' }}> Use Template </h6></u>
                    <br />
                    <span style={{fontFamily:'Nunito',fontStyle:'normal' ,  fontWeight: "normal", marginLeft: '46%',fontSize:'25px' }}>Or</span>
                    <br />
                    <a className="template" style={{color:'black'}} href="/create-rewards-2/"><u><h6 style={{ cursor: "pointer", width: "15rem", marginTop: "20px", marginLeft: "-13px", fontWeight: "bold", color: "black", marginLeft: '37%',fontSize:'25px' }}>Create New Reward</h6></u></a>
                </div>

            </div>
        )
    }
}

export default Page1
