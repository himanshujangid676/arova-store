// Adds sample products to Arova through the running backend.
// Usage: put this file in the backend folder, keep the backend running, then run: node seed.js

const API = "http://localhost:3002";

const img = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=80`;

const products = [
  { name: "Mechanical Keyboard", description: "RGB mechanical keyboard with blue switches.", price: 2999, category: "Electronics", stock: 25, image: img("photo-1511467687858-23d96c32e4ae") },
  { name: "Wireless Mouse", description: "Ergonomic wireless mouse with long battery life.", price: 899, category: "Electronics", stock: 40, image: img("photo-1527864550417-7fd91fc51a46") },
  { name: "Bluetooth Headphones", description: "Over-ear headphones with deep bass and 30-hour battery.", price: 3499, category: "Electronics", stock: 18, image: img("photo-1505740420928-5e560c06d30e") },
  { name: "Smart Watch", description: "Fitness tracker with heart-rate and sleep monitoring.", price: 4999, category: "Electronics", stock: 15, image: img("photo-1523275335684-37898b6baf30") },
  { name: "Running Shoes", description: "Lightweight breathable running shoes.", price: 2499, category: "Fashion", stock: 30, image: img("photo-1542291026-7eec264c27ff") },
  { name: "Denim Jacket", description: "Classic blue denim jacket, regular fit.", price: 1999, category: "Fashion", stock: 20, image: img("photo-1576995853123-5a10305d93c0") },
  { name: "Backpack", description: "Water-resistant 25L backpack with laptop sleeve.", price: 1299, category: "Fashion", stock: 35, image: img("photo-1553062407-98eeb64c6a62") },
  { name: "Sunglasses", description: "UV-protected polarized sunglasses.", price: 799, category: "Fashion", stock: 50, image: img("photo-1572635196237-14b3f281503f") },
  { name: "Ceramic Coffee Mug", description: "350ml handmade ceramic mug.", price: 349, category: "Home", stock: 60, image: img("photo-1514228742587-6b1558fcf93a") },
  { name: "Desk Lamp", description: "LED desk lamp with adjustable brightness.", price: 1099, category: "Home", stock: 22, image: img("photo-1507473885765-e6ed057f782c") },
  { name: "Notebook Set", description: "Pack of 3 ruled notebooks, 200 pages each.", price: 299, category: "Stationery", stock: 100, image: img("photo-1531346878377-a5be20888e57") },
  { name: "Yoga Mat", description: "Non-slip 6mm yoga mat.", price: 999, category: "Sports", stock: 28, image: img("photo-1601925260368-ae2f83cf8b7f") },
];

(async () => {
  let ok = 0;
  for (const p of products) {
    try {
      const res = await fetch(`${API}/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(p),
      });
      if (res.ok) { ok++; console.log("Added:", p.name); }
      else console.log("Failed:", p.name, res.status, await res.text());
    } catch (e) {
      console.log("Could not reach backend. Is it running on port 3002?", e.message);
      break;
    }
  }
  console.log(`Done. ${ok}/${products.length} products added.`);
})();
