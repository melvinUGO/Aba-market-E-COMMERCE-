import React from "react";
import { useGlobalcontext } from "../context";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

const ProductsContainer = () => {
  const { cart, increase } = useGlobalcontext();
  return (
    <section className="products-container">
      {cart.map((item) => {
        const { title, id, price, img, amount, category } = item;
        return (
          <section className="products-item" key={id}>
            <div className="info">
              <h4>{title}</h4>
              <p>{category}</p>
              <div className="price-container">
                <p className="price">₦{price}</p>
                <button className="add-btn" onClick={() => increase(id)}>
                  +
                </button>
              </div>
            </div>
            <div className="img-container">
              <img src={img} alt={title} />
            </div>
          </section>
        );
      })}
    </section>
  );
};

export default ProductsContainer;
