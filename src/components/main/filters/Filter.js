import { Input } from "./Input";
import { Checkbox } from "./Checkbox";

export const Filter = ({ filter, filterId }) => {
  switch (filter.type) {
    case "input":
      return <Input filterId={filterId} />;

    default:
      return (
        <div className="checkboxes">
          <span className="filter-title text-light">{filterId}</span>
          {Object.keys(filter.values).map((key, i) => (
            <Checkbox key={i} filterId={filterId} checkboxId={key} />
          ))}
        </div>
      );
  }
};
