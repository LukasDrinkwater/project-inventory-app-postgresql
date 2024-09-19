export default function ModelCards({ model }) {
  const handleCardClick = () => {
    // go to the single card component that has more detail
  };

  return (
    <>
      <div className="card" onClick={handleCardClick}>
        <img src="" alt="" />
        <div className="cardInfoContainer">
          <p>{/* model.price */}</p>
          <p>{/* model.year name */}</p>
        </div>
      </div>
    </>
  );
}
