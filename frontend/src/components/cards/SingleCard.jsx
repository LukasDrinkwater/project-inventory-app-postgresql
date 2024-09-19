export default function SingleCard({ model }) {
  return (
    <>
      <div className="allModelContainer">
        <div className="card">
          <img src="" alt="" />
          <div className="cardInfoContainer">
            <p>{/* model.price */}</p>
            <p>{/* model.description */}</p>
            <p>{/* model.year name */}</p>
          </div>
          <div className="editContainer">
            <div className="editButton">Edit</div>
            <div className="deleteButton">Delete Model</div>
          </div>
        </div>
      </div>
    </>
  );
}
