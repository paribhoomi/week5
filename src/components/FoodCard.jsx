
import { useCart } from "../context/CartContext";

function FoodCard({ food }) {
    const { addToCart } = useCart();

    return (
        <article className="food-card">
            <img
                src={food.image}
                alt={food.name}
                className="food-image"
            />

            <div className="food-info">
                <span className="food-category">
                    {food.category}
                </span>

                <h3>{food.name}</h3>

                <p>{food.description}</p>

                <div className="food-bottom">
                    <strong>₹{food.price}</strong>

                    <span>⭐ {food.rating}</span>
                </div>

                <button
                    onClick={() => addToCart(food)}
                    className="add-button"
                    aria-label={`Add ${food.name} to cart`}
                >
                    Add to Cart
                </button>
            </div>
        </article>
    );
}

export default FoodCard;
