# MyStore – Angular E-commerce Frontend

This is a clean, responsive e-commerce frontend built with **Angular** and **TypeScript** as my final project for the Full Stack JavaScript Developer Nanodegree. It simulates a real online store where users can browse products, add them to a cart, and complete checkout — all in a single-page application.

No backend needed: product data is loaded from a local JSON file, and the shopping cart lives entirely in memory using Angular services.

---

## What You Can Do

- **Browse products** on the main page (with images, names, and prices)
- **View product details** on a dedicated page
- **Add items to your cart**, update quantities, or remove them anytime
- **Fill out a checkout form** (with basic validation)
- See a **confirmation screen** after placing an order

Everything works offline, and the UI adapts nicely to phones, tablets, and desktops.

---

## Built With

- **Framework**: [Angular](https://angular.io) (v20+)
- **Language**: TypeScript
- **Styling**: Plain CSS (no frameworks — kept it simple!)
- **Testing**: Jasmine + Karma (unit tests included)
- **Tooling**: Angular CLI, Node.js, npm
- **Data**: Static `assets/data.json` (easy to swap with a real API later)

---

## How to Run It

### 1. Clone the repo
```bash
git clone https://github.com/mahdi-shouib/Storefront-Frontend.git
cd Storefront-Frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the dev server
```bash
npm start
```
Then open your browser at → [http://localhost:4200](http://localhost:4200)

Changes you make will auto-reload — perfect for development!

---

## Going Live (Production)

To build a production-ready version:

```bash
npm run build
node dist/Storefront-Frontend/server/server.mjs
```

Your app will be served at: [http://localhost:4000](http://localhost:4000)  
(Yes, there’s a tiny Express server included just to serve the static files!)

---

## Running Tests

Want to check if everything still works after your changes?

```bash
npm test
```

Tests cover core components like the cart service and product display logic.

---

## Project Organization

I structured the app to be easy to read and extend:

```
src/
├── app/
│   ├── components/     → Reusable bits (like footer, icons)
│   ├── pages/          → Full screens (product list, cart, etc.)
│   ├── models/         → Data shapes (Product, CartItem)
│   ├── services/       → Shared logic (CartService, ProductService)
│   └── app-routing.module.ts
├── assets/
│   └── data.json       → Mock product catalog
```

This keeps things tidy as the app grows.

---

## Conclusion

This project demonstrates a complete, production-ready frontend implementation of an e-commerce application using modern Angular practices. It fulfills all functional and architectural requirements of a real-world SPA, including dynamic data rendering, user interaction handling, form validation, and state management — all while maintaining clean, scalable, and testable code.

Whether used as a learning artifact, portfolio piece, or foundation for future development, **Storefront Frontend** stands as a testament to robust frontend engineering principles and attention to user experience.

Thank you for reviewing this project.
