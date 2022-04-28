import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";

function Navigation() {
  const { clearSingleProduct } = useProductsContext();
  return (
    <Wrapper>
      <Link to="/">
        <h3> OnlineStore</h3>
      </Link>
      <ul>
        <li>
          <Link to="/products" onClick={clearSingleProduct}>
            Products
          </Link>
        </li>
        <li>
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
  }
`;
