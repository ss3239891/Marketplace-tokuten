import React, { Component } from 'react'
import "./create-rewards.css"
import {Button} from "semantic-ui-react" 
import {Link} from "react-router-dom"
export class Page2 extends Component {
    render() {
        return (
            <div className="main-div-2" style={{display:"flex"}}>
                <Link to ="/create-rewards-3/">
                <Button className="button"style={{marginBottom:"21rem",backgroundColor:"black",color:"white",borderRadius:"25px"}}>Scroll Offer</Button></Link>
                <br/> 
                <Link to ="/create-rewards-3/">
                <Button className="button" style={{marginBottom:"21rem",backgroundColor:"black",color:"white",borderRadius:"25px"}}>Live stream</Button></Link>
                <br/>
                <Link to ="/create-rewards-3/">
                <Button className="button" style={{marginBottom:"21rem",backgroundColor:"black",color:"white" ,borderRadius:"25px"}}>Exclusive Sale invite</Button>
         </Link>
            </div>
        )
    }
}

export default Page2

