import React, { useState } from "react";
import { formatPrice } from "../utils/helper.js";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context.js";

function ProductsList() {
  const [filter, setFilter] = useState(true);
  const { allProducts } = useProductsContext();
  const { addToCart } = useCartContext();
  return (
    <>
      {filter ? null : (
        <Wrapper>
          {allProducts.map(
            ({ id, productName, imageUrl, description, unitPrice }) => {
              return (
                <div className="card" key={id}>
                  <Link to={`/products/${id}`}>
                    <div className="img-container">
                      <img src={imageUrl} alt={productName} />
                    </div>
                    <h4>{productName}</h4>
                    <p>{description.slice(0, 150)}</p>
                    <h4>{formatPrice(unitPrice)}</h4>
                  </Link>

                  <button
                    onClick={() => {
                      addToCart({
                        id,
                        productName,
                        imageUrl,
                        description,
                        unitPrice,
                      });
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              );
            }
          )}
        </Wrapper>
      )}
    </>
  );
}

const Wrapper = styled.div`
  * {
    padding: 10px;
  }
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 10px 30px;
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .img-container {
    display: flex;
    height: 150px;
    overflow: hidden;
  }
  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
export default ProductsList;
