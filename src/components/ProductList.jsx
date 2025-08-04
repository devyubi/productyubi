import { useEffect, useState } from "react";
import axios from "axios";
import "./css/productlist.css";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.error("ERROR", err));
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <h3>{product.title}</h3>
          <img src={product.thumbnail} alt={product.title} />
          <strong>${product.price}</strong>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
