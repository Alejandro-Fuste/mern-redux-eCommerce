import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import ProductItem from "../ProductItem";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { QUERY_PRODUCTS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import spinner from "../../assets/spinner.gif";

function ProductList() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
      if (data) {
          dispatch({
              type: UPDATE_PRODUCTS,
              products: data.products
          });
          data.products.forEach((product)=>{
              idbPromise('products', 'put', product)
          })
      } else if () {}
  }, [data, loading, dispatch]);

  function filterProducts() {}

  return <div></div>;
}

export default ProductList;
