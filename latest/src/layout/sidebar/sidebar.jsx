import {
  DashboardFilled,

  OrderedListOutlined,
  ProductFilled,
    UserAddOutlined,
  UserOutlined,

} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import PropTypes from "prop-types";

const { Sider } = Layout;
export default function Sidebar({ collapsed }) {
  const items = [
    {
      key: "/",
      icon: <DashboardFilled />,
      label: "Dashboard",
    },
    {
      key: "product",
      icon: <ProductFilled />,
      label: "Product",
    },
    {
        key: "order",
        icon: <OrderedListOutlined/>,
        label: "Order"
    },
    {
      key: "User",
      icon: <UserOutlined />,
      label: "User",
    },
    {
      key: "Admin",
      icon: <UserAddOutlined />,
      label: "Employee",
    }, 
  ];
  return (
    <>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          {!collapsed ? (
            <h1>Book Haven Admin</h1>
          ) : (
            <img
              className="logo"
              src="./src/assets/image/HavanLogo.png"
              alt="../assets/image/HavanLogo.png"
            />
          )}
        </div>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </Sider>
    </>
  );
}
Sidebar.propTypes = {
  collapsed: PropTypes.bool.isRequired,
};