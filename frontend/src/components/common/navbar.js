import React from 'react'
import { Nav } from 'react-bootstrap'

import { withRouter } from 'react-router-dom'
import { logout, isAuthenticated } from '../../lib/auth'

const Navbar = () => {
  const handleLogout = () => {
    logout()
  }

  return (
    <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/beans">Beans</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/roasters">Rosters</Nav.Link>
      </Nav.Item>
      {!isAuthenticated() && <Nav.Link href="/login">Login</Nav.Link> }
      {!isAuthenticated() && <Nav.Link href="/register">Register</Nav.Link> }
      { isAuthenticated() && <Nav.Link href="/" onClick={handleLogout}>Logout</Nav.Link> }
    </Nav>
  )
}

export default withRouter(Navbar)