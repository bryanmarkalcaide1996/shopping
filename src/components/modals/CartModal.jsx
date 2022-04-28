import React from "react";
import styled from "styled-components";

function CartModal(props) {
  return (
    <Wrapper>
      <h4>Item Added to Cart</h4>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: rgba(232, 58, 20);
  color: white;
  border: 2px solid black;
  border-radius: 5px;
  position: fixed;
  top: 50px;
  right: 40px;
`;

export default CartModal;
