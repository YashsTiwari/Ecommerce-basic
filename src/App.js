import { useEffect, useState } from "react";
import "./App.css";
import Product from "./components/Product";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const res = fetch("https://fakestoreapi.com/products");
    const data = res.json();

    setProducts(data);
  }, []);
  return (
    <div className="App">
      <Product />
    </div>
  );
}

export default App;
