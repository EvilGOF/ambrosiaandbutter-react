import image from "./components-img/cart.png";

const CartWidget = () => {
  return (
    <li className="cart-box">
      <a href="#">
        <img src={image} alt="cart" className="cart-img" />
      </a>
    </li>
  );
};

export default CartWidget;
