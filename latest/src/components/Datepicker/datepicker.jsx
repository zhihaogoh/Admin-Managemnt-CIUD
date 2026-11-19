import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = "DD/MM/YYYY";

export default function Datepicker() {
  return (
    <Space vertical size={12}>
      <RangePicker
        defaultValue={[
          dayjs("01/01/2026", dateFormat),
          dayjs("31/01/2026", dateFormat),
        ]}
        format={dateFormat}
      />
    </Space>
  );
}
