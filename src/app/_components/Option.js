export default function Options({
  items,
  isFixed,
  categorySelected,
  setCategorySelected,
}) {
  const handleCategoryClick = (category) => {
    setCategorySelected(category);

    const section = document.getElementById(category);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`container mx-auto px-4 pt-2 fixed bg-[#FEF1EC] ${
        isFixed ? "top-0 left-0 w-full z-50 pt-3 pb-3" : "mt-5"
      }`}
    >
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {Object.keys(items).map((category) => (
          <div
            key={category}
            className={`border border-black py-1 px-3 cursor-pointer rounded-lg transition-colors duration-300 ${
              categorySelected === category
                ? "bg-orange-500 text-white"
                : "bg-white"
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </div>
        ))}
      </div>
    </div>
  );
}
