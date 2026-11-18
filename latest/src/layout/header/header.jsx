import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Input, Layout, theme } from "antd";
import DropDown from "../../components/DropDownMenu/drop_down";
import profileLogo from "../../assets/image/HavanLogo.png";

const { Header } = Layout;
export default function AdminHeader({ collapsed, setCollapsed }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
          display: "grid",
          gridTemplateColumns: "minmax(64px, 1fr) minmax(0, 2fr) minmax(64px, 1fr)",
          alignItems: "center",
        }}
      >
        <Button
          type="text"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
        <Input
          className="search-form"
          aria-label="Search items and orders"
          style={{ width: "100%", height: 32 }}
          placeholder="Search, items, orders ..."
          prefix={<SearchOutlined />}
        />
        <div className="profile" style={{ justifySelf: "end", marginRight: 16 }}>
          <DropDown
            img={profileLogo}
          />
        </div>
      </Header>
    </>
  );
}
