import React from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

function App() {

  return (
    <div className="App">
      <Navbar/>
      <ProductList/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
