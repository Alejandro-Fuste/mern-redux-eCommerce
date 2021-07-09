import { gql } from "@apollo/client";

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql``;

export const QUERY_ALL_PRODUCTS = gql``;

export const QUERY_CATEGORIES = gql``;

export const QUERY_USER = gql``;
