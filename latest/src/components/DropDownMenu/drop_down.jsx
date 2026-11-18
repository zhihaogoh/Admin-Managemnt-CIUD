import { DownOutlined, SettingOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
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
export default function DropDown({img}) {
  return (
    <>
     <img className="m-3" src={img} alt={img} />
     <div className="account">
        <span>Abc</span>
        <span>Director</span>
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
