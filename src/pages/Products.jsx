import React from "react";
import ProductsList from "../components/ProductsList";
import Loading from "../components/Loading";
import { useProductsContext } from "../context/products_context";

function Products() {
  const { isLoading } = useProductsContext();
  return <div>{isLoading ? <Loading /> : <ProductsList />}</div>;
}

export default Products;
