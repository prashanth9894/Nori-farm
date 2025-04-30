import React, { useState } from 'react';
import './App.css';

function App() {
  const [cropId, setCropId] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const fetchProduct = async () => {
    try {
      const res = await fetch(`http://localhost:3001/getProduct/${encodeURIComponent(cropId)}`);
      if (!res.ok) throw new Error('Product not found');
      const data = await res.json();
      setResult(data);
      setError('');
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div className="App">
      <h1>Nori Farm Product Finder</h1>
      <input
        type="text"
        placeholder="Enter Crop ID (e.g. Tomato #124)"
        value={cropId}
        onChange={(e) => setCropId(e.target.value)}
      />
      <button onClick={fetchProduct}>Find Product</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result && (
        <div className="product">
          <h2>{result.matchedProduct.title}</h2>
          <img src={result.matchedProduct.image} alt="product" width="200" />
          <p>Price: {result.matchedProduct.price}</p>
          <a href={result.matchedProduct.buyLink} target="_blank" rel="noopener noreferrer">Buy Now</a>
        </div>
      )}
    </div>
  );
}

export default App;