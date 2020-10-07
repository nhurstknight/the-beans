import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { logout, isAuthenticated } from '../../lib/auth'

const NavBar = () => {
  const basket = <FontAwesomeIcon icon={faShoppingBasket} />

  const handleLogout = () => {
    logout()
  }

  return (
    <Navbar className="color-nav" expand="lg">
      <Navbar.Brand href="/">
        {/* <img src="/public/beans-icon.png" />
        {' '} */}
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
          { isAuthenticated() && <Nav.Link href="/basket">{ basket }</Nav.Link> }
          { isAuthenticated() && <Nav.Link href="/profile">Profile Page</Nav.Link> }
          { isAuthenticated() && <Nav.Link href="/" onClick={handleLogout}>Logout</Nav.Link> }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default withRouter(NavBar)