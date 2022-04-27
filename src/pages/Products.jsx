import React, { useEffect } from "react";
import ProductsList from "../components/ProductsList";
import Loading from "../components/Loading";
import { useProductsContext } from "../context/products_context";
import styled from "styled-components";
import Filter from "../components/Filter";

function Products() {
  const { isLoading, loadingState } = useProductsContext();

  useEffect(() => {
    loadingState();
  }, []);

  return (
    <Wrapper>
      <Filter />
      {isLoading ? <Loading /> : <ProductsList />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;
export default Products;
