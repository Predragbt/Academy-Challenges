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
  const [filteredBikes, setFilteredBikes] = useState<BikeData[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://challenges.brainster.tech/ajax_data/data.json"
        );
        const data = await response.json();

        setBikeData(data.products);
        setFilteredBikes(data.products); // Initialize with all bikes
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleFilterClick = (filterType: string) => {
    setActiveFilter(filterType); // Set the clicked filter as active

    if (filterType === "all") {
      setFilteredBikes(bikeData); // Show all bikes
    } else {
      setFilteredBikes(
        bikeData.filter(
          (bike) =>
            bike.gender.toLowerCase() === filterType.toLowerCase() ||
            bike.brand.toLowerCase() === filterType.toLowerCase()
        )
      );
    }
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
                count={bikeData.length}
                onClick={() => handleFilterClick("all")}
                listColor={activeFilter === "all" ? "text-warning" : ""}
                badgeColor={
                  activeFilter === "all" ? "bg-warning" : "bg-secondary"
                }
              />
            </ul>
          </ListGroup.Item>

          <ListGroup.Item className="px-0">
            <p className="fw-bold">Gender</p>
            <ul className="list-unstyled">
              <EachFilter
                label="Male"
                count={
                  bikeData.filter(
                    (bike) => bike.gender.toLowerCase() === "male"
                  ).length
                }
                onClick={() => handleFilterClick("male")}
                listColor={activeFilter === "male" ? "text-warning" : ""}
                badgeColor={
                  activeFilter === "male" ? "bg-warning" : "bg-secondary"
                }
              />
              <EachFilter
                label="Female"
                count={
                  bikeData.filter(
                    (bike) => bike.gender.toLowerCase() === "female"
                  ).length
                }
                onClick={() => handleFilterClick("female")}
                listColor={activeFilter === "female" ? "text-warning" : ""}
                badgeColor={
                  activeFilter === "female" ? "bg-warning" : "bg-secondary"
                }
              />
            </ul>
          </ListGroup.Item>

          <ListGroup.Item className="px-0">
            <p className="fw-bold">Brand</p>
            <ul className="list-unstyled text-uppercase">
              <EachFilter
                label="Le grand bikes"
                count={
                  bikeData.filter(
                    (bike) => bike.brand.toLowerCase() === "le grand bikes"
                  ).length
                }
                onClick={() => handleFilterClick("le grand bikes")}
                listColor={
                  activeFilter === "le grand bikes" ? "text-warning" : ""
                }
                badgeColor={
                  activeFilter === "le grand bikes"
                    ? "bg-warning"
                    : "bg-secondary"
                }
              />
              <EachFilter
                label="Kross"
                count={
                  bikeData.filter(
                    (bike) => bike.brand.toLowerCase() === "kross"
                  ).length
                }
                onClick={() => handleFilterClick("kross")}
                listColor={activeFilter === "kross" ? "text-warning" : ""}
                badgeColor={
                  activeFilter === "kross" ? "bg-warning" : "bg-secondary"
                }
              />
              <EachFilter
                label="Explorer"
                count={
                  bikeData.filter(
                    (bike) => bike.brand.toLowerCase() === "explorer"
                  ).length
                }
                onClick={() => handleFilterClick("explorer")}
                listColor={activeFilter === "explorer" ? "text-warning" : ""}
                badgeColor={
                  activeFilter === "explorer" ? "bg-warning" : "bg-secondary"
                }
              />
              <EachFilter
                label="Visitor"
                count={
                  bikeData.filter(
                    (bike) => bike.brand.toLowerCase() === "visitor"
                  ).length
                }
                onClick={() => handleFilterClick("visitor")}
                listColor={activeFilter === "visitor" ? "text-warning" : ""}
                badgeColor={
                  activeFilter === "visitor" ? "bg-warning" : "bg-secondary"
                }
              />
              <EachFilter
                label="Pony"
                count={
                  bikeData.filter((bike) => bike.brand.toLowerCase() === "pony")
                    .length
                }
                onClick={() => handleFilterClick("pony")}
                listColor={activeFilter === "pony" ? "text-warning" : ""}
                badgeColor={
                  activeFilter === "pony" ? "bg-warning" : "bg-secondary"
                }
              />
              <EachFilter
                label="Force"
                count={
                  bikeData.filter(
                    (bike) => bike.brand.toLowerCase() === "force"
                  ).length
                }
                onClick={() => handleFilterClick("force")}
                listColor={activeFilter === "force" ? "text-warning" : ""}
                badgeColor={
                  activeFilter === "force" ? "bg-warning" : "bg-secondary"
                }
              />
              <EachFilter
                label="E-Bikes"
                count={
                  bikeData.filter(
                    (bike) => bike.brand.toLowerCase() === "e-bikes"
                  ).length
                }
                onClick={() => handleFilterClick("e-bikes")}
                listColor={activeFilter === "e-bikes" ? "text-warning" : ""}
                badgeColor={
                  activeFilter === "e-bikes" ? "bg-warning" : "bg-secondary"
                }
              />
              <EachFilter
                label="Ideal"
                count={
                  bikeData.filter(
                    (bike) => bike.brand.toLowerCase() === "ideal"
                  ).length
                }
                onClick={() => handleFilterClick("ideal")}
                listColor={activeFilter === "ideal" ? "text-warning" : ""}
                badgeColor={
                  activeFilter === "ideal" ? "bg-warning" : "bg-secondary"
                }
              />
            </ul>
          </ListGroup.Item>
        </ListGroup>
      </div>

      <div className="container">
        <div className="row">
          {filteredBikes.map((bike, index) => (
            <div key={index} className="col-md-4 p-0 mb-4">
              <Card
                image={bike.image}
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
