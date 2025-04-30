const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

const products = [
  {
    crop: "Tomato #124",
    matchedProduct: {
      title: "Fresh Organic Tomato Box",
      price: "19,000 KRW",
      image: "https://your-mockshop.com/images/tomato.jpg",
      buyLink: "https://your-mockshop.com/product/123"
    }
  },
  {
    crop: "Strawberry #205",
    matchedProduct: {
      title: "Juicy Strawberries Pack",
      price: "22,000 KRW",
      image: "https://your-mockshop.com/images/strawberry.jpg",
      buyLink: "https://your-mockshop.com/product/205"
    }
  }
];

app.get('/getProduct/:cropId', (req, res) => {
  const cropId = req.params.cropId;
  const product = products.find(p => p.crop.toLowerCase() === cropId.toLowerCase());
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
