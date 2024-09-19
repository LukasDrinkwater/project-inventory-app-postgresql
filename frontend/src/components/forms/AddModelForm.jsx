import axios from "axios";
import { useEffect, useState } from "react";

export default function AddModelForm() {
  const [allManufacturers, setAllManufacturers] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [isCar, setIsCar] = useState(true);

  // Form inputs
  const [modelName, setModelName] = useState("");
  const [manufacturer, setmanufacturer] = useState("");
  const [category, setCategory] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // promise all to reduce duplicate code.
        // destructure the array into the 2 variables.
        const [manufacturersResponse, categoriesResponse] = await Promise.all([
          axios.get("/manufacturer/all-manufacturers"),
          axios.get("/category/all-categories"),
        ]);

        console.log(categoriesResponse.data);
        setAllManufacturers(manufacturersResponse.data);
        setAllCategories(categoriesResponse.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const handleAddModelFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios({
        method: "POST",
        url: "/model/create",
        data: {
          manufacturer,
          modelName,
          year,
          description,
          price,
          category,
        },
      });

      if (response.status === 200) {
        setmanufacturer("");
        setModelName("");
        setYear("");
        setDescription("");
        setPrice("");
        setCategory("");
      }
    } catch (error) {
      console.log("Error submitting model", error);
    }
  };

  return (
    <>
      <div className="addModelContainer">
        <form onSubmit={handleAddModelFormSubmit}>
          <div className="formGroup">
            <fieldset>
              <div>
                <input
                  type="radio"
                  id="car"
                  name="radio"
                  value="car"
                  checked={isCar === true}
                  onChange={() => setIsCar(true)}
                />
                <label htmlFor="car">Car</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="motorbike"
                  name="radio"
                  value="motorbike"
                  checked={isCar === false}
                  onChange={() => setIsCar(false)}
                />
                <label htmlFor="motorbike">Motorbike</label>
              </div>
            </fieldset>
          </div>

          <div className="formGroup">
            {/* select manufacturer */}
            <label htmlFor="manufacturer">Select Manufacturer:</label>
            <select
              name="manufacturer"
              id="manufacturer"
              onChange={(e) => setmanufacturer(e.target.value)}
            >
              {/* map through manufatuers */}
              {allManufacturers.map((manufacturer) => {
                return (
                  <option key={manufacturer.id} value={manufacturer.id}>
                    {manufacturer.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="formGroup">
            {/* map through categories */}
            <label htmlFor="category">Select Category:</label>
            <select
              name="category"
              id="category"
              onChange={(e) => setCategory(e.target.value)}
            >
              {/* map through manufatuers */}
              {allCategories.map((category) => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="formGroup">
            <label htmlFor="modelName">Model Name:</label>
            <input
              type="text"
              name="modelName"
              id="modelName"
              placeholder=""
              value={modelName}
              onChange={(e) => setModelName(e.target.value)}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="year">Year:</label>
            <input
              type="number"
              name="year"
              id="year"
              placeholder=""
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>

          <div className="formGroup">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              name="description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              name="price"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </form>
      </div>
    </>
  );
}
