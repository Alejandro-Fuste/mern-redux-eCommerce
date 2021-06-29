const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  // Drop previously inserted categories so that new ones can be inserted
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Food" },
    { name: "Household Supplies" },
    { name: "Electronics" },
    { name: "Books" },
    { name: "Toys" },
  ]);

  console.log("categories seeded");

  // Drop previously inserted products so that new ones can be inserted

  await Product.deleteMany();

  const products = await Product.insertMany([]);

  console.log("products seeded");

  // Drop previously inserted users so that new ones can be inserted

  await User.deleteMany();

  await User.create({});

  await User.create({});

  console.log("users seeded");

  process.exit();
});
