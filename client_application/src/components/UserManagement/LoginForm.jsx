import React, { Component } from "react";
import { authUser } from "../../services/userService";

export default class LoginForm extends Component {
  state = {
    data: {
      email: "",
      password: "",
    },
  };

  handleChange = (e) => {
    let data = this.state.data;
    const name = e.target.name;
    const value = e.target.value;

    data[name] = value;
    this.setState({ data: data });
  };

  onSubmit = async () => {
    await authUser(this.state.data)
      .then(({ data }) => {
        alert(
          "email : " +
            data.email +
            "\nname : " +
            data.name +
            "\nrole : " +
            data.userRole +
            "\nid : " +
            data.id
        );
      })
      .catch((err) => alert(err.response.data));
  };

  render() {
    const { data } = this.state;
    return (
      <div
        className="formContainer"
        style={{
          display: "flex",
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
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              name="email"
              value={data.email}
              onChange={(e) => this.handleChange(e)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={data.password}
              onChange={(e) => this.handleChange(e)}
            />
          </div>

          <center>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                this.onSubmit();
              }}
            >
              Login
            </button>
            <div>
              Not a member?
              <button
                type="button"
                className="btn btn-link"
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
