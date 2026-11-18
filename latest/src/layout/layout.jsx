import  { useState } from "react";
import {

} from "@ant-design/icons";
import {  Layout,  theme } from "antd";
import AdminHeader from "./header/header";
import Sidebar from "./sidebar/sidebar";
import { Outlet } from "react-router";

const {  Content } = Layout;

export default function AdminLayout({children}) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{minHeight:"100vh"}}>
      <Sidebar collapsed={collapsed} />
      <Layout>
        <AdminHeader 
          collapsed = {collapsed}
          setCollapsed={setCollapsed}
          />
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
