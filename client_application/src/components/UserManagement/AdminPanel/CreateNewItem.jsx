import React, { Component } from "react";

export default class CreateNewItem extends Component {
  state = {
    itemName: "",
    price: "",
    quantity: "",
    description: "",
    imageFiles: [],
    imagePreviews: [],
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleImageChange = (event) => {
    const imageFiles = event.target.files;

    if (imageFiles) {
      const readerArray = [];
      const previews = [];

      for (let i = 0; i < imageFiles.length; i++) {
        const reader = new FileReader();
        const file = imageFiles[i];

        reader.onload = (e) => {
          previews.push(e.target.result);
          this.setState({
            imagePreviews: [...previews],
          });
        };

        readerArray.push(reader);
        reader.readAsDataURL(file);
      }

      this.setState({
        imageFiles: [...imageFiles],
      });
    }
  };

  handleAddItem = () => {
    // Handle adding the item to the database here, including the image files
    const newItem = {
      itemName: this.state.itemName,
      price: this.state.price,
      quantity: this.state.quantity,
      description: this.state.description,
      imageFiles: this.state.imageFiles, // You can send the image files to the backend for storage
    };

    // Perform an API call or database insert here

    // Clear the form fields and image previews after adding
    this.setState({
      itemName: "",
      price: "",
      quantity: "",
      description: "",
      imageFiles: [],
      imagePreviews: [],
    });
  };

  render() {
    console.log(this.state.imagePreviews);
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "77.4vh",
        }}
      >
        <div
          style={{
            border: "1px solid black",
            margin: "1rem",
            padding: "2rem",
            width: "50%",
          }}
        >
          <div style={{ marginBottom: "3rem" }}>
            <center>
              <h2>Add a New Item</h2>
            </center>
          </div>
          <form>
            <div style={{ overflow:"auto",  height:'49vh', marginBottom:'1rem'}}>
              <div class="mb-3">
                <label for="formFileMultiple" class="form-label">
                  Upload Product Images
                </label>
                <input
                  class="form-control"
                  type="file"
                  id="formFileMultiple"
                  accept="image/*"
                  multiple
                  onChange={this.handleImageChange}
                />
              </div>

              {this.state.imagePreviews.length > 0 && (
                <div style={{ display: "flex", flexDirection: "row", overflow:'auto' }}>
                  {this.state.imagePreviews.map((preview, index) => (
                    <div key={index} style={{marginRight:'0.5rem'}}>
                      <img
                        src={preview}
                        alt={`Preview ${index + 1}`}
                        style={{ maxWidth: "100px", maxHeight: "100px" }}
                      />
                    </div>
                  ))}
                </div>
              )}

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Item Name
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <label for="exampleFormControlInput1" class="form-label">
                Price
              </label>
              <div class="input-group mb-3">
                <br />
                <span class="input-group-text">LKR</span>
                <input type="number" class="form-control" aria-label="Amount" />
                <span class="input-group-text">.00</span>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Quantity
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Description
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <center>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "40%",
                }}
              >
                <button type="button" className="btn btn-secondary">
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.handleAddItem}
                >
                  Add Item
                </button>
              </div>
            </center>
          </form>
        </div>
      </div>
    );
  }
}
