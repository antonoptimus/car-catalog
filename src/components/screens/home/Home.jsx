import CarItem from "./car-item/CarItem";
import CreateCarForm from "./create-car-form/CreateCarForm";
import { cars as carsData } from "./cars.data";
import { useEffect, useState } from "react";

function Home() {
  const [cars, setCars] = useState(carsData);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4200/cars");
      const data = await response.json();

      setCars(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Cars catalog</h1>
      <CreateCarForm setCars={setCars} />
      <div>
        {cars.length ? (
          cars.map((car) => <CarItem key={car.id} car={car} />)
        ) : (
          <p>There is no cars</p>
        )}
      </div>
    </>
  );
}

export default Home;
