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
      selectedLocationForEdit: "",
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

    this.setState(
      {
        newLocation: {
          ...this.state.newLocation,
          locationName: event.target.value,
        },
      },
      () => {
        console.log(this.state.newLocation);
      }
    ); //callback to check on console
  };

  onClickSave = () => {
    alert("location added succeessfully");

    let stateLocationClone = this.state.stateLocation;
    let newIndex = Object.keys(stateLocationClone).length + 1;
    stateLocationClone[newIndex] = {
      locationId: newIndex,
      locationName: this.state.newLocation.locationName,
    };

    this.setState(
      {
        stateLocation: stateLocationClone,
        addNewLocation: false,
      },
      () => {
        console.log("Location List", this.state.stateLocation);
      }
    );
  };

  editLocation = (locationId) => {
  let locationList=this.state.stateLocation;
  locationList[locationId].locationName=this.state.newLocation.locationName
  this.setState({
    stateLocation:locationList,
    editMode:false
  })
  console.log("new location names:",this.state.newLocation);
  };

  handleDelete=(indexToDelete)=>{
   let stateLocationClone=this.state.stateLocation
   delete stateLocationClone[indexToDelete]
   this.setState({
     stateLocation:stateLocationClone
   })
  }


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
                if (
                  this.state.editMode &&
                  this.state.selectedLocationForEdit === location.locationId
                ) {
                  return (
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
                          <button type="button" class="btn btn-light" onClick={()=>this.editLocation(location.locationId)}>
                            <span class="bi bi-check"></span>
                          </button>
                          <CloseButton onClick={()=>this.setState({editMode:false})}/>
                        </div>
                      </td>
                    </tr>
                  );
                } else {
                  return (
                    <>
                      <tr>
                        <td>{location.locationId}</td>
                        <td>{location.locationName}</td>
                        <td>
                          <div>
                            <button
                              type="button"
                              class="btn btn-light"
                              onClick={()=>this.setState({editMode:true,selectedLocationForEdit:location.locationId})}
                            >
                              <span class="bi bi-pencil"></span>
                            </button>
                            <CloseButton onClick={()=>this.handleDelete(location.locationId)}/>
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                }
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
                      <CloseButton onClick={()=>this.setState({
                        addNewLocation:false,
                        newLocation:{locationId:0,location:""}
                      })}/>
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
