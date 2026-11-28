import { EditFilled } from "@ant-design/icons";
import { Button, Card, Space } from "antd";
import PropTypes from "prop-types";
import TableListing from "../table_listnig/table_listing";

export default function ListingCustomer({ customer }) {
  return (
    <Card>
      <TableListing
      data={customer}
      rowKey="id"
      pagination={5}
      scroll={1100}
      columns={[
        {
          title: "ID",
          dataIndex: "id",
          key: "id",
          render: (text) => <a>{text}</a>,
        },
        {
          title: "Customer name",
          dataIndex: "first_name",
          key: "first_name",

          render: (_, record) => {
            return (
              <div className="list_book">
                <div className="d-flex flex-column gap-2">
                  <h1>
                    {record.first_name}
                    {record.last_name}
                  </h1>
                </div>
              </div>
            );
          },
        },
        {
          title: "Email",
          dataIndex: "email",
          key: "email",
        },

        {
          title: "Type",
          dataIndex: "user_role",
          key: "user_role",
        },
        {
          title: "Phone number",
          dataIndex: "phone_number",
          key: "phone_number",
        },
        {
          title: "Action",
          key: "action",
          render: () => (
            <Space size="medium">
              <Button className="p-0 border-0">
                <EditFilled />
              </Button>
            </Space>
          ),
        },
      ]}
      />
    </Card>
  );
}

ListingCustomer.propTypes = {
  customer: PropTypes.arrayOf(
    PropTypes.shape({
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      user_role: PropTypes.string.isRequired,
      phone_number: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.oneOf([null]),
      ]),
    }),
  ),
};
