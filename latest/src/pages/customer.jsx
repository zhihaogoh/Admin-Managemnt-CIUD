import {
  DownloadOutlined,
  FileAddFilled,
  ShoppingCartOutlined,
  UserOutlined,
  WalletFilled,
  WarningFilled,
} from "@ant-design/icons";
import BreadCrumb from "../components/Breadcrumb/breadcrumb";
import Subtitle from "../components/subtitle/sub_title";
import Title from "../components/title/title";
import CardReport from "../components/card/card_report";
import Fliter from "../components/fliter/fliter";
import ListingCustomer from "../components/customer/listing_customer";
import { users } from "../data/data";

export default function Customer() {
  
  return (
    <>
      <BreadCrumb
        items={[{ name: "Dashboard", path: "/" }, { name: "Customer" }]}
      />
      <Title title={"Customer"} />
      <Subtitle
        detail={
          "Manage registered buyers, enterprise wholesale accounts, customer segments, and staff administrative roles."
        }
        datePicker={false}
        button={[
          {
            name: "Export Customer List",
            icon: DownloadOutlined,
          },
          {
            name: "+ Add Customer / User",
            icon: FileAddFilled,
          },
        ]}
      />
      <CardReport
        card_report={[
          {
            title: "Total Customers",
            total: 18490,
            percentage: 92,
            sub: "+1,120 this month",
            icon: UserOutlined,
            statistic: true,
          },
          {
            title: "Low Stock Alerts",
            total: 14,
            subtitle: "Items",
            sub: "Requires reorder attention",
            icon: WarningFilled,
            progress: true,
          },
          {
            title: "Average Order Value (AOV)",
            total_amount: 142.8,
            icon: WalletFilled,
            percentage: 8.4,
            sub: "Target $150",
            statistic: true,
          },
          {
            title: "Repeat Purchase Rate",
            total: 38.6,
            subtitle: "Benchmark 31%",
            sub: (
              <>
                <ShoppingCartOutlined /> In transit: 420 units
              </>
            ),
            icon: ShoppingCartOutlined,
            percentage: 42,

            statistic: true,
          },
        ]}
      />
      <Fliter
        placeholder="Search by customer name, email, company, phone, ID..."
        categories={[
          {
            value: 0,
            label: "Categories type",
          },
          {
            value: 1,
            label: "Member",
          },
          {
            value: 2,
            label: "Non member",
          },
          {
            value: 3,
            label: "Company",
          },
        ]}
      />
      <ListingCustomer customer={users} />
    </>
  );
}
