import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";

export class AddAssetsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stateAssets: {},
      addNewAssets: false,
      selectedAssetForEdit: "",
      newAsset: {
        assetId: 0,
        assetName: "",
        quantity: "",
        amountPerUnit: "",
        category: "",
        location: "",
      },
      editMode: false,
    };
  }

  onClickAdd = () => {
    this.setState({
      addNewAssets: true,
    });
  };

  onChangeHandler = (event) => {
    console.log("old assets", this.state.newAsset);
    console.log("new ", {
      ...this.state.newAsset,
      [event.target.name]: event.target.value,
    });

    this.setState({
      newAsset: {
        ...this.state.newAsset,
        [event.target.name]: event.target.value,
      },
    });

    console.log(
      "[event.target.name]:event.target.value=>",
      this.state.newAsset
    );
  };

  onClickSave = () => {
    let stateAssetsClone = this.state.stateAssets;
    let newIndex = Object.keys(stateAssetsClone).length + 1;
    stateAssetsClone[newIndex] = {
      assetId: newIndex,
      assetName: this.state.newAsset.assetName,
      quantity: this.state.newAsset.quantity,
      amountPerUnit: this.state.newAsset.amountPerUnit,
      category: this.state.newAsset.category,
      location: this.state.newAsset.location,
    };

    this.setState({
      stateAssets: stateAssetsClone,
      addNewAssets: false,
    });
  };

  editAsset=(assetId)=>{
    let assetList=this.state.stateAssets;
    // assetList[assetId].assetName=this.state.newAsset.assetName
    // assetList[assetId].quantity=this.state.newAsset.quantity
    // assetList[assetId].amountPerUnit=this.state.newAsset.amountPerUnit
    // assetList[assetId].category=this.state.newAsset.category
    // assetList[assetId].location=this.state.newAsset.location
    console.log(this.state.newAsset);
    assetList[assetId] = this.state.newAsset;
    console.log(assetList);

    this.setState({
      stateAssets:assetList,
      editMode:false
    })

  }

  render() {
    const { stateAssets, addNewAssets } = this.state;
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
                <th>Asset Name</th>
                <th>Quantity</th>
                <th>Amount per unit</th>
                <th>Category</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {Object.values(stateAssets).map((asset) => {
                if (
                  this.state.editMode &&
                  this.state.selectedAssetForEdit === asset.assetId
                ) {
                  return (
                    <>
                      <tr>
                        <td></td>
                        <td>
                          <input
                            type="text"
                            name="assetName"
                            defaultValue={asset.assetName}
                            onChange={this.onChangeHandler}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="quantity"
                            defaultValue={asset.quantity}
                            onChange={this.onChangeHandler}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="amountPerUnit"
                            defaultValue={asset.amountPerUnit}
                            onChange={this.onChangeHandler}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="category"
                            defaultValue={asset.category}
                            onChange={this.onChangeHandler}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="location"
                            defaultValue={asset.location}
                            onChange={this.onChangeHandler}
                          />
                        </td>
                        <td>
                          <div className="flex">
                            <span>
                              <button 
                              type="button" 
                              className="btn btn-light"
                              onClick={()=>this.editAsset(asset.assetId)}
                              >
                                <span className="bi bi-check"></span>
                              </button>
                            </span>
                            <span>
                              <CloseButton />
                            </span>
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                } else {
                  return (
                    <tr>
                      <td>{asset.assetId}</td>
                      <td>{asset.assetName}</td>
                      <td>{asset.quantity}</td>
                      <td>{asset.amountPerUnit}</td>
                      <td>{asset.category}</td>
                      <td>{asset.location}</td>

                      <td>
                        <div className="flex">
                          <span>
                            <button
                              type="button"
                              className="btn btn-light"
                              onClick={() =>
                                this.setState({
                                  editMode: true,
                                  selectedAssetForEdit: asset.assetId,
                                })
                              }
                            >
                              <span className="bi bi-pencil"></span>
                            </button>{" "}
                          </span>
                          <span>
                            <CloseButton />
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                }
              })}

              {addNewAssets && (
                <tr>
                  <td></td>
                  <td>
                    <input
                      type="text"
                      name="assetName"
                      value={this.state.newAsset.assetName}
                      onChange={this.onChangeHandler}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="quantity"
                      value={this.state.newAsset.quantity}
                      onChange={this.onChangeHandler}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="amountPerUnit"
                      value={this.state.newAsset.amountPerUnit}
                      onChange={this.onChangeHandler}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="category"
                      value={this.state.newAsset.category}
                      onChange={this.onChangeHandler}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="location"
                      value={this.state.newAsset.location}
                      onChange={this.onChangeHandler}
                    />
                  </td>
                  <td>
                    <div className="flex">
                      <span>
                        {" "}
                        <button
                          type="button"
                          className="btn btn-light"
                          onClick={this.onClickSave}
                        >
                          <span className="bi bi-check"></span>
                        </button>{" "}
                      </span>
                      <span>
                        <CloseButton
                          onClick={() => {
                            this.setState({
                              addNewAssets: false,
                              newAsset: {
                                assetId: 0,
                                assetName: "",
                                quantity: "",
                                amountPerUnit: "",
                                category: "",
                                location: "",
                              },
                            });
                          }}
                        />
                      </span>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>

        <Button variant="light" size="sm" onClick={this.onClickAdd}>
          + Add new Assets
        </Button>
      </div>
    );
  }
}

export default AddAssetsPage;
