import { Component, ReactNode } from "react";

interface Props {
  title: string;
  img: string;
}

export class DetailsBlock extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="Details MarginAuto">
          <div className="DetailsText">
            <p className="DetailsAbout">About</p>
            <h3>{this.props.title}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem ratione temporibus id eos, amet est quaerat,
              perferendis sint, officiis quisquam aspernatur ad ducimus rerum
              quae excepturi commodi obcaecati iure natus. Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Ipsum, omnis natus.
            </p>
            <p>
              Sed aliquid excepturi voluptate minus neque consectetur iure vel
              cupiditate repudiandae porro unde consequatur quas eligendi
              eveniet totam perspiciatis culpa provident odio, est distinctio
              dolores impedit maxime velit eum!
            </p>
          </div>
          <div>
            <img className="DetailsImg" src={this.props.img} alt={"Image description"} />
          </div>
        </div>
      </>
    );
  }
}
