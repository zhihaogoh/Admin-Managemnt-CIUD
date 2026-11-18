import { Card, Col, Row, Statistic } from "antd";

export default function Dashboard() {
  return (
    <>
      <h2>Dashboard</h2>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Card>
            <Statistic
              title="Total Products"
              value={120}
            />
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card>
            <Statistic
              title="Total Orders"
              value={45}
            />
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card>
            <Statistic
              title="Total Customers"
              value={85}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}