import { Button } from "antd";
import FormInput from "../Form/form_input";
import SelectList from "../Form/select_list";
import { RedoOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

export default function Fliter({ placeholder, categories, status }) {
  return (
    <>
      <div className="fliter p-2">
        <FormInput input={true} placeholder={placeholder} />
        <SelectList option={categories} />
        {status ? <SelectList option={status} /> : ""}
        <Button icon={<RedoOutlined />}>Repeat</Button>
      </div>
    </>
  );
}

Fliter.propTypes = {
  placeholder: PropTypes.string.isRequired,
  categories: PropTypes.shape({
    value: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  }),
  status: PropTypes.shape({
    value: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  }),
};
