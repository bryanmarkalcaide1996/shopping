import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helper";

function Product({ id, productName, imageUrl, description, unitPrice }) {
  return (
    <Wrapper>
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
            onClick={() => {
              console.log(id);
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
