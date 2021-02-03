import React, { Component } from 'react'
import "./create-rewards.css"
import {Button} from "semantic-ui-react" 
import {Link} from "react-router-dom"
import {Icon} from "semantic-ui-react";
export class Page2 extends Component {
    render() {
        return (
            <div className="main-div-2" style={{display:"block"}}>
  <div class="ui breadcrumb"  style={{marginTop:'20px',marginLeft:'30px',background:'none',fontFamily:'Nunito',fontSize:'25px'}}><div style={{fontWeight:'bold'}} class="section">Rewards</div> <Icon style={{color:' rgba(0, 0, 0, 0.7)',width:'50px'}} aria-hidden="true" name="chevron right"/><div style={{fontWeight:'normal'}} class=" section">Create Reward</div></div>
                <hr style={{width:'330px',border: '1.1px solid rgba(0, 0, 0, 0.4)',marginLeft:'45px',marginTop:'0px'}}></hr>
                           {/* <div className="subdivchild1" style={{width:"100%",height:"251px" ,border:"1px solid #c4C4c4",borderRadius:"20px"}}></div> */}
                           <div  style={{ borderRadius: "20px", border: "1px solid #c4C4c4", height: "454px", width: '85%',marginLeft:'6%',marginTop:'50px' }}>
                           <div className='title'>
                       <p>Pick Reward Type:</p>
                   </div>
               <div style={{marginLeft:'125px',marginTop:'90px'}}>
                  
               <Link to ="/create-rewards-3/" style={{textDecoration:'none'}}>
                    <Icon style={{backgroundColor:"#000000" ,color:"white",borderRadius:"50%",height:'120px',width:'120px',paddingTop: '3%' ,marginLeft:'5%'}} name="gift" size="huge" />
                <Button className="scroll "style={{paddingLeft:"0.1rem",marginLeft:"1rem", marginTop:'1rem', background:'none'}}>Scroll Offer</Button></Link>
               
                <Link to ="/create-rewards-3/" style={{textDecoration:'none'}}>
                <Icon style={{backgroundColor:"#EFEFF0",color:"black",borderRadius:"50%",height:'120px',width:'120px',paddingTop: '3%',marginLeft:'15%'}} name="video" size="huge" />
                <Button className="live-stream" style={{paddingLeft:"0.1rem", marginTop:'1rem', background:'none'}}>Live stream</Button></Link>
               
                <Link to ="/create-rewards-3/" style={{textDecoration:'none'}}>
                <Icon style={{backgroundColor:"#EFEFF0",color:"black",borderRadius:"50%",height:'120px',width:'120px',paddingTop: '3%',marginLeft:'15%'}} name="mail outline" size="huge" /> 
                <Button className="exclusive-sale" style={{marginLeft:"0.1rem", marginTop:'1rem', background:'none'}}>Exclusive Sale<br/> invite</Button>
         </Link>
               </div>
         </div>
           {/* <Link to ="/create-rewards-3/">
                    <Icon className="icon-gift"  name="gift" size="big" /> <br/>
                <Button className='scroll' >Scroll Offer</Button></Link>
                <br/> 
                <Link to ="/create-rewards-3/">
                <Icon className="icon-video"  name="video" size="big" /> <br/>
                <Button className="live-stream" >Live stream</Button></Link>
                <br/>
                <Link to ="/create-rewards-3/">
                <Icon className='icon-mail'  name="mail outline" size="big" /> <br/>
                <Button className='exclusive-sale'>Exclusive Sale<br/> invite</Button>
         </Link> */}
            </div>
        )
    }
}

export default Page2
