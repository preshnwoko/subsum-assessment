import ArrowRight from "../../assets/svg/arrowRight";
import { helpLinks } from "../../utils/helpLinks";
import "./index.scss";

const Help = () => {
  return (
    <div className="help">
      <div className="help_inner">
        {helpLinks?.map((helpLink, idx) => (
          <div className="help_item" key={idx}>
            <helpLink.icon />
            <div className="help_item_right">
              <p>{helpLink.title}</p>
              {helpLink?.linkTitle ? (
                <button>
                  <span>{helpLink.linkTitle}</span>
                  <ArrowRight />
                </button>
              ) : (
                <button className="soon">
                  <span>Coming soon</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Help;
