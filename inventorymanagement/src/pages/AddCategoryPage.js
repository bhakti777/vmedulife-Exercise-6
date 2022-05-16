import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";

class AddCategoryPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stateCategory: {},

      addNewCategory: false,
      selectedCategoryForEdit:'',
      newCategory: {
        categoryId: 0,
        categoryName: "",
      },
    };
  }

  onChangeHandler = (event, categoryId) => {
    let stateCategory = this.state.stateCategory;
    stateCategory[categoryId].categoryName = event.target.value;
    this.setState({
      stateCategory,
    });
  };

  onClickAdd = () => {
    this.setState({
      addNewCategory: true,
    });
  };

  onUpdateCategory = (event) => {
    console.log("old category", this.state.newCategory);
    console.log("new category", {
      ...this.state.newCategory,
      categoryName: event.target.value,
    });
    this.setState({
      newCategory: {
        ...this.state.newCategory,
        categoryName: event.target.value,
      },
    });
  };

  onClickSave = () => {
    alert("Category added successfully !");

    let stateCategoryClone = this.state.stateCategory;
    let newIndex = Object.keys(stateCategoryClone).length + 1;
    stateCategoryClone[newIndex] = {
      categoryId: newIndex,
      categoryName: this.state.newCategory.categoryName,
    };

    this.setState({
      stateCategory: stateCategoryClone,
      addNewCategory:false
    });
  };

  editCategory = (categoryId) => {
    let categoryList = this.state.stateCategory;
    categoryList[categoryId].categoryName = this.state.newCategory.categoryName;
    
    this.setState({
      stateCategory:categoryList,
      editMode:false 
    })
  };

  handleDelete(indexToDelete) {
    let stateCategory = this.state.stateCategory;
    delete stateCategory[indexToDelete];
    this.setState({
      stateCategory: stateCategory,
    });
  }

  

  render() {
    const { stateCategory, addNewCategory, newCategory, editMode } = this.state;
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
              {Object.values(stateCategory).map((category) => {
                  
                if(this.state.editMode && this.state.selectedCategoryForEdit === category.categoryId){
                  return (
                    <tr>
                      <td></td>
                      <td>
                          <input
                            type="text"
                            defaultValue={category.categoryName}
                            onChange={this.onUpdateCategory}
                        />

                      </td>
                      <td>
                          <div>
                              <button
                                type="button"
                                class="btn btn-light"
                                onClick={()=> 
                                  this.editCategory(category.categoryId)
                                   }
                                >
                                <span class="bi bi-check"></span>
                              </button>
                              <CloseButton onClick={()=>{
                                this.setState({
                                  editMode:false
                                })
                              }} />
                          </div>
                      </td>
                    </tr>
                  )
                }else{
                  return (
                  

                    <>
                      <tr>
                        <td>{category.categoryId}</td>
                        <td>{category.categoryName}</td>
                        <td>
                          <div>
                            <button
                              type="button"
                              class="btn btn-light"
                              onClick={()=> this.setState({editMode:true, selectedCategoryForEdit:category.categoryId})}
                            >
                              <span class="bi bi-pencil"></span>
                            </button>
                            <CloseButton onClick={()=> this.handleDelete(category.categoryId)} />
                          </div>
  
                        </td>
                      </tr>   
                    </>
                  );  
                }

                
              })}

              {addNewCategory && (
                <tr>
                  <td></td>
                  <td>
                    <input
                      type="text"
                      // defaultValue={newCategory.categoryName}
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
                      <CloseButton
                        onClick={() =>
                          this.setState({
                            addNewCategory: false,
                            newCategory: { categoryId: 0, categoryName: "" },
                          })
                        }
                      />
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
