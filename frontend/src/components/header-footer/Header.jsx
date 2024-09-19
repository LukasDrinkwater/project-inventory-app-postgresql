import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="headerContainer">
        <h2>Models</h2>
        <NavLink to="/all-items">
          <div className="headerAllItems">
            <p>All Items</p>
          </div>
        </NavLink>
        <NavLink to="/categories">
          <div className="headerCategories">
            <p>Categories</p>
          </div>
        </NavLink>
        <NavLink to="/basket">
          <div className="headerBasket">
            <p>Basket</p>
          </div>
        </NavLink>

        <div className="addNew">
          <h2>Add New</h2>
          <NavLink to="/model/create">
            <p>Model</p>
          </NavLink>
          <NavLink to="/manufacturer/create">
            <p>Manufacturer</p>
          </NavLink>
          <NavLink to="/category/create">
            <p>Category</p>
          </NavLink>
        </div>
      </div>
    </>
  );
}
