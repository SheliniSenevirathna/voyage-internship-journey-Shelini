import React from "react";
import "./Cart.css"; // Make sure this file exists in the same folder

function Cart({ cart, removeFromCart }) {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <p>
                {item.name} (x{item.quantity}) - ${item.price * item.quantity}
              </p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ${totalPrice}</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
