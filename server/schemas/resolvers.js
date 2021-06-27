const { AuthenticationError } = require("apollo-server-express");
const { User, Product, Category, Order } = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  // Resolvers for any Queries

  Query: {
    categories: async () => {
      return await Category.find();
    },
    products: async (parent, { catergory, name }) => {
      const params = {};

      if (catergory) {
        params.catergory = catergory;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Product.find(params).populate("catergory");
    },

    product: async () => {},

    user: async () => {},

    order: async () => {},

    checkout: async () => {},
  },
};

module.exports = resolvers;
