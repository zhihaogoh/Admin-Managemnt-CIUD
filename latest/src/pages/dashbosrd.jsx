import BreadCrumb from "../components/Breadcrumb/breadcrumb";
import Title from "../components/title/title";
import Subtitle from "../components/subtitle/sub_title";
import RefIcon from "@ant-design/icons/es/icons/AccountBookFilled";
import {
  DeliveredProcedureOutlined,
  DownloadOutlined,
  MoneyCollectFilled,
  ProductFilled,
  UserOutlined,
} from "@ant-design/icons";
import CardReport from "../components/card/card_report";
import CardProgressReport from "../components/card/card_progress_report";

export default function Dashboard() {
  return (
    <>
      <BreadCrumb items={[{ name: "Dashboard", path: "/" }]} />
      <Title title={"Operational Dashboard & Business Overview"} />
      <Subtitle
        detail={
          "Real-time telemetry, core business metrics, fulfillment health, and recent warehouse activities."
        }
        button={[
          {
            name: "Refresh",
            icon: RefIcon,
          },
          {
            name: "Export",
            icon: DownloadOutlined,
          },
        ]}
      />
      <CardReport
        card_report={[
          {
            title: "Total Revenue",
            total_amount: 184902.5,
            icon: MoneyCollectFilled,
            percentage: 84,
            sub: "Vs last month",
            report_detail: "Settled Trans.",
            report_detail_data: "1,420 orders",
          },
          {
            title: "Total Orders",
            total: 3840,
            subtitle: "Units",
            icon: DeliveredProcedureOutlined,
            percentage: 84,
            sub: "Monthly velocity",
            warring: "142 packing",
            success: "38 pick up",
            danger: "12 Hold",
          },
          {
            title: "Inventory / SKU Stock",
            total: 1840,
            subtitle: "Units",
            icon: ProductFilled,
            warring: "18 Low stock",
            danger: "12 Hold",
          },
          {
            title: "Active Customer",
            total: 9000,
            subtitle: "Accounts",
            icon: UserOutlined,
            percentage: 84,
            sub: "New this month",
            report_detail: "B2B Corporate Tier",
            report_detail_data: "342 Enterprise",
          },
        ]}
      />
      <CardProgressReport
        title="Order Fulfillment Pipeline Status"
        order_status={[
          {
            total: 142,
            status: "Pending pack",
            sub_status: "42 priority rush",
          },
          {
            total: 620,
            status: "In Transit",
            sub_status: "FedEx / DHL hubs",
          },
          {
            total: 188,
            status: "Out for Delivery",
            sub_status: "Courier dispatched",
          },
          {
            total: 142,
            status: "Delivered Today",
            sub_status: "100% on schedule",
          },
        ]}
      />
    </>
  );
}
