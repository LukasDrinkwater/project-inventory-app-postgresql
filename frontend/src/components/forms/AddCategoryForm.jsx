import { useState, useEffect } from "react";
import axios from "axios";

export default function AddCategoryForm() {
  const [newCategory, setNewCategory] = useState("");
  const [newVehicleType, setNewVehicleType] = useState("");

  // useState for showing successful create
  const [created, setCreated] = useState(null);
  const [categories, setCategories] = useState([]);
  const [triggerApi, setTriggerApi] = useState(false);

  useEffect(() => {
    const getCategoryList = async () => {
      try {
        const response = await axios({
          url: "/category/all-categories",
        });

        setCategories(response.data);
      } catch (error) {
        console.log("Error getting list of categories", error);
      }
    };

    getCategoryList();
  }, [triggerApi]);

  useEffect(() => {
    setTimeout(() => {
      if (created !== null) {
        setCreated(null);
      }
    }, 3000);
  }, [created]);

  const handleCategoryFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios({
        method: "POST",
        url: "/category/create",
        data: { newCategory, newVehicleType },
      });
      if (response.status === 200) {
        setCreated(true);
        setNewCategory("");
        setNewVehicleType("");
        setTriggerApi((prevState) => !prevState);
      }
      // do something to show its sucessfull?
    } catch (error) {
      console.log("Error when adding new category:", error);
    }
  };

  return (
    <>
      <div className="addCategoryContainer">
        <form onSubmit={handleCategoryFormSubmit}>
          <div className="formGroup">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              name="category"
              id="category"
              placeholder=""
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="vehicleType">Vehicle type:</label>
            <select
              name="vehicleType"
              id="vehicleType"
              onChange={(e) => setNewVehicleType(e.target.value)}
            >
              <option value="">Choose a vehicle type</option>
              <option value="car">Car</option>
              <option value="motorbike">Motorbike</option>
            </select>
          </div>
          <div className="formGroup">
            <button type="submit">Add category</button>
          </div>
        </form>
      </div>

      <div className="currentCategories">
        <p>Categories here</p>
        {categories.length > 0 ? (
          <ul>
            {categories.map((category) => (
              <li key={category.id}>
                {category.category} {category.vehicletype}
              </li>
            ))}
          </ul>
        ) : (
          <p>No categories have been added.</p>
        )}
      </div>
    </>
  );
}
