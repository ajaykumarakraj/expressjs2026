import Product from "../models/product.model.js";

// ➕ Add Product
export const addProduct = async (req, res) => {
  const { name, price, image } = req.body;

  const product = await Product.create({ name, price, image });

  res.json({ msg: "Product Added", product });
};

// 📃 Get All Products
export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};