# XrisP - Nori Farm Integration (Prototype)

This project is a prototype for mapping a virtual crop from the Nori Farm platform to a real-world product using a simple web-based interface and mock product data.

## Features
- Accepts crop input (e.g., "Tomato #124")
- Fetches and displays matched product info from a mock dataset
- Returns data in JSON format or a user-friendly display via React

## Tech Stack
- Backend: Node.js + Express
- Frontend: React
- Mock Data: In-memory JavaScript array

## How to Run

### Backend
```bash
cd server
npm install
node server.js
```

### Frontend
```bash
cd client
npm install
npm start
```

Ensure the backend runs on port `3001` and the frontend on `3000`. The frontend sends requests to `http://localhost:3001/getProduct/:cropId`

## Example Input & Output
**Input:** Tomato #124  
**Output:**
```json
{
  "crop": "Tomato #124",
  "matchedProduct": {
    "title": "Fresh Organic Tomato Box",
    "price": "19,000 KRW",
    "image": "https://your-mockshop.com/images/tomato.jpg",
    "buyLink": "https://your-mockshop.com/product/123"
  }
}
```

## AI Usage
### Tools Used:
- ChatGPT (GPT-4): Assisted in drafting code structure, input/output JSON format, and frontend logic.

### Prompts Used:
- "Build an Express.js API to fetch mock product data using crop name."
- "Create a React frontend to display a product from a JSON response."

## Future Extensions
- Integrate real e-commerce APIs (e.g., Shopify or Cafe24)
- Store data in a database
- User authentication
- Dynamic NFT integration via Web3 libraries

## Limitations
- Static mock data only
- No real API or blockchain integration
- Limited error handling and UI styling