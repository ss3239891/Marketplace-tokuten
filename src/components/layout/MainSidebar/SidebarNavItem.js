import React from "react";
import PropTypes from "prop-types";
import { NavLink as RouteNavLink } from "react-router-dom";
import { NavItem, NavLink } from "shards-react";
import { Link } from "react-router-dom"


const SidebarNavItem = ({ item,bank }) => (
  <NavItem style ={{display:"flex"}}>
    {/* <NavLink style ={{color:"#d3d3d3"}} tag={RouteNavLink} to={item.to}>
      {item.htmlBefore && (
        <div
          className="d-inline-block item-icon-wrapper"
          dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
        />
      )}
 {
       bank==="false"?<span style ={{fontFamily:"Nunito, sans-serif",fontStyle:"normal",lineHeight:"23px",fontWeight:"normal",letterSpacing:"0.05em",color:"#FFFFFF",marginLeft:'20px',fontWeight:'17px'}} >Home</span>
    :
     
      item.title && <span style ={{fontFamily:"Nunito, sans-serif",fontStyle:"normal",lineHeight:"23px",fontWeight:"normal",letterSpacing:"0.05em",color:"#FFFFFF",marginLeft:'20px',fontWeight:'17px'}} >{item.title}</span>
    }    
      {item.htmlAfter && (
        <div style={{marginLeft:'10px'}}
          className="d-inline-block item-icon-wrapper"
          dangerouslySetInnerHTML={{ __html: item.htmlAfter }}
        />
      )}
       {item.title==="Rewards"? <>
               <div style={{marginTop:'8%',pointerEvents:'click'}}> <Link to="/create-rewards-1/" style={{textDecoration:'none'}}><span style={{ fontFamily:'Nunito',fontSize:'17px',fontWeight:'bold',color:'#FFFFFF' , cursor: "pointer", color: "white", position: "relative", left: "17%", top: "10%"}}>Create Reward</span>
                </Link></div>
              </> : null}
              
             
              
    </NavLink> */}
    {item.title!=="Rewards"? <NavLink style ={{color:"#d3d3d3",pointerEvents:'none'}} tag={RouteNavLink} to={item.to}>
      {item.htmlBefore && (
        <div
          className="d-inline-block item-icon-wrapper"
          dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
        />
      )}
      {/* {
       bank==="false"?<span style ={{fontFamily:"Nunito, sans-serif",fontStyle:"normal",lineHeight:"23px",fontWeight:"normal",letterSpacing:"0.05em",color:"#FFFFFF",marginLeft:'20px',fontWeight:'17px'}} >Home</span>
      
    :
     
      item.title && <span style ={{fontFamily:"Nunito, sans-serif",fontStyle:"normal",lineHeight:"23px",fontWeight:"normal",letterSpacing:"0.05em",color:"#FFFFFF",marginLeft:'20px',fontWeight:'17px'}} >{item.title}</span>
    } */}
    {      item.title && <span style ={{fontFamily:"Nunito, sans-serif",fontStyle:"normal",lineHeight:"23px",fontWeight:"normal",letterSpacing:"0.05em",color:"#FFFFFF",marginLeft:'20px',fontWeight:'17px'}} >{item.title}</span>
}
      {item.htmlAfter && (
        <div style={{marginLeft:'10px'}}
          classNamoe="d-inline-block item-icon-wrapper"
          dangerouslySetInnerHTML={{ __html: item.htmlAfter }}
        />
      )}
       {item.title==="Rewards"? <>
               <Link to="/create-rewards-1/" style={{textDecoration:'none',marginTop:'8%',pointerEvents:'click'}}><span style={{ fontFamily:'Nunito',fontSize:'17px',fontWeight:'bold',color:'#FFFFFF' , cursor: "pointer", color: "white", position: "relative", left: "17%", top: "10%"}}>Create Reward</span>
                </Link>
              </> : null}
              
             
              
    </NavLink>:
    <NavLink style ={{color:"#d3d3d3",marginTop:'10px'}} tag={RouteNavLink} to={item.to}>
    {item.htmlBefore && (
      <div
        className="d-inline-block item-icon-wrapper"
        dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
      />
    )}
    
    {/* {
       bank==="false"?<div><span style ={{fontFamily:"Nunito, sans-serif",fontStyle:"normal",lineHeight:"23px",fontWeight:"normal",letterSpacing:"0.05em",color:"#FFFFFF",marginLeft:'20px',fontWeight:'17px'}} >Home</span></div>
    :
     
      item.title && <span style ={{fontFamily:"Nunito, sans-serif",fontStyle:"normal",lineHeight:"23px",fontWeight:"normal",letterSpacing:"0.05em",color:"#FFFFFF",marginLeft:'20px',fontWeight:'17px'}} >{item.title}</span>
    }   */}
        {      item.title && <span style ={{fontFamily:"Nunito, sans-serif",fontStyle:"normal",lineHeight:"23px",fontWeight:"normal",letterSpacing:"0.05em",color:"#FFFFFF",marginLeft:'20px',fontWeight:'17px'}} >{item.title}</span>}

    {item.htmlAfter && (
      <div style={{marginLeft:'10px'}}
        className="d-inline-block item-icon-wrapper"
        dangerouslySetInnerHTML={{ __html: item.htmlAfter }}
      />
    )}
     {item.title==="Rewards"? <>
             <div style={{marginTop:'8%',pointerEvents:'click'}}> <Link to="/create-rewards-1/" style={{textDecoration:'none'}}><span style={{ fontFamily:'Nunito',fontSize:'17px',fontWeight:'bold',color:'#FFFFFF' , cursor: "pointer", color: "white", position: "relative", left: "17%", top: "10%"}}>Create Reward</span>
              </Link></div>
            </> : null}
            
           
            
  </NavLink>

      }

  </NavItem>

);

SidebarNavItem.propTypes = {
  /**
   * The item object.
   */
  item: PropTypes.object
};

export default SidebarNavItem;
