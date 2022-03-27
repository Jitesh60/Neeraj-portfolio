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
    
    <Routes>
        <Route path="/" element={ <App/>}/>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/ServicePage" element={<ServicePage />} />
        <Route path="/WorkPage" element={<WorkProject />} />
        <Route path="/ContactLast" element={<ContactLast />} />
      
      </Routes>
      </div>
  );
}

export default App;
