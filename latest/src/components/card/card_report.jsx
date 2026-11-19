import { Flex } from "antd";
import Card from "antd/es/card/Card";
import PropTypes from "prop-types";

export default function CardReport({ card_report }) {
  return (
    <Flex className="my-3" gap={16} wrap="wrap">
      {card_report.map((item, index) => {
        const Icon = item.icon;
        const amount =
          typeof item.total_amount === "number" ||
          (typeof item.total_amount === "string" &&
            item.total_amount.trim() !== "")
            ? Number(item.total_amount)
            : NaN;
        return (
          <Card key={index} className="card_report">
            <div className="title">
              <div className="subtitle">
                <h2>{item.title}</h2>
                <p>
                  {Number.isFinite(amount)
                    ? `RM ${amount.toFixed(2)}`
                    : item.total}{" "}
                  {item.subtitle}
                </p>
              </div>
              <Icon className="icon" />
            </div>
            <div className="percentage">
              {item.percentage ? (
                <span className="percentages">+{item.percentage}%</span>
              ) : (
                ""
              )}
              <span>{item.sub}</span>
            </div>
            <div className="detail">
              {item.report_detail ? (
                <div className="report_detail">
                  <span>{item.report_detail}</span>
                  <span>{item.report_detail_data}</span>
                </div>
              ) : (
                 <div className="status">
                  <span>{item.warring}</span>
                  <span>{item.success}</span>
                  <spam>{item.danger}</spam>
                </div>
              )}
            </div>
          </Card>
        );
      })}
    </Flex>
  );
}

CardReport.propTypes = {
  card_report: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      total_amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      subtitle: PropTypes.string,
      icon: PropTypes.elementType.isRequired,
      percentage: PropTypes.number.isRequired,
      sub: PropTypes.string.isRequired,
      report_detail: PropTypes.string.isRequired,
      report_detail_data: PropTypes.string.isRequired,
      warring: PropTypes.string.isRequired,
      success: PropTypes.string.isRequired,
      danger: PropTypes.string.isRequired,
    }),
  ),
};
