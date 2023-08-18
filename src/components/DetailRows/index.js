import "./index.css";

const DetailRows = (props) => {
  const { each } = props;
  const { imageUrl, name, type } = each;
  return (
    <div className="topSearchBar">
      <div className="one">
        <img src={imageUrl} className="avatar" alt={name} />
        <div className="column">
          <p className="first">{name}</p>
          <p className="second">{type}</p>
        </div>
      </div>
      <p className="arrow">{">"}</p>
    </div>
  );
};

export default DetailRows;
