import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";

class AddLocationPage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
    }
  }
  render() {
    return (
      <>
        <div className="categoryMargin">
          <div className="flex">
            <span>
              <strong>Location :</strong>
            </span>
          </div>

          <div>
            <Table striped bordered hover size="sm" className="tablemargin">
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>Category Name</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td></td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <div>
                    <button type="button" class="btn btn-light"><span class="bi bi-pencil"></span></button>                      <CloseButton />
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>

        <Button variant="light" size="sm">
          + Add new Location
        </Button>
      </>
    );
  }
}

export default AddLocationPage;
