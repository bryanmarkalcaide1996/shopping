import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { formatPrice } from "../utils/helper";
import PurchaseModal from "./modals/PurchaseModal";

function Cart() {
  const {
    cart,
    setQty,
    totalAmount,
    totalQty,
    clearCart,
    removeItem,
    showModal,
    setModal,
  } = useCartContext();

  if (!cart.length) {
    return (
      <div className="empty-cart">
        <h1>Cart is currently empty</h1>
        <Link to="/" style={{ marginTop: "30px" }}>
          <button className="btn">Fill cart</button>
        </Link>
      </div>
    );
  }

  return (
    <Wrapper>
      {showModal && <PurchaseModal />}
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
                        type="button"
                        onClick={() => {
                          const name = "decrease";
                          setQty(name, id);
                        }}
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>

                      <h3>{qty}</h3>

                      <button
                        onClick={() => {
                          const name = "increase";
                          setQty(name, id);
                        }}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>

                      <button
                        onClick={() => {
                          removeItem(id);
                        }}
                      >
                        <FontAwesomeIcon icon={faTrash} />
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
          <button onClick={clearCart} className="clear-cart btn">
            Clear Cart
          </button>

          <div className="cta">
            <h5>
              TOTAL AMOUNT: <br /> {formatPrice(totalAmount)}
            </h5>
            <h5>
              TOTAL ITEMS: <br /> {totalQty}
            </h5>
            <button
              className="btn"
              onClick={() => {
                setModal(true);
                setTimeout(() => {
                  setModal(false);
                }, 1000);
              }}
            >
              Checkout
            </button>
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
      }
      display: flex;
      flex-direction: column;

      .qty {
        display: flex;
        justify-content: space-between;
      }
      .qty-btns {
        display: flex;
      }
    }
  }
  .cta-container {
    * {
      padding: 10px;
    }

    .clear-cart {
      background: rgba(217, 206, 63, 0.5);
      color: black;
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
