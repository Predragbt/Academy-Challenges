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

  // Collect unique genders and brands from bike data
  // Using Set to ensure only unique values and converting back to an array
  const uniqueGenders = Array.from(
    new Set(bikeData.map((bike) => bike.gender.toLowerCase()))
  );
  const uniqueBrands = Array.from(
    new Set(bikeData.map((bike) => bike.brand.toLowerCase()))
  );

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
    setActiveFilter(filterType);

    if (filterType === "all") {
      setFilteredBikes(bikeData); // Reset to show all bikes
    } else {
      // Filter by gender or brand depending on the filter type clicked
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
              {uniqueGenders.map((gender) => (
                <EachFilter
                  key={gender}
                  label={gender.charAt(0).toUpperCase() + gender.slice(1)} // Capitalizing first letter of the gender
                  count={
                    bikeData.filter(
                      (bike) => bike.gender.toLowerCase() === gender
                    ).length
                  }
                  onClick={() => handleFilterClick(gender)}
                  listColor={activeFilter === gender ? "text-warning" : ""}
                  badgeColor={
                    activeFilter === gender ? "bg-warning" : "bg-secondary"
                  }
                />
              ))}
            </ul>
          </ListGroup.Item>

          <ListGroup.Item className="px-0">
            <p className="fw-bold">Brand</p>
            <ul className="list-unstyled text-uppercase">
              {uniqueBrands.map((brand) => (
                <EachFilter
                  key={brand}
                  label={brand}
                  count={
                    bikeData.filter(
                      (bike) => bike.brand.toLowerCase() === brand
                    ).length
                  }
                  onClick={() => handleFilterClick(brand)}
                  listColor={activeFilter === brand ? "text-warning" : ""}
                  badgeColor={
                    activeFilter === brand ? "bg-warning" : "bg-secondary"
                  }
                />
              ))}
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
