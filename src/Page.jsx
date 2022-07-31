import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import ContactLast from "./ContactLast";
import ContactUs from "./ContactUs";
import Header from "./Header";
import HomePage from "./HomePage";
import PageLayout from "./PageLayout";
import ServicePage from "./ServicePage";
import WorkProject from "./WorkProject";

function Page() {
  return (
    <div>
      <HomePage />
      <ServicePage />
      <WorkProject />
      <ContactUs />
      <ContactLast />
     
    </div>
  );
}

export default Page;
