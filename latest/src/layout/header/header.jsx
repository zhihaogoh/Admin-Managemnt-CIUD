import { MenuFoldOutlined, MenuUnfoldOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Input, Layout, theme } from "antd";

const { Header } = Layout;
export default function AdminHeader({ collapsed, setCollapsed }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Header style={{ padding: 0, background: colorBgContainer , display:'flex', alignItems: 'center' }}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
         <Input className="search-form" placeholder="Search, items, orders ..." prefix={<SearchOutlined />} />
      </Header>
    </>
  );
}
