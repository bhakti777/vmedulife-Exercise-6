import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";

class AddCategoryPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryList: {
      },

      addNewCategory: false,

      newCategory: {
        categoryId:0,
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

  onUpdateCategory = (event) => {
    console.log("old category",this.state.newCategory)
    console.log("new category", {...this.state.newCategory, categoryName:event.target.value})
    this.setState({
      newCategory: {...this.state.newCategory,categoryName:event.target.value }
    });
  };

  onClickSave = () => {
    let categorylistClone= this.state.categoryList;
    let newIndex = Object.keys(categorylistClone).length+1;
    categorylistClone[newIndex] = {
      categoryId:newIndex,
      categoryName:this.state.newCategory.categoryName
    };

    this.setState({
     categoryList:categorylistClone
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

  handleDelete(indexToDelete) {
    let categoryList = this.state.categoryList;
    categoryList.splice(indexToDelete, 1);
  
    this.setState({
      categoryList: categoryList
    });
  }

  render() {
    const { categoryList, addNewCategory, newCategory, editMode } = this.state;
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
              {Object.values(categoryList).map((category) => {
                return (
                  <>
                    <tr>
                      <td>{category.categoryId}</td>
                      <td>
                        {category.editMode ? (
                          <input
                            type="text"
                            defaultValue={category.categoryName}
                            onChange={this.onChangeHandler}
                          />
                        ) : (
                          category.categoryName
                        )}
                      </td>
                      <td>
                        <div>
                          <button
                            type="button"
                            class="btn btn-light"
                            onClick={() => this.editCategory(category.categoryId)}
                          >
                            <span class="bi bi-pencil"></span>
                          </button>
                          <CloseButton onClick={()=>this.handleItemsDelete(category)}/>
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
                      defaultValue={newCategory.categoryName}
                      onChange={this.onUpdateCategory}
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
                      <CloseButton onClick={()=> this.setState({addNewCategory:false, newCategory:{categoryId:0,categoryName:""}}) } />
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
