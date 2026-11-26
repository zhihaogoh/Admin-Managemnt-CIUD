import { Select } from "antd";
import PropTypes from "prop-types";

export default function SelectList({ option }) {
  return (
    <>
      <Select
        className="w-50"
        defaultValue={option[0].label}
        options={option}
      />
    </>
  );
}

SelectList.propTypes = {
  option:
    PropTypes.shape[
      {
        value: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
      }
    ],
};
