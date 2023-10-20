import CarItem from "./car-item/CarItem";
import CreateCarForm from "./create-car-form/CreateCarForm";
import { cars as carsData } from "./cars.data";
import { useContext, useEffect, useState } from "react";
import { CarService } from "../../../services/car.service";
import { AuthContext } from "../../../providers/AuthProvider";

function Home() {
  const [cars, setCars] = useState(carsData);

  useEffect(() => {
    const fetchData = async () => {
      const data = await CarService.getAll();

      setCars(data);
    };

    fetchData();

  }, []);

  const {user, setUser} = useContext(AuthContext)

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
