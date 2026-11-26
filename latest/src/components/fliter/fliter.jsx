import { Button } from "antd";
import FormInput from "../Form/form_input";
import SelectList from "../Form/select_list";
import { RedoOutlined } from "@ant-design/icons";

export default function Fliter() {
  return (
    <>
      <div className="fliter p-2">
        <FormInput
          input={true}
          placeholder="Search by product name, SKU, barcode, supplier..."
        />
        <SelectList
          option={[
            {
              value: 0,
              label: "All Categories",
            },
            {
              value: 1,
              label: "Fiction",
            },
            {
              value: 2,
              label: "Non Fiction",
            },
            {
              value: 3,
              label: "History",
            },
          ]}
        />
        <SelectList
          option={[
            {
              value: 0,
              label: "All Status",
            },
            {
              value: 1,
              label: "Packing",
            },
            {
              value: 2,
              label: "Deliver",
            },
            {
              value: 3,
              label: "Recliver",
            },
          ]}
        />
        <Button icon={<RedoOutlined />}>Repeat</Button>
      </div>
    </>
  );
}
