export const CartList = ({ cart, setCart }) => {
  const decrement = (product) => {
    if (product.quantity > 1) {
      setCart(
        cart.map((el) =>
          el.id === product.id
            ? { ...product, quantity: product.quantity - 1 }
            : el
        )
      );
    }
  };
  const increment = (product) => {
    setCart(
      cart.map((el) =>
        el.id === product.id
          ? { ...product, quantity: product.quantity + 1 }
          : el
      )
    );
  };
  return (
    <>
      {cart.map((el, id) => {
        return (
          <div key={id}>
            <p>Id:{el.id}</p>
            <p>Product:{el.product}</p>
            <p>Price:{el.price * el.quantity}</p>
            <div>
              <button onClick={() => decrement(el)}>-</button>
              <p>{el.quantity}</p>
              <button onClick={() => increment(el)}>+</button>
            </div>
          </div>
        );
      })}
      <h2>
        Total:-
        {cart
          .map((el) => el.price * el.quantity)
          .reduce((acc, value) => acc + value, 0)}
      </h2>
    </>
  );
};
