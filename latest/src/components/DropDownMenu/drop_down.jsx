import { DownOutlined, SettingOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import PropTypes from "prop-types";

const items = [
  {
    key: "1",
    label: "My Account",
    disabled: true,
  },
  {
    type: "divider",
  },
  {
    key: "2",
    label: "Profile",
    extra: "⌘P",
  },
  {
    key: "3",
    label: "Billing",
    extra: "⌘B",
  },
  {
    key: "4",
    label: "Settings",
    icon: <SettingOutlined />,
    extra: "⌘S",
  },
];
export default function DropDown({ account, position, img }) {
  return (
    <>
      <img className="m-3" src={img} alt={img} />
      <div className="account">
        <span>{account}</span>
        <span>{position}</span>
      </div>
      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </>
  );
}

DropDown.propTypes ={
    account: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired
}
