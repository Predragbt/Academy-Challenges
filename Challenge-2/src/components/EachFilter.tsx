import { Badge } from "react-bootstrap";

interface EachFilterProps {
  label: string;
  count: number;
  onClick: () => void;
}

export const EachFilter = ({ label, count, onClick }: EachFilterProps) => {
  return (
    <li
      className="d-flex justify-content-between align-items-center w-100 mb-1"
      onClick={onClick}
    >
      <span className="cursor-pointer">{label}</span>
      <Badge bg="secondary" pill>
        {count}
      </Badge>
    </li>
  );
};
