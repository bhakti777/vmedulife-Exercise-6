import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";
import Modal from "react-bootstrap/Modal";


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
      showPopup:false,
      editMode:false
    };
  }

handleClosePopup=()=>{
  this.setState({
    showPopup:false
  })
}

handleShowPopup=(indexToDelete)=>{
  this.setState({
    showPopup:true,
    selectedIdforDelete:indexToDelete   //maintaining new state ,stored selected id to delete
  })
}

  onClickAdd = () => {
    this.setState({
      addNewCategory: true,
    });
  };

  onChangeHandler = (event) => {
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
    let newIndex = Object.keys(stateCategoryClone).length + 1;  // calculating previous key length ..added newIndex on every click by incrementing length 
    stateCategoryClone[newIndex] = {  //passed newIndex to clone and value is updated
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
    let stateCategoryClone = this.state.stateCategory;
    delete stateCategoryClone[indexToDelete];
    this.setState({
      stateCategory: stateCategoryClone,
    });
  }

  

  render() {
    const { stateCategory, addNewCategory,showPopup } = this.state;
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
                  //state is an object and editMode is default state
                  //...it is undefined by default considered false
                if(this.state.editMode && this.state.selectedCategoryForEdit === category.categoryId){
                  return (
                    <tr>
                      <td></td>
                      <td>
                          <input
                            type="text"
                            defaultValue={category.categoryName}
                            onChange={this.onChangeHandler}
                        />

                      </td>
                      <td>
                          <div>
                              <button
                                type="button"
                                className="btn btn-light"
                                onClick={()=> 
                                  this.editCategory(category.categoryId)
                                   }
                                >
                                <span className="bi bi-check"></span>
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
                              className="btn btn-light"
                              onClick={()=> this.setState({editMode:true, selectedCategoryForEdit:category.categoryId})}
                            >
                              <span className="bi bi-pencil"></span>
                            </button>
                            <CloseButton onClick={
                              ()=> {
                               this.handleShowPopup(category.categoryId)
                              // this.handleDelete(category.categoryId)
                            }
                          } 
                            />
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
                      onChange={this.onChangeHandler}
                      //onchange fetch input  and update value 
                    />
                  </td>
                  <td>
                    <div>
                      <button
                        type="button"
                        className="btn btn-light"
                        onClick={this.onClickSave}
                      >
                        <span className="bi bi-check"></span>
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


    {showPopup &&
    <div>
    <Modal show={showPopup} onHide={this.handleClosePopup}>
      <Modal.Body>
       <div className="spaceBetween">
         <span><p>Are you sure you want to remove the item?</p></span>
         <span><CloseButton onClick={this.handleClosePopup}/></span>
       </div>
      </Modal.Body>

      <Modal.Footer>
          <Button variant="dark" size="sm" onClick={  ()=>  this.handleDelete(this.state.selectedIdforDelete)}
          >yes</Button>
          <Button variant="primary" size="sm" onClick={this.handleClosePopup}>No</Button>
     </Modal.Footer>
     </Modal>
    </div>
  } 
      
      </>
    );
  }
}

export default AddCategoryPage;
