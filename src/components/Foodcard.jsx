function FoodCard({ name, price }) {
  return (
    <div className="food-card">
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
      <button>Order Now</button>
    </div>
  );
}
export default FoodCard;
