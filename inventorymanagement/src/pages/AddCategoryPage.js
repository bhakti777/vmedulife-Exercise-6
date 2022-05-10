import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";

class AddCategoryPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryList: {
        101: {
          categoryId: 101,
          categoryName: "stationary",
          editMode: false,
        },
        102: {
          categoryId: 102,
          categoryName: "hardware",
          editMode: false,
        },
      },

      addNewCategory: false,

      saveCategory: {
        categoryName: "",
      },
    };
  }

  onChangeHandler = (event) => {
    this.setState({
      stateCategory: event.target.value,
    });
  };

  onClickAdd = () => {
    this.setState({
      addNewCategory: true,
    });
  };

  onChangeSave = (event) => {
    this.setState({
      saveCategory: event.target.value,
    });
  };

  onClickSave = () => {
    this.setState({
      saveCategory: "",
    });
  };

  editCategory = (categoryId) => {
    let categoryList = this.state.categoryList;

    categoryList[categoryId].editMode = true;

    this.setState({
      categoryList,
      editMode:true
    });
  };

  render() {
    const { categoryList, addNewCategory, saveCategory, editMode } = this.state;
    return (
      <>
        <div className="flex">
          <span>
            <strong>Category :</strong>
          </span>
          <span>
            category added successfully ! <CloseButton />
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
              {Object.values(categoryList).map((data) => {
                return (
                  <>
                    <tr>
                      <td>{data.categoryId}</td>
                      <td>
                        {data.editMode ? (
                          <input
                            type="text"
                            defaultValue={data.categoryName}
                            onChange={this.onChangeHandler}
                          />
                        ) : (
                          data.categoryName
                        )}
                      </td>
                      <td>
                        <div>
                          <button
                            type="button"
                            class="btn btn-light"
                            onClick={() => this.editCategory(data.categoryId)}
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

              {addNewCategory && (
                <tr>
                  <td></td>
                  <td>
                    <input
                      type="text"
                      defaultValue={saveCategory.categoryName}
                      onChange={this.onChangeSave}
                    />
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
          + Add new Category
        </Button>
      </>
    );
  }
}

export default AddCategoryPage;
