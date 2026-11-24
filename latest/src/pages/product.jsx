import RefIcon from "@ant-design/icons/es/icons/HistoryOutlined";
import BreadCrumb from "../components/Breadcrumb/breadcrumb";
import Subtitle from "../components/subtitle/sub_title";
import Title from "../components/title/title";
import { DownloadOutlined, FileAddFilled } from "@ant-design/icons";

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
        datePicker = {false}
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
    </>
  );
}
