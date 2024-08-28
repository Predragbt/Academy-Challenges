import { ListGroup } from "react-bootstrap";
import { EachFilter } from "./EachFilter";
import { Card } from "./Card";
import { useEffect, useState } from "react";

interface BikeData {
  name: string;
  price: number;
  gender: string;
  brand: string;
  image: string;
}

export const Filters = () => {
  const [bikeData, setBikeData] = useState<BikeData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://challenges.brainster.tech/ajax_data/data.json"
        );
        const data = await response.json();

        setBikeData(data.products);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleFilterClick = (filterType: string) => {
    console.log(`Filter clicked: ${filterType}`);
    // Implement filtering logic here
  };

  return (
    <div className="mx-4 my-5 d-flex">
      <div className="w-25 me-5">
        <h1>Bikes</h1>
        <p className="fw-bold fs-5">Filter by:</p>

        <ListGroup variant="flush">
          <ListGroup.Item className="px-0">
            <ul className="list-unstyled">
              <EachFilter
                label="Show All"
                count={10}
                onClick={() => handleFilterClick("all")}
              />
            </ul>
          </ListGroup.Item>

          <ListGroup.Item className="px-0">
            <p className="fw-bold">Gender</p>
            <ul className="list-unstyled">
              <EachFilter
                label="Male"
                count={9}
                onClick={() => handleFilterClick("male")}
              />
              <EachFilter
                label="Female"
                count={9}
                onClick={() => handleFilterClick("female")}
              />
            </ul>
          </ListGroup.Item>

          <ListGroup.Item className="px-0">
            <p className="fw-bold">Brand</p>
            <ul className="list-unstyled text-uppercase">
              <EachFilter
                label="Le grand bikes"
                count={7}
                onClick={() => handleFilterClick("le-grand-bikes")}
              />
              <EachFilter
                label="Kross"
                count={15}
                onClick={() => handleFilterClick("kross")}
              />
              <EachFilter
                label="Explorer"
                count={9}
                onClick={() => handleFilterClick("explorer")}
              />
              <EachFilter
                label="Visitor"
                count={9}
                onClick={() => handleFilterClick("visitor")}
              />
              <EachFilter
                label="Pony"
                count={9}
                onClick={() => handleFilterClick("pony")}
              />
              <EachFilter
                label="Force"
                count={9}
                onClick={() => handleFilterClick("force")}
              />
              <EachFilter
                label="E-Bikes"
                count={16}
                onClick={() => handleFilterClick("e-bikes")}
              />
              <EachFilter
                label="Ideal"
                count={16}
                onClick={() => handleFilterClick("ideal")}
              />
            </ul>
          </ListGroup.Item>
        </ListGroup>
      </div>

      <div className="container">
        <div className="row ">
          {bikeData.map((bike, index) => (
            <div key={index} className="col-md-4 p-0 mb-4">
              <Card
                image={`../img/${bike.image}.png`}
                name={bike.name}
                price={bike.price}
                gender={bike.gender}
                brand={bike.brand}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
