import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/UserManagement/loginPage";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import AdminPage from "./components/UserManagement/AdminPanel/AdminPage";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
        <Footer />
      </React.Fragment>
    );
  }
}
