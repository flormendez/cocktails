import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import SideBar from '../SideBar/SideBar'
import Main from '../Main/Main'

class Layout extends Component {
  render() {
    return (
      <div>
<Container>
  <Row>
    <Col sm={3}><SideBar /></Col>
    <Col sm={9}><Main /></Col>
  </Row>
</Container>
        
      </div>
    )
  }
}

export default Layout
