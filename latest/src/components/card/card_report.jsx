import Card from "antd/es/card/Card";
import PropTypes from "prop-types";
import Charts from "../Charts/charts";
import ProgressStatus from "../progress/progress";
import { Statistic } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";

export default function CardReport({ card_report }) {
  return (
    <div className="card_reports my-3">
      <div className="card_reports_grid">
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
                  <h4>
                    {Number.isFinite(amount)
                      ? `RM ${amount.toFixed(2)}`
                      : item.total}{" "}
                    {item.subtitle}
                  </h4>
                </div>
                <Icon className="icon" />
              </div>
              <div className="percentage">
                {item.percentage ? (
                  <Statistic
                    value={item.percentage}
                    precision={2}
                    styles={{ content: { color: "#3f8600", display: "flex" } }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                  />
                ) : (
                  ""
                )}
                <span>{item.sub}</span>
              </div>
              {item.status === true ? (
                <div className="detail">
                  {item.report_detail ? (
                    <div className="report_detail">
                      <span>{item.report_detail}</span>
                      <h2>{item.report_detail_data}</h2>
                    </div>
                  ) : (
                    <div className="status">
                      <span className="warring">{item.warring}</span>
                      {item.success ? (
                        <span className="success">{item.success}</span>
                      ) : (
                        ""
                      )}
                      <span className="danger">{item.danger}</span>
                    </div>
                  )}
                </div>
              ) : (
                ""
              )}
              {item.statistic === true ? <Charts /> : ""}
              {item.progress === true ? <ProgressStatus /> : ""}
            </Card>
          );
        })}
      </div>
    </div>
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
      statistic: PropTypes.bool.isRequired,
      status: PropTypes.bool.isRequired,
      progress: PropTypes.bool.isRequired,
    }),
  ),
};
