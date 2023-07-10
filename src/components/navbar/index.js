import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.js';

import { Navbarsection,Logo, Logotext ,Ullist,Anchor, Listitem,NavItem } from './style.js';


class Navbar extends Component {
  render() {
    return (
      <Navbarsection>
        <div className="container">
          <Logo>
            <Logotext className="logo-text">Ultra Profile</Logotext>
          </Logo>
          <Ullist>
            <Listitem><NavItem to="/">Home</NavItem></Listitem>
            <Listitem><Anchor href="#">Work</Anchor></Listitem>
            <Listitem><Anchor href="#">Portfolio</Anchor></Listitem>
            <Listitem><Anchor href="#">Resume</Anchor></Listitem>
            <Listitem><Anchor href="#">About</Anchor></Listitem>
            <Listitem><NavItem to="/contact">Contact</NavItem></Listitem>
          </Ullist>
        </div>
      </Navbarsection>
    );
  }
}

export default Navbar;
