import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavbarComponent from "../components/NavbarComponent";
import AddCategoryPage from "./AddCategoryPage";
import AddLocationPage from "./AddLocationPage";
import SetAssetsPage from "./AddAssetsPage";


class MainPage extends Component {
  render() {
    return (
      <>
        <NavbarComponent />

        <div className="pagecontainer">
          <Row>
            <Col xs={6}>
              <AddCategoryPage />
            </Col>
            <Col xs={6}>
              <AddLocationPage />
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <SetAssetsPage />
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default MainPage;
