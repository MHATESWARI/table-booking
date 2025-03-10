import { useState } from "react"


const Filters = () => {
  const [Open, setOpen] = useState(false);
  const [showFilter, setshowFilter] = useState(null);


  return (
    <div className="font-poppins flex items-center justify-center min-h-screen bg-gray-200">
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-fuchsia-600 font-bold text-white rounded" >
        Open Filters
      </button>

      {Open && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50">
          <div className="bg-white w-[400px] md:w-[600px] p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Filters</h2>
              <button onClick={() => setOpen(false)} className="text-2xl">&times;</button>
            </div>

            <div className="flex">
              <div className="w-2/4 md:w-1/4 border-r pr-6 space-y-4 md:space-y-5 lg:space-y-5 text-gray-600 font-medium">
                {[
                  { name: "Popularity", id: "showpopularity" },
                  { name: "Cuisine Type", id: "showcuisine" },
                  { name: "Rating", id: "showrating" },
                  { name: "Cost Type", id: "showcost" }
                ].map(filter => (
                  <button
                    key={filter.id}
                    className={`border-l-4 pl-1 ${showFilter === filter.id ? "border-fuchsia-600" : "border-transparent"}`}
                    onClick={() => setshowFilter(filter.id)}>
                    {filter.name}
                  </button>
                ))}
              </div>

              <div className="w-4/6 md:w-2/3 pl-4">
                {showFilter === "showpopularity" && (
                  <div>
                    <p className="text-fuchsia-600 font-semibold mb-3">Popularity</p>
                    <div className="space-y-3">
                      {["Popularity", "Rating: High to Low", "Cost: Low to High", "Cost: High to Low", "Distance"].map(option => (
                        <label key={option} className="flex items-center space-x-2">
                          <input type="radio" name="sort" />
                          <span className="text-md font-medium text-black">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {showFilter === "showcuisine" && (
                  <div>
                    <p className="text-fuchsia-600 font-semibold mb-3">Cuisines</p>
                    <div className="h-40 overflow-y-auto mt-3 grid grid-cols-2 gap-3">
                      {["Indian", "Italian", "French", "Japanese", "Chinese", "Thai"].map(cuisine => (
                        <label key={cuisine} className="flex items-center space-x-2">
                          <input type="checkbox" />
                          <span className="text-md font-medium text-black">{cuisine}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {showFilter === "showrating" && (
                  <div>
                    <p className="text-fuchsia-600 font-semibold mb-3">Rating</p>
                    <div className="h-40 grid grid-cols-1 gap-3">
                      {[1, 2, 3, 4, 5].map(stars => (
                        <label key={stars} className="flex items-center space-x-2">
                          <input type="radio" name="rating" />
                          <span className="text-md font-medium text-black">{stars} star</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {showFilter === "showcost" && (
                  <div>
                    <p className="text-fuchsia-600 font-semibold mb-3">Cost Type</p>
                    <div className="h-40 grid grid-cols-1 gap-3">
                      {["Any to ₹ 500", "₹ 500 to ₹ 1000", "₹ 1000 to ₹ 1500", "₹ 1500 to ₹ 2000", "₹ 2000 Above"].map(cost => (
                        <label key={cost} className="flex items-center space-x-2">
                          <input type="radio" name="cost" />
                          <span className="text-md font-medium text-black">{cost}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button className="px-4 py-2 border rounded text-gray-600" onClick={() => setshowFilter(null)}>
                Clear all
              </button>
              <button className="px-4 py-2 bg-fuchsia-600 font-bold text-white rounded">
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Filters