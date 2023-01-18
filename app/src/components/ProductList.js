export const ProductList = ({ addToCart, data, setData }) => {
  return (
    <>
      {data.map((el, id) => (
        <div key={id}>
          <p>Id:{el.id}</p>
          <p>Product:{el.product}</p>
          <p>Price:{el.price * el.quantity}</p>
          <button onClick={() => addToCart(el)}>Add</button>
        </div>
      ))}
    </>
  );
};
