import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import PropTypes from "prop-types";

export default function FormInput({ input,placeholder }) {
  return (
    <>
      {input === true ? (
        <Input placeholder={placeholder} prefix={<SearchOutlined />} />
      ) : (
        ""
      )}
    </>
  );
}

FormInput.propTypes = {
  input: PropTypes.bool.isRequired,
  placeholder : PropTypes.string.isRequired
};
