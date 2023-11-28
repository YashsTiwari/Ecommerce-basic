import { useEffect } from "react";
import CardTemplate from "./CardTemplate";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import Loader from "../utils/loadingSpinner";
import StatusCode from "../utils/statusCode";

function Product() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  /*
  async function fetchData() {
    try {
      const res = await fetch(" https://api.escuelajs.co/api/v1/products");
      if (!res.ok) {
        throw new Error("failed to fetch");
      }
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error in fetching data: ", error);
    }
  }
*/
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (status === StatusCode.LOADING) return <Loader />;
  if (status === StatusCode.ERROR) {
    return <p>Something went wrong! 🫤 Try again later...</p>;
  }

  const addToCart = (product) => {
    dispatch(add(product));
  };

  const cards = products.map((product) => (
    <div className="col-md-3" style={{ marginBottom: "10px" }}>
      <CardTemplate
        key={product.id}
        product={product}
        handleClick={addToCart}
        buttonType={"primary"}
        buttonText={"Add To Cart"}
      />
    </div>
  ));
  return (
    <>
      <h1 className="text-center" style={{ marginBlock: "20px" }}>
        Product Dashboard
      </h1>
      <div className="row">{cards}</div>
    </>
  );
}

export default Product;
