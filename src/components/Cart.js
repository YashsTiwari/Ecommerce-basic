import CardTemplate from "./CardTemplate";

import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

function Cart() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (product) => {
    dispatch(remove(product.id));
  };
  const cards = products.map((product) => (
    <div className="col-md-12" style={{ marginBottom: "10px" }}>
      <CardTemplate
        key={product.id}
        product={product}
        buttonType={"danger"}
        buttonText={"Remove"}
        handleClick={removeFromCart}
      />
    </div>
  ));
  return (
    <>
      <div className="row">{cards}</div>
    </>
  );
}

export default Cart;
