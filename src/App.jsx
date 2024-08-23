import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import Service from "./components/Service/Service";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  return (
    <div className="Wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/service" element={<Service/>}/>
          <Route path="/testimonial" element={<Testimonial/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
