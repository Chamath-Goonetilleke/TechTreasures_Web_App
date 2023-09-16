import React, { Component } from 'react'

export default class LoginForm extends Component {
  render() {

    return (
      <div
        className="formContainer"
        style={{
          display:'flex',
          flex: 1,
          border: "1px solid black",
          margin: "1rem",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form>
          <center>
            <div
              style={{ fontSize: "22px", margin: "1rem", marginBottom: "8rem" }}
            >
              Please login to your account
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
              Login
            </button>
            <div>
              Not a member?
              <button
                type="button"
                class="btn btn-link"
                onClick={this.props.onLoginClick}
              >
                Register
              </button>
            </div>
          </center>
        </form>
      </div>
    );
  }
}
