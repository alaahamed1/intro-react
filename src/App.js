
import "./app.css"
import React, { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  async function getProduct() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
  }

  return (
    <>
      <button btn btn-primary onClick={getProduct}>View products</button>
      <div className="main">
      <div className="container cards">
      {products.map((product) => (
        <div key={product.id} className="card ">
          <img src={product.image} className="card-img-top" alt={product.title} />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
          </div>
        </div>
      ))}
      </div>
      </div>
    </>
  );
}

export default App;

