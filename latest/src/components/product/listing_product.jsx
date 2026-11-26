import { Button, Card, Flex, Progress, Space, Typography } from "antd";
import PropTypes from "prop-types";
import TableListing from "../table_listnig/table_listing";
import RefIcon from "@ant-design/icons/es/icons/AccountBookOutlined";
import { EditFilled } from "@ant-design/icons";

export default function ListingProduct({ product }) {
  return (
    <Card>
      <TableListing
        data={product}
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
            title: "Book Name",
            dataIndex: "book_name",
            key: "book_name",

            render: (_, record) => {
              return (
                <div className="list_book">
                  <RefIcon className="icon" />
                  <div className="d-flex flex-column gap-2">
                    <h1>{record.book_name}</h1>
                    <span>ISBN : {record.book_isbn}</span>
                  </div>
                </div>
              );
            },
          },
          {
            title: "Category",
            dataIndex: ["category", "categories_name"],
            key: "category",
          },
          {
            title: "Items",
            dataIndex: "book_quantity",
            key: "book_quantity",
            render: (_, record) => {
              const stock = record.book_quantity ?? 0;
              const maxStock = record.book_quantity_max ?? 0;
              const reorderLevel = Math.ceil(maxStock * 0.2);
              const percentage =
                maxStock > 0 ? Math.min((stock / maxStock) * 100, 100) : 0;

              const isOut = stock === 0;
              const isLow = stock > 0 && stock <= reorderLevel;

              const color = isOut ? "#ff4d4f" : isLow ? "#faad14" : "#52c41a";

              const label = isOut
                ? `Stock out`
                : isLow
                  ? `Reorder at ${reorderLevel}`
                  : "Max stock";
              return (
                <div style={{ minWidth: 140 }}>
                  <Flex justify="space-between">
                    <Typography.Text style={{ color }}>
                      {stock} units
                    </Typography.Text>

                    <Typography.Text type="secondary" style={{ fontSize: 11 }}>
                      {label}
                    </Typography.Text>
                  </Flex>

                  <Progress
                    percent={percentage}
                    showInfo={false}
                    strokeColor={color}
                    size="small"
                  />
                </div>
              );
            },
          },
          {
            title: "Price",
            dataIndex: "book_price",
            key: "book_price",
            render: (price) => {
              return <span>RM{price.toFixed(2)}</span>;
            },
          },
          {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status) => {
              return (
                <div className="d-flex justify-content-center">
                  {status === 1 ? (
                    <span className="bg-success p-2 stock">Stock</span>
                  ) : (
                    <span className="bg-danger p-2 stock ">Not Stock</span>
                  )}
                </div>
              );
            },
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

ListingProduct.propTypes = {
  product: PropTypes.arrayOf(
    PropTypes.shape({
      book_name: PropTypes.string.isRequired,
      book_isbn: PropTypes.string.isRequired,
      book_price: PropTypes.number.isRequired,
      book_quantity: PropTypes.number.isRequired,
      book_quantity_max: PropTypes.number.isRequired,
      category: PropTypes.shape({
        categories_name: PropTypes.string.isRequired,
      }),
    }),
  ).isRequired,
};
