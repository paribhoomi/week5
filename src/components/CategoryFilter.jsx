
function CategoryFilter({
    categories,
    selectedCategory,
    onSelect
}) {
    return (
        <div className="category-list">
            {categories.map((category) => (
                <button
                    key={category}
                    className={
                        selectedCategory === category
                            ? "category-button active"
                            : "category-button"
                    }
                    onClick={() => onSelect(category)}
                    aria-pressed={selectedCategory === category}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}

export default CategoryFilter;
