import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useGlobalcontext } from "../context";

const CartContainer = () => {
  const { cart, increase, decrease, remove } = useGlobalcontext();
  const cartItems = cart.filter((item) => item.amount > 0);

  if (cartItems.length < 1) {
    return (
      <h3>
        <em>...no items added in cart</em>
      </h3>
    );
  }
  return (
    <>
      {cartItems.map((item) => {
        const { title, id, price, img, amount, category } = item;
        return (
          <article className="products-item cart-item">
            <div className="img-container">
              <img src={img} alt={title} />
            </div>
            <div>
              <h4>{title}</h4>
              <h4 className="price">₦{price}</h4>
              {/* remove button */}
              <button className="remove-btn" onClick={() => remove(id)}>
                remove
              </button>
            </div>
            <div>
              {/* increase amount */}
              <button className="amount-btn" onClick={() => increase(id)}>
                <FaArrowUp />
              </button>
              {/* amount */}
              <p className="amount">{amount}</p>
              {/* decrease amount */}
              <button className="amount-btn" onClick={() => decrease(id)}>
                <FaArrowDown />
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default CartContainer;
