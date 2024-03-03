import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./Components/Form";
import PostOffices from "./Components/PostOffices";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="pincode/:pincode" element={<PostOffices />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
