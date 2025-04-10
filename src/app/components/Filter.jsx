import React from "react";

const Filter = ({ applyFilter }) => {
  const handleFilter = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const filterData = Object.fromEntries(formData.entries());
    applyFilter(filterData);
  };

  return (
    <form onSubmit={handleFilter} className="mx-4 md:mx-16 my-8">
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-4">
        <input
          type="number"
          name="minPrice"
          placeholder="Minimum Price"
          className="border p-2 rounded w-auto"
          min="0"
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Maximum Price"
          className="border p-2 rounded w-auto"
          min="0"
        />
        <input
          type="number"
          name="minPopularity"
          placeholder="Minimum Popularity"
          className="border p-2 rounded w-auto"
          min="0"
          step="0.5"
        />
        <button
          type="submit"
          className="bg-gray-500 text-white p-2 cursor-pointer rounded w-full sm:w-auto hover:bg-gray-700"
        >
          Filter
        </button>
      </div>
    </form>
  );
};

export default Filter;
