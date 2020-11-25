import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import Home from './Home'
import SignUp from './SignUp'
import AboutUs from './AboutUs'
import Blogs from './Blogs'
import LogIn from './LogIn'
import styled from 'styled-components'

function NavBar() {

  return (
    <div>
      <Navbar bg="light" variant="light" align= "auto">
        <Navbar.Brand href="/" component= {Home} inline>TourGhana
          <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/" component= {Home}>Home</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/aboutus" component = {AboutUs}>About Us</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/blogs" component= {Blogs}>Blogs</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/login" component= {LogIn}>Log In</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/signup" component= {SignUp}>Sign Up</Nav.Link></Nav.Item>
          </Nav>
        </Navbar.Brand>
      </Navbar>

      </div>
    )
}

export default NavBar