import { getProducts } from "./apis/productApi";
import ProductList from "./components/ProductList";
import { useEffect } from "react";

function App() {
  // js 자리

  useEffect(() => {
    getProducts();
  }, []);

  // jsx 자리
  return (
    <div>
      <h1>Beauty Product List</h1>
      <span>
        다양한 뷰티 제품을 한눈에 확인하세요 https://dummyjson.com/products API
        사용 예제
      </span>
      <ProductList />
    </div>
  );
}

export default App;
