import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";

export class AddAssetsPage extends Component {
  render() {
    return (
      <div className="setAssetMargin">
        <div className="flex">
          <span>
            <strong>Assets:</strong>
          </span>
        </div>

        <div className="tablescroll">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Sr.No</th>
                <th>Assset Name</th>
                <th>Quantity</th>
                <th>Amount per unit</th>
                <th>Category</th>
                <th>Location</th>
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
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <div>
                  <button type="button" class="btn btn-light"><span class="bi bi-pencil"></span></button>                    <CloseButton />
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>

        <Button variant="light" size="sm">
          + Add new Assets
        </Button>
      </div>
    );
  }
}

export default AddAssetsPage;
