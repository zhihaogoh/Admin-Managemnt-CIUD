import PropTypes from "prop-types";
import Title from "../title/title";
import { Card } from "antd";

export default function CardProgressReport({ title, order_status }) {
  return (
    <>
      <div className="card_progress_status">
        <Title title={title} />
        <div className="mt-2 card_progress_status_grid">
          {order_status.map((item, index) => {
            return (
              <Card key={index} className="status_report">
                <div className="d-flex gap-3 justify-content-start align-items-center">
                  <div
                    className={`${item.status_type === "pending" ? "pending" : item.status_type === "transmit" ? "transmit" : item.status_type === "delivery" ? "delivery" : item.status_type === "success" ? "success" : ""} total`}
                  >
                    <h3>{Number(item.total)}</h3>
                  </div>
                  <div className="status">
                    <h4>{item.status}</h4>
                    <p>{item.sub_status}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}

CardProgressReport.propTypes = {
  title: PropTypes.string.isRequired,
  order_status: PropTypes.arrayOf(
    PropTypes.shape({
      status_type: PropTypes.string.isRequired,
      total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      status: PropTypes.string.isRequired,
      sub_status: PropTypes.string.isRequired,
    }),
  ),
};
