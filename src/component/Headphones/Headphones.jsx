import React, { useState, useEffect } from "react";
import Headphone from "../Headphone/Headphone";

const Headphones = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/headphone");
        const jsonData = await response.json();
        // Shuffle the data randomly
        const shuffledData = shuffle(jsonData);
        setData(shuffledData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
    console.log(data);
  }, []);

  // Function to shuffle array randomly
  const shuffle = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.slice(0, 10).map((products) => (
            <Headphone key={products.name} products={products}></Headphone>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Headphones;
