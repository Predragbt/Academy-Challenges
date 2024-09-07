interface CardProps {
  name: string;
  price: number;
  gender: string;
  brand: string;
  image: string;
}

export const Card = ({ image, name, price }: CardProps) => {
  return (
    <div className="card ms-4 border-2">
      <div className="d-flex justify-content-center align-items-center w-100 h-100">
        <img
          src={`../img/${image}.png`}
          alt="Bike"
          className="card-img-top w-75 my-5"
        />
      </div>

      <div className="card-body py-4 bg-warning">
        <h5 className="card-title">{name}</h5>
        <p className="card-text fs-5">{price} $</p>
      </div>
    </div>
  );
};
