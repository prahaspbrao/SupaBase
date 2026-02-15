const SmoothieCard = ({ smoothie }) => {
  return (
    <div className="smoothie-card">
      <div className="smoothie-rating">
        ⭐ {smoothie.rating}
      </div>

      <h3>{smoothie.title}</h3>
      <p>{smoothie.method}</p>
    </div>
  );
};

export default SmoothieCard;
