import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Col } from "shards-react";


import SidebarSearch from "./SidebarSearch";
import SidebarNavItems from "./SidebarNavItems";

import { Store } from "../../../flux";

class MainSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuVisible: false,
      sidebarNavItems: Store.getSidebarItems(),
      open: false,
      bank: false,
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    Store.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      ...this.state,
      menuVisible: Store.getMenuState(),
      sidebarNavItems: Store.getSidebarItems(),
      
    });
  }

  render() {
    const classes = classNames(
      "main-sidebar",
      "px-0",
      "col-12",
      this.state.menuVisible && "open"
    );

    return (
      <Col
        tag="aside"
        className={classes}
        lg={{ size: 2 }}
        md={{ size: 3 }}
      >
        
        <SidebarSearch />
        <div style={{height:this.state.open?"189px":"152px",width:"100%",backgroundColor:this.state.bank?"#076AC3":"black",borderBottom:"1px solid #E6E5E5"}}>
          
          <span className ="category">Armor Fitness</span>
          <span className ="category-branch">All Branches</span>
          <svg onClick={()=>{this.setState({open:!this.state.open})}} className="down-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 1.5L6 6.5L1 1.5" stroke="white" stroke-width="2"/>
</svg>

{this.state.open?
<>
<span onClick={()=>{this.setState({bank:true})}} style={{cursor:"pointer",color:"white",position:"relative",left:"32%",top:"55%"}}>Bank</span>

<span  onClick={()=>{this.setState({bank:false})}} style={{color:"white",position:"relative",left:"15%",top:"70%",cursor:"pointer"}}>Merchant</span>
</>:null
}

          </div>
        <SidebarNavItems bank={this.state.bank} activestat={this.props.activestate} />
      </Col>
    );
  }
}

MainSidebar.propTypes = {
  /**
   * Whether to hide the logo text, or not.
   */
  hideLogoText: PropTypes.bool
};

MainSidebar.defaultProps = {
  hideLogoText: false
};

export default MainSidebar;
