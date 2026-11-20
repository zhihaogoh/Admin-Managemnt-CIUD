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
              <Card key={index}  className="status_report">
                <div className="d-flex gap-2 justify-content-start align-items-center">
                  <div className="total">
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
      total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      status: PropTypes.string.isRequired,
      sub_status: PropTypes.string.isRequired,
    }),
  ),
};
