import { Card, Col, Row, Statistic } from "antd";
import BreadCrumb from "../components/Breadcrumb/breadcrumb";
import Title from "../components/title/title";

export default function Dashboard() {
  return (
    <>
      <BreadCrumb
        items={[
          { name: "Dashboard", path: "/" },
        ]}
      />
      <Title 
        title={"Operational Dashboard & Business Overview"}
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
