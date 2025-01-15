import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";

function App() {
  return (
    <div>
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/pricing' element={<PricingPage/>} />
        </Routes>
      </Router>
    </div>
  )
}
export default App;