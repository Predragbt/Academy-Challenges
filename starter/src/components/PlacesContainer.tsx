import { Component } from "react";
import { Place } from "./Place";

interface State {
  places: Array<{
    id: number;
    place: string;
    desc: string;
    img: string;
  }>;
}

export class PlacesContainer extends Component<{}, State> {
  constructor() {
    super({});

    this.state = {
      places: [],
    };
  }

  async componentDidMount() {
    try {
      const response = (await fetch(
        `http://localhost:5001/places`
      )) as Response;

      const data = await response.json();
      this.setState({ places: data });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <>
        <div className="PlacesContainer">
          {this.state.places.map((place) => (
            <Place
              key={place.id}
              id={place.id}
              place={place.place}
              desc={place.desc}
              img={place.img}
            />
          ))}
        </div>
      </>
    );
  }
}
