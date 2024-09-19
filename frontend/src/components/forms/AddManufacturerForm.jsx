import { useState, useEffect } from "react";
import axios from "axios";

export default function AddManufacturerForm() {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");

  const [created, setCreated] = useState(null);
  const [manufacturers, setManufacturers] = useState([]);
  const [error, setError] = useState("");
  const [triggerApi, setTriggerApi] = useState(false);

  useEffect(() => {
    const getManufacturerList = async () => {
      try {
        const response = await axios({
          url: "/manufacturer/all-manufacturers",
        });

        setManufacturers(response.data);
      } catch (error) {
        console.log("Error getting all manufacturers", error);
        setCreated(false);
      }
    };

    getManufacturerList();
  }, [triggerApi]);

  useEffect(() => {
    setTimeout(() => {
      if (created !== null) {
        setCountry(null);
      }
    }, 3000);
  }, [created]);

  const handleManufacturerFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: "/manufacturer/create",
        data: {
          name,
          country,
        },
      });
      if (response.status === 200) {
        setCreated(true);
        setName("");
        setCountry("");
        setTriggerApi((prevState) => !prevState);
      }
    } catch (error) {
      console.log("Error submitting new manufacturer", error);
      setError(error);
      setCreated(false);
    }
  };

  return (
    <>
      <div className="addManufacturerContainer">
        <form onSubmit={handleManufacturerFormSubmit}>
          <div className="formGroup">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              name="country"
              id="country"
              placeholder=""
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="formGroup">
            <button type="submit">Add manufacturer</button>
          </div>
        </form>

        <div className="currentCategories">
          <p>Current Manufacturers:</p>
          {manufacturers.length > 0 ? (
            <ul>
              {manufacturers.map((manufacturer) => (
                <li key={manufacturer.id}>
                  {manufacturer.name} {manufacturer.country}
                </li>
              ))}
            </ul>
          ) : (
            <p>No Manufacturers have been added.</p>
          )}
        </div>
      </div>
    </>
  );
}
