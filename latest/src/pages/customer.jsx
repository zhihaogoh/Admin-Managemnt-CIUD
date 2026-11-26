import { CheckOutlined, DownloadOutlined, FileAddFilled, ShoppingCartOutlined, WalletFilled, WarningFilled } from "@ant-design/icons";
import BreadCrumb from "../components/Breadcrumb/breadcrumb";
import Subtitle from "../components/subtitle/sub_title";
import Title from "../components/title/title";
import CardReport from "../components/card/card_report";
import Fliter from "../components/fliter/fliter";
import ListingProduct from "../components/product/listing_product";
import { product } from "../data/data";

export default function Customer(){
    return(
        <>
      <BreadCrumb
        items={[
          { name: "Dashboard", path: "/" },
          { name: "Customer" },
        ]}
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
            title: "Total Active Skus",
            total: 1420,
            percentage: 32,
            sub: "this month",
            icon: CheckOutlined,
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
            title: "Inventory Valuation",
            total_amount: 850000.0,
            icon: WalletFilled,
            percentage: 4.2,
            sub: "cost basis vs Q3",
            statistic: true,
          },
          {
            title: "Out for stock",
            total: 3,
            subtitle: "Items",
            sub: (
              <>
                <ShoppingCartOutlined /> In transit: 420 units
              </>
            ),
            icon: ShoppingCartOutlined,
            status : true,
            report_detail: "Replenishment ETA",
            report_detail_data: "Tomorrow 08:00",
          },
        ]}
      />
      <Fliter />
      <ListingProduct  product = {product}/>
    </>
    )
}