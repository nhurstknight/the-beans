import React from 'react'
import { Nav } from 'react-bootstrap'

import { withRouter } from 'react-router-dom'

const Navbar = () => {
  return (
    <Nav variant="tabs" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/beans">Beans</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/roasters">Rosters</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default withRouter(Navbar)