import { Component } from "react";

interface Props {
  id: number;
  place: string;
  desc: string;
  img: string;
}

export class Place extends Component<Props> {
  render() {
    const { id, img, place, desc } = this.props;

    return (
      <div className="Place" id={`place-${id}`}>
        <img src={img} alt={place} />
        <div className="PlaceContent">
          <h2>{place}</h2>
          <p>{desc}</p>
        </div>
      </div>
    );
  }
}
