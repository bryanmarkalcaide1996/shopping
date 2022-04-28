import React from "react";
import styled from "styled-components";

function PurchaseModal(props) {
  return (
    <Wrapper>
      <h1>Thank you for you Purchase!</h1>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  position: fixed;
  top: 0;
  width: 100vw;
`;

export default PurchaseModal;
