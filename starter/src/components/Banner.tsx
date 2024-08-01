import { Component } from "react";

export class Banner extends Component {
  render() {
    return (
      <>
        <header>
          <div className="Banner MarginAuto">
            <p>Summer Vacation</p>
            <h1>Nomad nation</h1>
            <button className="BannerButton">Read More</button>
          </div>
        </header>
      </>
    );
  }
}
