import React, { useState } from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helper.js";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context.js";
import { useFilterContext } from "../context/filter_context.js";
import CartModal from "./modals/CartModal.jsx";

function ProductsList() {
  const { addToCart } = useCartContext();
  const { filteredList: productsList } = useFilterContext();
  const [showModal, setModal] = useState(false);

  return (
    <Wrapper>
      {showModal && <CartModal />}
      {productsList.map(
        ({ id, productName, imageUrl, description, unitPrice, category }) => {
          return (
            <div className="card" key={id}>
              <Link to={`/products/${id}`} className="link">
                <div className="img-container">
                  <img src={imageUrl} alt={productName} />
                </div>
                <h4>{productName}</h4>
                <p>{description.slice(0, 100)}</p>
                <h5>{category}</h5>
                <h4>{formatPrice(unitPrice)}</h4>
              </Link>
              <button
                className="btn"
                onClick={() => {
                  addToCart({
                    id,
                    productName,
                    imageUrl,
                    description,
                    unitPrice,
                  });
                  setModal(true);
                  setTimeout(() => {
                    setModal(false);
                  }, 1000);
                }}
              >
                Add to Cart
              </button>
            </div>
          );
        }
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  * {
    padding: 5px;
  }
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 10px 30px;
  width: 100%;
  .card {
    background: rgba(217, 206, 63, 0.7);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    .link {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }
  }
  .img-container {
    display: flex;
    height: 150px;
    overflow: hidden;
    padding: 0;
  }
  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
export default ProductsList;
