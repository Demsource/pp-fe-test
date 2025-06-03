import "./WUItem.css";

const WUItem = ({ imageUrl, imageAlt, title, desc }) => {
  return (
    <div className="wu-item">
      <div className="image-wrapper">
        <img src={imageUrl} alt={imageAlt} />
      </div>
      <h6>{title}</h6>
      <p>{desc}</p>
    </div>
  );
};

export default WUItem;
