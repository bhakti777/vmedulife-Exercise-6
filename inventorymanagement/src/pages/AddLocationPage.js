import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";

class AddLocationPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stateLocation: {},
      addNewLocation: false,
      newLocation: {
        locationId: 0,
        locationName: "",
      },
    };
  }

  onClickAdd = () => {
    this.setState({
      addNewLocation: true,
    });
  };

  onChangeHandler = (event) => {
    console.log("old location", this.state.newLocation);
    console.log("new location", {
      ...this.state.newLocation,
      locationName: event.target.value,
    });

    this.setState({
      newLocation: {
        ...this.state.newLocation,
        locationName: event.target.value,
      },
    },()=>{
      console.log(this.state.newLocation)
    });

  };

  onClickSave = () => {
    alert("location added succeessfully");

    let stateLocationClone = this.state.stateLocation;
    let newIndex = Object.keys(stateLocationClone).length + 1;
    stateLocationClone[newIndex] = {
      locationId: newIndex,
      locationName: this.state.newLocation.locationName,
    };

    this.setState({
      stateLocation: stateLocationClone,
      addNewLocation: false,
    },()=>{
      console.log("Location List", this.state.stateLocation)
    });
  };

  render() {
    const { addNewLocation, stateLocation } = this.state;
    return (
      <>
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
                <th>Location </th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {Object.values(stateLocation).map((location) => {
                return (
                  <>
                    <tr>
                      <td></td>
                      <td>
                        <input
                          type="text"
                          defaultValue={location.locationName}
                          onChange={this.onChangeHandler}
                        />
                      </td>
                      <td>
                        <div>
                          <button type="button" class="btn btn-light">
                            <span class="bi bi-pencil"></span>
                          </button>
                          <CloseButton />
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>{location.locationId}</td>
                      <td>{location.locationName}</td>
                      <td>
                        <div>
                          <button
                            type="button"
                            class="btn btn-light"
                            onClick={this.onClickSave}
                          >
                            <span class="bi bi-pencil"></span>
                          </button>
                          <CloseButton />
                        </div>
                      </td>
                    </tr>
                  </>
                );
              })}

              {addNewLocation && (
                <tr>
                  <td></td>
                  <td>
                    <input type="text" onChange={this.onChangeHandler} />
                  </td>

                  <td>
                    <div>
                      <button
                        type="button"
                        class="btn btn-light"
                        onClick={this.onClickSave}
                      >
                        <span class="bi bi-check"></span>
                      </button>
                      <CloseButton />
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>

        <Button variant="light" size="sm" onClick={this.onClickAdd}>
          + Add new Location
        </Button>
      </>
    );
  }
}

export default AddLocationPage;
