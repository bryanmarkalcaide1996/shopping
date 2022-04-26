import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Product from "../components/Product";
import { useProductsContext } from "../context/products_context";

function SingleProduct() {
  const { id } = useParams();
  const { fetchSingleProduct, singleProduct, isLoading, loadingState } =
    useProductsContext();

  useEffect(() => {
    loadingState();
    fetchSingleProduct(id);
  }, []);

  return <>{isLoading ? <Loading /> : <Product {...singleProduct} />}</>;
}

export default SingleProduct;
