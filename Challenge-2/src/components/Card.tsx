interface CardProps {
  name: string;
  price: number;
  gender: string;
  brand: string;
  image: string;
}

export const Card = ({ image, name, price }: CardProps) => {
  return (
    <div className="card h-100 ms-4 mb-4 border-2">
      <div className="d-flex justify-content-center align-items-center w-100 h-100">
        <img src={image} alt="Bike" className="card-img-top w-75" />
      </div>

      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{price} $</p>
      </div>
    </div>
  );
};
