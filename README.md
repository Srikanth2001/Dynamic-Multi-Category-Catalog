# 🚀 Dynamic Multi-Category Catalog

A modern React-based product catalog application that dynamically groups items by category and provides detailed views using client-side routing.

---

## 🔗 Live Demo
👉 https://dynamic-multi-category-catalog-ccbncub3j-srikanth2001s-projects.vercel.app/

## 📦 GitHub Repository
👉 https://github.com/Srikanth2001/Dynamic-Multi-Category-Catalog

---

## ✨ Features

- 📂 **Category-Based Grouping**  
  Items are dynamically grouped and displayed based on categories.

- 🔍 **Dynamic Routing (React Router)**  
  Each product has its own detail page (`/item/:name`).

- 🧾 **Dynamic Properties Rendering**  
  Product attributes are rendered dynamically from JSON data.

- 🎨 **Modern UI Design**  
  Dark theme with clean layout and hover effects.

- 📱 **Responsive Layout**  
  Works smoothly across desktop and mobile devices.

- 🔄 **Client-Side Routing Fix (Production Ready)**  
  Configured Vercel rewrites to prevent 404 errors on refresh.

---

## 🛠 Tech Stack

- ⚛️ React (Vite)
- 🔀 React Router DOM
- 🎨 CSS (Custom styling)
- ☁️ Vercel (Deployment)

---

## 📁 Project Structure


src/
├── pages/
│ ├── Home.jsx # Displays categories & products
│ ├── Detail.jsx # Displays product details
│
├── App.jsx # Routing configuration
├── data.json # Product data
├── main.jsx # Entry point
└── styles.css # Styling


---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/Srikanth2001/Dynamic-Multi-Category-Catalog.git
cd Dynamic-Multi-Category-Catalog

Install dependencies:

npm install

Run the development server:

npm run dev

Build for production:

npm run build
🚀 Deployment

Deployed on Vercel.

To handle React Router refresh issues, the following configuration is used:

{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
🧠 Key Learnings
Handling dynamic routing in React
Managing client-side navigation vs server routing
Structuring scalable React components
Fixing Vercel deployment issues (404 on refresh)
🔮 Future Improvements
🔍 Search and filtering
📄 Pagination / Lazy loading
🌐 API integration instead of static JSON
❤️ Favorites / Wishlist feature
👤 Author

Srikanth Dongre

GitHub: https://github.com/Srikanth2001
