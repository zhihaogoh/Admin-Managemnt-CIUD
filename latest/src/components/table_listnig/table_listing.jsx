import PropTypes from "prop-types";
import Title from "../title/title";
import { Table } from "antd";
// const columns = [
//   {
//     title: "Name",
//     dataIndex: "name",
//     key: "name",
//     render: (text) => <a>{text}</a>,
//   },
//   {
//     title: "Age",
//     dataIndex: "age",
//     key: "age",
//   },
//   {
//     title: "Address",
//     dataIndex: "address",
//     key: "address",
//   },
//   {
//     title: "Tags",
//     key: "tags",
//     dataIndex: "tags",
//     render: (_, { tags }) => (
//       <Flex gap="small" align="center" wrap>
//         {tags.map((tag) => {
//           let color = tag.length > 5 ? "geekblue" : "green";
//           if (tag === "kawaii") {
//             color = "volcano";
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </Flex>
//     ),
//   },
//   {
//     title: "Action",
//     key: "action",
//     render: (_, record) => (
//       <Space size="medium">
//         <a>Invite {record.name}</a>
//         <a>Delete</a>
//       </Space>
//     ),
//   },
// ];
// const data = [
//   {
//     key: "1",
//     name: "John Brown",
//     age: 32,
//     address: "New York No. 1 Lake Park",
//     tags: ["nice", "developer"],
//   },
//   {
//     key: "2",
//     name: "Jim Green",
//     age: 42,
//     address: "London No. 1 Lake Park",
//     tags: ["kawaii"],
//   },
//   {
//     key: "3",
//     name: "Joe Black",
//     age: 32,
//     address: "Sydney No. 1 Lake Park",
//     tags: ["cool", "teacher"],
//   },
// ];
export default function TableListing({
  title,
  columns,
  data,
  rowKey = "key",
  pagination,
  scroll,
}) {
  return (
    <>
      <div className="table_llisting">
        {title ? <Title title={title} /> : ""}
        <Table
          columns={columns}
          dataSource={data}
          rowKey={rowKey}
          pagination={{ pageSize: pagination }}
          scroll={{ x: scroll }}
        />
      </div>
    </>
  );
}

TableListing.propTypes = {
  title: PropTypes.string.isRequired,
  rowKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      dataIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
      key: PropTypes.string.isRequired,
      render: PropTypes.func,
    }),
  ),
  data: PropTypes.arrayOf(
    PropTypes.shape({
      order_id: PropTypes.string.isRequired,
      customer: PropTypes.string.isRequired,
      items: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
    }),
  ),
  pagination: PropTypes.number.isRequired,
  scroll: PropTypes.number.isRequired,
};
