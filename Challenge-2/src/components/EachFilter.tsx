import { Badge } from "react-bootstrap";

interface EachFilterProps {
  label: string;
  count: number;
  onClick: () => void;
  listColor?: string;
  badgeColor?: string;
}

export const EachFilter = ({
  label,
  count,
  onClick,
  listColor = "",
  badgeColor = "",
}: EachFilterProps) => {
  return (
    <li
      className={`d-flex justify-content-between align-items-center w-100 mb-1 ${listColor}`}
      onClick={onClick}
    >
      <span className="cursor-pointer">{label}</span>
      <Badge className={badgeColor} pill>
        {count}
      </Badge>
    </li>
  );
};
