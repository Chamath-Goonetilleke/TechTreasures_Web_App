import React, { Component } from 'react'

export default class RegisterForm extends Component {
  render() {

    return (
      <div
        className="formContainer"
        style={{
          flex: 1,
          border: "1px solid black",
          margin: "1rem",
          height: "100%",
          padding: "2rem",
        }}
      >
        <form>
          <center>
            <div
              style={{ fontSize: "20px", margin: "1rem", marginBottom: "2rem" }}
            >
              Please create a new account
            </div>
          </center>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>

          <center>
            <button type="button" class="btn btn-primary">
              Register
            </button>
            <div>
              Already have an Account?
              <button
                type="button"
                class="btn btn-link"
                onClick={this.props.onRegisterClick}
              >
                Login
              </button>
            </div>
          </center>
        </form>
      </div>
    );
  }
}
