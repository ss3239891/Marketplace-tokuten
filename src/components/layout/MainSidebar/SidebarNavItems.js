import React from "react";
import { Nav } from "shards-react";

import SidebarNavItem from "./SidebarNavItem";
import { Store } from "../../../flux";

class SidebarNavItems extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      navItems: Store.getSidebarItems()
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
      navItems: Store.getSidebarItems()
    });
  }
  
  render() {
    console.log(this.props)
    const { navItems: items } = this.state;
    return (
      this.props.activestat===false? null:
      <div className="nav-wrapper" style ={{backgroundColor:this.props.bank?"#076AC3":"black"}}>
        <Nav className="nav--no-borders flex-column">
          {items.map((item, idx) => (
            <SidebarNavItem key={idx} item={item} bank={this.props.bank} />
          ))}
        </Nav>
      </div>
  
    )
  }
}

export default SidebarNavItems;
