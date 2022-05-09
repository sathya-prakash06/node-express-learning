const express = require("express");
const data = require("./data");
const app = express();

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

app.get("/api/products", (req, res) => {
  res.json(data.products);
});

app.get("/api/products/:id", (req, res) => {
  const id = +req.params.id;

  const product = data.products.find((product) => product.id === id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
});

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let sortedProdcuts = [...data.products];

  if (search) {
    sortedProdcuts = sortedProdcuts.filter((product) => {
      return product.name.toLowerCase().includes(search.toLowerCase());
    });
  }

  if (limit) {
    sortedProdcuts = sortedProdcuts.slice(0, limit);
  }
  if (!sortedProdcuts.length) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json({
    success: true,
    products: sortedProdcuts,
  });
});

app.listen(4500, () => {
  console.log("Server is running on port 4500");
});
