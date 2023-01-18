export const Header = ({ count, setShow }) => {
  return (
    <div className="flex">
      <div onClick={() => setShow(false)}>Shopping Cart</div>
      <div onClick={() => setShow(true)}>
        Cart
        <sup>{count}</sup>
      </div>
    </div>
  );
};
