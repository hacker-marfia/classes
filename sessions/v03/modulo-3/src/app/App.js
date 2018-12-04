import React from 'react';
import './App.css';
import { Col, Row, Button, Input } from 'antd'
import { contact } from 'assets'

export default class App extends React.Component {
  state = {
    
  }
  render() {
    return (
      <div>
        <Row type="flex" className="Row" >
          <Col className="Col" span={12} >
            <img src={contact} alt="contact" className="Image" />
          </Col>
          <Col className="Col" span={12} >
            <h1>Hey!</h1>
            <p>My name is Brian, and this is my website.</p>
            <p>Here, you’ll be able to find my contact information.</p>
            <Button type="primary">Show</Button>
          </Col>
          <Col className="Bottom" span={24} >
            <div className="Card" >
              <h3>Phone number</h3>
              <p>415-200-9866</p>
            </div>
            <div className="Card" >
              <h3>Email</h3>
              <p>brian@earth.com</p>
            </div>
            <div className="Card" >
              <h3>Favorite animal</h3>
              <p>Dragons (they are animals) </p>
            </div>
            <div className="Card" >
              <h3>Random fact</h3>
              <p>I can count in binary</p>
            </div>
          </Col>

          {/* <Col className="Add" span={24} >
            <Input placeholder="Title" />
            <Input placeholder="Body" />
            <Button type="primary">Add</Button>
          </Col> */}

        </Row>
      </div>
    );
  }
}