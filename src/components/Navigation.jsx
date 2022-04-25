import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navigation() {
  return (
    <Wrapper>
      <Link to="/">
        <h3> OnlineStore</h3>
      </Link>
      <ul>
        <li>
          <Link to="/products">Products</Link>
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
  background: red;
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  ul {
    display: flex;
  }
  li {
    margin-left: 30px;
  }
`;
