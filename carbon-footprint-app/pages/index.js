// pages/index.js
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [vehicle, setVehicle] = useState("SmallPetrolCar");
  const [distance, setDistance] = useState(null);
  const [response, setResponse] = useState(null);

  const calculateFootprint = async () => {
    try {
      const res = await axios.get("/api/calculate/", {
        params: { vehicle, distance },
      });
      const { data } = res;
      setResponse(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col md:px-12 px-0 bg-background font-raleway items-center min-h-screen">
      <h1 className="text-6xl font-bold text-active mt-20">Carbon Footprint</h1>
      <h2 className="text-primary text-2xl font-light mt-5">Calculate the Carbon Footprint of your travel.</h2>
      <form
        className="sm:mx-auto mt-20 md:max-w-3xl justify-center flex flex-col w-full sm:flex"
        onSubmit={(e) => {
          calculateFootprint();
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        {/* Form fields for vehicle and distance */}
        {/* Button to trigger the calculation */}
      </form>
      {response && (
        <div className="mt-10">
          <span className="text-2xl text-primary">
            The carbon footprint is <span className="font-bold">{response.carbonEquivalent}</span> KGs
          </span>
        </div>
      )}
    </div>
  );
}
