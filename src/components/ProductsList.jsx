import React from "react";
import { useProductsContext } from "../context/products_context";
import styled from "styled-components";

function ProductsList() {
  const { allProducts } = useProductsContext();
  return (
    <Wrapper>
      {allProducts.map(
        ({ id, productName, imageUrl, description, unitPrice }) => {
          return (
            <div className="card" id={id}>
              <div className="img-container">
                <img src={imageUrl} alt={productName} />
              </div>
              <h4>{productName}</h4>
              <p>{description.slice(0, 150)}</p>
              <h4>$ {unitPrice}</h4>
            </div>
          );
        }
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 10px 30px;
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .img-container {
    height: 300px;
    overflow: hidden;
  }
  img {
    object-fit: contain;
  }
`;
export default ProductsList;
