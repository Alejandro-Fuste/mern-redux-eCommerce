import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "../../utils/actions";
import { QUERY_CATEGORIES } from "../../utils/queries";
import helpers from "../../utils/helpers";

import Button from "../Button";

const { idbPromise } = helpers;

function CategoryMenu() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise("categories", "put", category);
      });
    } else if (!loading) {
      idbPromise("categories", "get").then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map((item) => (
        <Button
          key={item._id}
          name={item.name}
          type="submit"
          id="catergoryButton"
          onClick={() => {
            handleClick(item._id);
          }}
        />

        // <button
        //   key={item._id}
        //   onClick={() => {
        //     handleClick(item._id);
        //   }}
        // >
        //   {item.name}
        // </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
