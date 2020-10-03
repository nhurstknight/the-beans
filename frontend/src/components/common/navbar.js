import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

import { withRouter } from 'react-router-dom'
import { logout, isAuthenticated } from '../../lib/auth'

const NavBar = () => {
  const handleLogout = () => {
    logout()
  }

  return (
    <Navbar expand="lg">
      <Navbar.Brand href="#home">
        <img src="/public/beans-icon.png" />
        {' '}
        The Beans
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/beans">Beans</Nav.Link>
          <Nav.Link href="/roasters">Roasters</Nav.Link>
          {!isAuthenticated() && <Nav.Link href="/login">Login</Nav.Link> }
          {!isAuthenticated() && <Nav.Link href="/register">Register</Nav.Link> }
          { isAuthenticated() && <Nav.Link href="/" onClick={handleLogout}>Logout</Nav.Link> }
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    // <Nav justify variant="tabs" defaultActiveKey="/home">
    //   <Nav.Item>
    //     <Nav.Link href="/">Home</Nav.Link>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <Nav.Link href="/beans">Beans</Nav.Link>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <Nav.Link href="/roasters">Roasters</Nav.Link>
    //   </Nav.Item>
    //   {!isAuthenticated() && <Nav.Link href="/login">Login</Nav.Link> }
    //   {!isAuthenticated() && <Nav.Link href="/register">Register</Nav.Link> }
    //   { isAuthenticated() && <Nav.Link href="/" onClick={handleLogout}>Logout</Nav.Link> }
    // </Nav>
  )
}

export default withRouter(NavBar)