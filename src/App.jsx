import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import ContactLast from "./ContactLast";
import ContactUs from "./ContactUs";
import Header from "./Header";
import HomePage from "./HomePage";
import PageLayout from "./PageLayout";
import ServicePage from "./ServicePage";
import WorkProject from "./WorkProject";

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <ServicePage />
      <WorkProject />
      <ContactUs />
      <ContactLast />
      <Routes>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
