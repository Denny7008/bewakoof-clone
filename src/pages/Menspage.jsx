import React, { useEffect, useState } from "react";
import axios from "axios";
import { X } from "lucide-react";

const Menspage = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [loading, setLoading] = useState(true);
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/updated_mens_clothing_data.json");
        setAllProducts(res.data);
      } catch (err) {
        console.error("Error loading product data", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const categories = [...new Set(allProducts.map((item) => item.category))];
  const colors = [...new Set(allProducts.map((item) => item.color).filter(Boolean))];
  const sizes = [...new Set(allProducts.flatMap((item) => item.sizes || []))];
  const brands = [...new Set(allProducts.map((item) => item.brand).filter(Boolean))];
  const minPrice = Math.min(...allProducts.map((item) => item.price));
  const maxPrice = Math.max(...allProducts.map((item) => item.price));

  const filteredProducts = allProducts.filter((product) => {
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const colorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
    const sizeMatch = selectedSizes.length === 0 || (product.sizes || []).some((size) => selectedSizes.includes(size));
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    return categoryMatch && colorMatch && sizeMatch && brandMatch && priceMatch;
  });

  return (
    <div className="max-w-[1440px] mx-auto p-4">
      {/* header part */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Clothes for Men</h1>
        {/* Filter Button in Mobile */}
        <button
          className="sm:hidden bg-black text-white px-4 py-2 rounded-md"
          onClick={() => setShowMobileFilter(true)}
        >
          Filter
        </button>
      </div>

      <div className="flex gap-8">
        {/* Sidebar Filter - Desktop Only */}
        <div className="w-64 border-r pr-4 space-y-6 hidden sm:block">
          <Filters
            categories={categories}
            colors={colors}
            sizes={sizes}
            brands={brands}
            selectedCategories={selectedCategories}
            selectedColors={selectedColors}
            selectedSizes={selectedSizes}
            selectedBrands={selectedBrands}
            priceRange={priceRange}
            setSelectedCategories={setSelectedCategories}
            setSelectedColors={setSelectedColors}
            setSelectedSizes={setSelectedSizes}
            setSelectedBrands={setSelectedBrands}
            setPriceRange={setPriceRange}
            minPrice={minPrice}
            maxPrice={maxPrice}
          />
        </div>

        {/* Products */}
        <div className="flex-1">
          {loading ? (
            <p className="text-gray-500 text-center">Loading...</p>
          ) : filteredProducts.length === 0 ? (
            <p className="text-center text-gray-500">No products found.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white relative"
                >
                  {product.badge && (
                    <span className="absolute top-2 left-2 bg-yellow-400 text-xs px-2 py-1 rounded-full font-semibold uppercase">
                      {product.badge}
                    </span>
                  )}
                  <img
                    src={product.image || "https://via.placeholder.com/300x400?text=No+Image"}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-green-600">₹{product.price}</span>
                      {product.originalPrice && (
                        <span className="line-through text-gray-400 text-sm">₹{product.originalPrice}</span>
                      )}
                      {product.offer && (
                        <span className="text-sm text-red-600 font-semibold">{product.offer} OFF</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 capitalize">
                      {product.category} • {product.color} • {product.brand}
                    </p>
                    {product.rating && (
                      <div className="text-sm text-yellow-500 font-medium">⭐ {product.rating} / 5</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {showMobileFilter && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
          <div className="bg-white w-4/5 max-w-sm p-4 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Filters</h2>
              <button onClick={() => setShowMobileFilter(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <Filters
              categories={categories}
              colors={colors}
              sizes={sizes}
              brands={brands}
              selectedCategories={selectedCategories}
              selectedColors={selectedColors}
              selectedSizes={selectedSizes}
              selectedBrands={selectedBrands}
              priceRange={priceRange}
              setSelectedCategories={setSelectedCategories}
              setSelectedColors={setSelectedColors}
              setSelectedSizes={setSelectedSizes}
              setSelectedBrands={setSelectedBrands}
              setPriceRange={setPriceRange}
              minPrice={minPrice}
              maxPrice={maxPrice}
            />
            <button
              onClick={() => setShowMobileFilter(false)}
              className="w-full mt-4 bg-black text-white py-2 rounded-md"
            >
              Apply Filters
            </button>
          </div>
          {/* Close area */}
          <div className="flex-1" onClick={() => setShowMobileFilter(false)} />
        </div>
      )}
    </div>
  );
};

// Reusable Filter UI
const Filters = ({
  categories,
  colors,
  sizes,
  brands,
  selectedCategories,
  selectedColors,
  selectedSizes,
  selectedBrands,
  priceRange,
  setSelectedCategories,
  setSelectedColors,
  setSelectedSizes,
  setSelectedBrands,
  setPriceRange,
  minPrice,
  maxPrice,
}) => (
  <>
    <FilterBlock title="Category" values={categories} selected={selectedCategories} setSelected={setSelectedCategories} />
    <FilterBlock title="Color" values={colors} selected={selectedColors} setSelected={setSelectedColors} capitalize />
    <FilterBlock title="Size" values={sizes} selected={selectedSizes} setSelected={setSelectedSizes} />
    <FilterBlock title="Brand" values={brands} selected={selectedBrands} setSelected={setSelectedBrands} />
    <div>
      <h3 className="font-bold text-lg mb-2">Price</h3>
      <div className="flex gap-2 items-center">
        <input
          type="number"
          min={minPrice}
          max={priceRange[1]}
          value={priceRange[0]}
          onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
          className="w-20 border p-1 text-sm"
        />
        <span>-</span>
        <input
          type="number"
          min={priceRange[0]}
          max={maxPrice}
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
          className="w-20 border p-1 text-sm"
        />
      </div>
    </div>
  </>
);

const FilterBlock = ({ title, values, selected, setSelected, capitalize = false }) => (
  <div className="mb-4">
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    {values.map((val) => (
      <label key={val} className="block text-sm mb-1">
        <input
          type="checkbox"
          checked={selected.includes(val)}
          onChange={() =>
            setSelected((prev) =>
              prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
            )
          }
          className="mr-2 accent-black"
        />
        <span className={capitalize ? "capitalize" : ""}>{val}</span>
      </label>
    ))}
  </div>
);

export default Menspage;
