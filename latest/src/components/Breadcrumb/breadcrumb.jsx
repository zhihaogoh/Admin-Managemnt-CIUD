import { Breadcrumb } from "antd";
import PropTypes from "prop-types";

export default function BreadCrumb({ items }) {
  return (
    <Breadcrumb
      items={items.filter(Boolean).map((item) => ({
        title: item.path ? <a href={item.path}>{item.name}</a> : item.name,
      }))}
    />
  );
}

BreadCrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  ),
};
