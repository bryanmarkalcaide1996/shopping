import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helper";
import CartModal from "./modals/CartModal";

function Product({ id, productName, imageUrl, description, unitPrice }) {
  const { addToCart } = useCartContext();
  const [showModal, setModal] = useState(false);
  const navigate = useNavigate();
  return (
    <Wrapper>
      {showModal && <CartModal />}
      <div className="image-container">
        <img src={imageUrl} alt={productName} />
      </div>
      <article>
        <div className="description-container">
          <h1>{productName}</h1>
          <p>SKU: ( {id} )</p>
          <p>{description}</p>
          <h2>{formatPrice(unitPrice)}</h2>
          <button
            className="btn"
            onClick={() => {
              addToCart({ id, productName, imageUrl, description, unitPrice });
              setModal(true);
              setTimeout(() => {
                setModal(false);
                navigate("/products");
              }, 1000);
            }}
          >
            Add to Cart
          </button>
        </div>
      </article>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  margin: 30px;
  .image-container {
    display: flex;
    height: 500px;
    overflow: hidden;
    padding: 10px;
    width: 30%;
    img {
      width: 100%;
      object-fit: contain;
    }
  }
  article {
    width: 50%;
    .description-container {
      * {
        padding: 5px;
        margin: 5px;
      }
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 30px;
    }
  }
`;

export default Product;
