import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helper";

function Cart() {
  const { cart, setQty, totalAmount, clearCart } = useCartContext();

  if (!cart.length) {
    return (
      <div>
        <h1>Cart is currently empty</h1>
        <Link to="/products">
          <button>Fill cart</button>
        </Link>
      </div>
    );
  }

  return (
    <Wrapper>
      <div className="items-list-container">
        {cart
          .map(({ id, productName, imageUrl, unitPrice, qty }) => {
            return (
              <div className="card" key={id}>
                <div className="image-container">
                  <img src={imageUrl} alt={productName} />
                </div>
                <section>
                  <h4>{productName}</h4>
                  <h4>Price : {formatPrice(unitPrice)}</h4>
                  <div className="qty">
                    <div className="qty-btns">
                      <button
                        name="decrease"
                        onClick={(e) => {
                          const { name } = e.target;
                          setQty(name, id);
                        }}
                      >
                        -
                      </button>
                      <span>{qty}</span>
                      <button
                        name="increase"
                        onClick={(e) => {
                          const { name } = e.target;
                          setQty(name, id);
                        }}
                      >
                        +
                      </button>
                    </div>
                    <h5>TOTAL : {formatPrice(unitPrice * qty)}</h5>
                  </div>
                </section>
              </div>
            );
          })
          .reverse()}
        <div className="cta-container">
          <button onClick={clearCart} className="clear-cart">
            Clear Cart
          </button>
          <div className="cta">
            <h5>
              TOTAL AMOUNT: <br /> {formatPrice(totalAmount)}
            </h5>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  .card {
    display: flex;
    margin: 20px;
    .image-container {
      align-self: center;
      display: flex;
      width: 20%;
      height: 150px;
      overflow: hidden;
      img {
        width: 100%;
        object-fit: contain;
      }
    }
    section {
      width: 100%;
      * {
        margin: 5px;
        padding: 5px;
      }
      display: flex;
      flex-direction: column;

      .qty {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .cta-container {
    * {
      padding: 10px;
    }
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 20px;
    .cta {
      display: flex;
      flex-direction: column;
      button {
        width: 100%;
      }
    }
  }
`;
export default Cart;
