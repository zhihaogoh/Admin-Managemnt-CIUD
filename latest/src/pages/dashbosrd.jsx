import { Card, Col, Row, Statistic } from "antd";
import BreadCrumb from "../components/Breadcrumb/breadcrumb";
import Title from "../components/title/title";
import Subtitle from "../components/subtitle/sub_title";
import RefIcon from "@ant-design/icons/es/icons/AccountBookFilled";
import { DownloadOutlined } from "@ant-design/icons";

export default function Dashboard() {
  return (
    <>
      <BreadCrumb items={[{ name: "Dashboard", path: "/" }]} />
      <Title title={"Operational Dashboard & Business Overview"} />
      <Subtitle
        detail={
          "Real-time telemetry, core business metrics, fulfillment health, and recent warehouse activities."
        }
        button = {[
          {
          name: "Refresh",
          icon: RefIcon
        },
        {
          name: "Export",
          icon: DownloadOutlined
        }
      ]}
      />
      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Card>
            <Statistic title="Total Products" value={120} />
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card>
            <Statistic title="Total Orders" value={45} />
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card>
            <Statistic title="Total Customers" value={85} />
          </Card>
        </Col>
      </Row>
    </>
  );
}
