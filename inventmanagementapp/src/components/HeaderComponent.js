import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Container>
            <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
              <FontAwesomeIcon icon="fa-regular fa-arrow-right-from-bracket" />
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default HeaderComponent;
