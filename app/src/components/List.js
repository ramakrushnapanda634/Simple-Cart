import { useState } from "react";
import { ProductList } from "./ProductList";
import { CartList } from "./CartList";
import { Header } from "./Header";
const Cart = [
  { id: 1, product: "Mobile", price: 10000, quantity: 1 },
  { id: 2, product: "Laptop", price: 50000, quantity: 1 },
  { id: 3, product: "DeskTop", price: 40000, quantity: 1 },
  { id: 4, product: "Books", price: 500, quantity: 1 },
];
export const List = () => {
  const [data, setData] = useState(Cart);
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);
  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
  };
  console.log(cart);
  return (
    <>
      <Header count={cart.length} setShow={setShow} />
      {show ? (
        <CartList cart={cart} setCart={setCart} />
      ) : (
        <ProductList data={data} addToCart={addToCart} setData={setData} />
      )}
    </>
  );
};
