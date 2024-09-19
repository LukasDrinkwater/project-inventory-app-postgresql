import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";

// Import Layout component
import Layout from "./components/layout/Layout";
import Header from "./components/header-footer/Header";

// Import component pages
import AllItemsPage from "./components/pages/AllItemsPage";
import CategoriesPage from "./components/pages/CategoriesPage";
import BasketPage from "./components/pages/BasketPage";

// Add pages
import AddModelPage from "./components/pages/AddModelPage";
import AddCategoryPage from "./components/pages/AddCategoryPage";
import AddManufacturerPage from "./components/pages/AddManufacturerPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/all-items" element={<AllItemsPage />} />
            <Route path="/basket" element={<BasketPage />} />

            {/* CATEGORIES */}
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/category/create" element={<AddCategoryPage />} />

            {/* MODELS */}
            <Route path="/model/create" element={<AddModelPage />} />

            {/* MANUFACTURER */}
            <Route
              path="/manufacturer/create"
              element={<AddManufacturerPage />}
            />

            {/* <Route path="" element={}/> */}
            {/* <Route path="" element={}/> */}
          </Route>
        </Routes>

        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default App;
