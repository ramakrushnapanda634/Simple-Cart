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
  const [search,setSearch]=useState([])
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);
  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
  }

 // console.log(cart);
 const handleChange=(e)=>{
setSearch(e.target.value);
const value = data.filter((item) => 
item.product.toLowerCase().includes(e.target.value.toLowerCase()));
 setData(value);
}
const ascendingEvent = () => {
     
     
      let result = [...data].sort((a,b) =>
       a.price-b.price)
      setData(result)
     
  }
  const descendingEvent = () => {
     
     
      let result = [...data].sort((a,b) => 
       b.price-a.price)
      setData(result)
     
    }
  
  return (
    <>
      <input
        type="search"
        placeholder="product"
        value={search}
        onChange={handleChange}
      />
      <br />
      <h3>Filter By Price</h3>
      <button onClick={ascendingEvent}>Ascending</button>
      <button style={{ margin: "10px" }} onClick={descendingEvent}>
        Descending
      </button>
     
      <br />
      <Header count={cart.length} setShow={setShow} />
      {show ? (
        <CartList cart={cart} setCart={setCart} />
      ) : (
        <ProductList data={data} addToCart={addToCart} setData={setData} />
      )}
    </>
  );
}
