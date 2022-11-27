import PropTypes from 'prop-types'

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

Filter.propTypes = {
  filter: PropTypes.shape({
    type: PropTypes.oneOf(['input', 'checkbox']).isRequired,
    value: PropTypes.string,
    values: PropTypes.object,
  }),
  filterId: PropTypes.string.isRequired
}
