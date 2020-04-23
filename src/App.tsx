import React from 'react';
import logo from './logo.svg';
import './App.css';
import AndroidDevice from './components/AndroidDevice';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

function App() {
  return (
    <Container fluid style={{paddingTop: '3%'}}>
      <Row>
        <Col md="9">
          <AndroidDevice containerStyle={{display: 'flex', justifyContent: 'center'}}></AndroidDevice>
        </Col>
        <Col md="3">
          <ListGroup>
            <ListGroup.Item>Button</ListGroup.Item>
            <ListGroup.Item>Text</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    
    </Container>
  );
}

export default App;
