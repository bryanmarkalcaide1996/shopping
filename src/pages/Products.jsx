import React, { useEffect } from "react";
import ProductsList from "../components/ProductsList";
import Loading from "../components/Loading";
import { useProductsContext } from "../context/products_context";

function Products() {
  const { isLoading, loadingState } = useProductsContext();

  useEffect(() => {
    loadingState();
  }, []);

  return <div>{isLoading ? <Loading /> : <ProductsList />}</div>;
}

export default Products;
