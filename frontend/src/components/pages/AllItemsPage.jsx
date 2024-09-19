import { useState, useEffect } from "react";
import axios from "axios";

export default function AllItemsPage() {
  const [models, setModels] = useState([]);
  const [error, setError] = useState("");

  // api call to get all the models
  useEffect(() => {
    const getAllModels = async () => {
      try {
        // headers are set to "application/json" by default in main.jsx

        const response = await axios({
          method: "GET",
          url: "url to get all the models",
        });
        if (response?.data.legnth > 0) {
          setModels(response.data);
        }
      } catch (error) {
        // put error on screen
        console.log(error);
        setError(error);
      }
    };
    // getAllModels();
  }, []);

  return (
    <>
      <div className="headingContainer">
        <h2>All current models in stock</h2>
      </div>
      <div className="allItemsCardContainer">
        {/* pass in api response to generate all the cards */}
      </div>
      {error && (
        <div className="errorContainer">
          <p>{error}</p>
        </div>
      )}
    </>
  );
}
