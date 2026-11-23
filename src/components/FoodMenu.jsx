
import { useState } from "react";
import foods from "../data/food";
import FoodCard from "./FoodCard";
import CategoryFilter from "./CategoryFilter";

function FoodMenu() {
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] =
        useState("All");

    const categories = [
        "All",
        "Pizza",
        "Burgers",
        "Snacks",
        "Drinks"
    ];

    const filteredFoods = foods.filter((food) => {
        const matchesSearch = food.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory =
            selectedCategory === "All" ||
            food.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <section className="menu-section" id="menu">
            <div className="section-heading">
                <span>Our Menu</span>
                <h2>Explore Our Delicious Food</h2>
            </div>

            <input
                type="search"
                placeholder="Search your favorite food..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                aria-label="Search food"
                className="search-input"
            />

            <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onSelect={setSelectedCategory}
            />

            <div className="food-grid">
                {filteredFoods.length > 0 ? (
                    filteredFoods.map((food) => (
                        <FoodCard key={food.id} food={food} />
                    ))
                ) : (
                    <p role="status">No food items found.</p>
                )}
            </div>
        </section>
    );
}

export default FoodMenu;
