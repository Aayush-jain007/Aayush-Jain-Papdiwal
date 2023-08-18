import "./index.css";

const DescriptionCard = (props) => {
  const { each } = props;
  const { displayText, imageUrl, detailsText } = each;
  return (
    <div className="flex-item">
      <div className="content">
        <p className="top-line">{displayText}</p>
        <img className="image" src={imageUrl} alt="star" />
        <p className="bottom-line">{detailsText}</p>
        <div className="button-item">
          <button type="button" className="buttonism">
            Read
          </button>
        </div>
      </div>
    </div>
  );
};

export default DescriptionCard;
