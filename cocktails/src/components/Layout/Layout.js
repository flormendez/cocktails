import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import SideBar from '../SideBar/SideBar'
import Main from '../Main/Main'
import "./Layout.css"

class Layout extends Component {
  render() {
    return (
      
<Container>
  <Row sm={12}>
    <Col sm={3}><SideBar /></Col>
    <Col sm={1}></Col>
    <Col sm={8}><Main /></Col>
  </Row>
</Container>
        
      
    )
  }
}

export default Layout
