import RefIcon from "@ant-design/icons/es/icons/HistoryOutlined";
import BreadCrumb from "../components/Breadcrumb/breadcrumb";
import Subtitle from "../components/subtitle/sub_title";
import Title from "../components/title/title";
import {
  CheckOutlined,
  DownloadOutlined,
  FileAddFilled,
  ShoppingCartOutlined,
  WalletFilled,
  WarningFilled,
} from "@ant-design/icons";
import CardReport from "../components/card/card_report";

export default function Product() {
  return (
    <>
      <BreadCrumb
        items={[
          { name: "Dashboard", path: "/" },
          { name: "Product & Inventory" },
        ]}
      />
      <Title title={"Products & Inventory"} />
      <Subtitle
        detail={
          "Monitor real-time warehouse stock, SKU variants, reorder thresholds, and pricing across sales channels."
        }
        datePicker={false}
        button={[
          {
            name: "Refresh",
            icon: RefIcon,
          },
          {
            name: "Export",
            icon: DownloadOutlined,
          },
          {
            name: "Add Product",
            icon: FileAddFilled,
          },
        ]}
      />
      <CardReport
        card_report={[
          {
            title: "Total Active Skus",
            total: 1420,
            icon: CheckOutlined,
            statistic : true
          },
          {
            title: "Low Stock Alerts",
            total: 14,
            subtitle: "Items",
            icon: WarningFilled,
            progress : true
          },
          {
            title: "Inventory Valuation",
            total_amount: 850000.0,
            icon: WalletFilled,
            statistic : true
          },
          {
            title: "Out for stock",
            total: 3,
            subtitle: "Items",
            icon: ShoppingCartOutlined,
          },
        ]}
      />
    </>
  );
}
