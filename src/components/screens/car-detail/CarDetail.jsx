import { useParams } from "react-router";
import { CarService } from '../../../services/car.service'
import CarItem from './../home/car-item/CarItem';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CarDetail = () => {
   const { id } = useParams()
   const [car, setCar] = useState({})

   useEffect(() => {
      if (!id) return

      const fetchData = async () => {
        const data = await CarService.getById(id);
  
        setCar(data);
      };
  
      fetchData();
    }, [id]);  

   return <div>
      <Link to='/'>Back</Link>
      <CarItem car={car}/>{id}
      </div>
}

export default CarDetail;