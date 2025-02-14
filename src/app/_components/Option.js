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

  const formatCategoryName = (name) => {
    return name.replace(/([a-z])([A-Z])/g, "$1 $2");
  };

  return (
    <div
      className={`w-full mx-auto px-4 pt-2 fixed bg-[#FEF1EC] ${
        isFixed ? "top-0 left-0 w-full z-50 pt-3" : "mt-5"
      }`}
    >
      <div className="flex space-x-4 overflow-x-auto pb-3 z-50 no-scrollbar">
        {Object.keys(items).map((category) => (
          <div
            key={category}
            className={`border border-black py-1 px-3 cursor-pointer rounded-lg transition-colors duration-300 flex-shrink-0 whitespace-nowrap ${
              categorySelected === category
                ? "bg-[#F68F4F] text-white"
                : "bg-white"
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {formatCategoryName(
              category.charAt(0).toUpperCase() + category.slice(1)
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
