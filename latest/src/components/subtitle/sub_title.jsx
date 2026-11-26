import PropTypes from "prop-types";
import Datepicker from "../Datepicker/datepicker";
import { Button } from "antd";

export default function Subtitle({ detail, button, datePicker }) {
  return (
    <div className="subtitle my-3">
      <p>{detail}</p>
      {/* display only laptop 15' */}
      <div className="d-none d-xl-flex gap-3">
         {datePicker === true ? <Datepicker /> : ""}
        {button.map((item, index) => {
          const Icon = item.icon; //设置icon 的data
          return (
            <Button key={index} icon={<Icon />}>
              {item.name}
            </Button>
          );
        })}
      </div>
      {/* display only pad, laptop 14' */}
      <div className="d-flex d-xl-none flex-column">
        {datePicker === true ? <Datepicker /> : ""}

        <div className="mt-2 d-flex d-xl-none justify-content-start gap-3">
          {button.map((item, index) => {
            const Icon = item.icon;
            return (
              <Button key={index} icon={<Icon />}>
                {item.name}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

Subtitle.propTypes = {
  detail: PropTypes.string.isRequired,
  button: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
    }),
  ),
  datePicker: PropTypes.bool.isRequired,
};
