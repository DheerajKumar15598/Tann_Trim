import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

function App() {
  const [data, setData] = useState([])

  const getAPI = async () => {
    await axios.get(`https://fakestoreapi.com/products`,{
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
  })
  .then((response) => {
    const data = response.data;
    setData(data);
    console.log(data[1].image)
  }).catch((err) => {
    console.log(err)
  })
  }

  useEffect(()=>{
    getAPI()
  },[])

  return (
    <div className="App">
      <Navbar/>
      <ProductList/>
      <div className="card-container">
      {
        data.map((data) => {
          const {title, price, id, image} = data
          return <Card title={title} img={image} price={price} key={id}/>
        })
      }
      {/* <Card /> */}
      </div>
    </div>
  );
}

export default App;
