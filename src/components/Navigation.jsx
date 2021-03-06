import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { useProductsContext } from "../context/products_context";

function Navigation() {
  const { clearSingleProduct } = useProductsContext();
  const { totalQty, cart } = useCartContext();
  return (
    <Wrapper>
      <Link to="/">
        <h3> OnlineStore</h3>
      </Link>
      <ul>
        <li>
          <Link to="/" onClick={clearSingleProduct}>
            Products
          </Link>
        </li>
        <li>
          {cart.length !== 0 && <span>{totalQty}</span>}
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </Wrapper>
  );
}

export default Navigation;

const Wrapper = styled.nav`
  align-items: center;
  background: #630606;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  position: sticky;
  top: 0;
  z-index: 2;
  ul {
    display: flex;
  }
  li {
    margin-left: 30px;
    span {
      background: red;
      border-radius: 50%;
      color: white;
      font-size: 0.8rem;
      margin-right: 5px;
      padding: 2px 5px;
      text-align: center;
    }
  }
`;
