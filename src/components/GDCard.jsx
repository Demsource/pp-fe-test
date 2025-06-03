import "./GDCard.css";

const GDCard = ({ imageUrl, imageAlt }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={imageAlt} />
      <button>go now</button>
    </div>
  );
};

export default GDCard;
