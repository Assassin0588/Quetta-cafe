import { useState, useMemo } from "react"
import { Link } from "react-router-dom"

const MENU_ITEMS = [
  {
    id: 1,
    name: "Quetta Special Doodh Patti",
    category: "Chai & Drinks",
    price: "Rs. 120",
    badge: "Bestseller",
    description: "Slow-brewed rich creamy milk tea infused with crushed green cardamom and royal aroma.",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Kashmiri Pink Chai",
    category: "Chai & Drinks",
    price: "Rs. 180",
    badge: "Special",
    description: "Traditional brewed pink tea garnished with crushed pistachios, almonds, and sea salt hint.",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Peshawari Sulemani Kehwa",
    category: "Chai & Drinks",
    price: "Rs. 90",
    badge: "Digestive",
    description: "Golden green tea with fresh mint leaves, lemon slice, and pure organic honey touch.",
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Crispy Crispy Lacha Paratha",
    category: "Parathas",
    price: "Rs. 140",
    badge: "Chef's Special",
    description: "Signature golden multi-layered crispy flatbread fried in pure desi ghee to perfection.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Chicken Cheese Paratha",
    category: "Parathas",
    price: "Rs. 500",
    badge: "Hot Favorite",
    description: "Stuffed with tender marinated chicken shreds and melted stretchy mozzarella cheese.",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Spicy Aloo Achari Paratha",
    category: "Parathas",
    price: "Rs. 190",
    badge: "Popular",
    description: "Filled with seasoned spicy mashed potatoes, crushed cumin, and tangy pickle spices.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 7,
    name: "Quetta Desi Anda Ghotala",
    category: "Breakfast & Snacks",
    price: "Rs. 220",
    badge: "Breakfast",
    description: "Scrambled farm eggs sauteed with fresh onions, green chilies, tomatoes, and secret spices.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    name: "Charcoal Chicken Tikka Roll",
    category: "Breakfast & Snacks",
    price: "Rs. 500",
    badge: "Bestseller",
    description: "Smoky charcoal grilled chicken wrapped in warm paratha with onions and mint yogurt chutney.",
    image: "https://i.pinimg.com/736x/33/6c/16/336c1604387e8dc637c5397e73100426.jpg",
  },
  {
    id: 9,
    name: "Crispy Samosa Chaat",
    category: "Breakfast & Snacks",
    price: "Rs. 180",
    badge: "Snack",
    description: "Golden potato samosas topped with spiced chickpeas, whipped yogurt, and sweet tamarind sauce.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 10,
    name: "Hot Gulab Jamun (2 Pcs)",
    category: "Desserts",
    price: "Rs. 150",
    badge: "Sweet",
    description: "Warm, melt-in-mouth soft khoya dumplings soaked in rose and cardamom sugar syrup.",
    image: "https://i.pinimg.com/736x/e5/62/80/e562801696214100612f4213da64da5f.jpg",
  },
  {
    id: 11,
    name: "Royal Shahi Tukray",
    category: "Desserts",
    price: "Rs. 220",
    badge: "Traditional",
    description: "Crispy fried bread slices dipped in saffron cardamom milk topped with thick rabri and nuts.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
  },
]

const CATEGORIES = ["All", "Chai & Drinks", "Parathas", "Breakfast & Snacks", "Desserts"]

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <main className="min-h-screen bg-white text-gray-900 px-4 sm:px-6 lg:px-8 py-10 pb-28">
      <div className="max-w-7xl mx-auto">
        {/* Hero Banner */}
        <header className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest text-orange-600 bg-orange-50 border border-orange-200 uppercase mb-3">
            Authentic Taste of Tradition
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Quetta Cafe
          </h1>
          <h2 className="text-sm sm:text-lg md:text-xl text-gray-500 mt-2 tracking-widest uppercase font-medium">
            Traditional Flavours, Modern Table
          </h2>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto mt-4 rounded-full" />
          <p className="max-w-2xl mx-auto text-gray-600 text-sm sm:text-base mt-4 leading-relaxed">
            Welcome to our cafe menu! Explore our piping hot Karak chai, flaky golden parathas, and mouth-watering bites freshly made to order.
          </p>
        </header>

        {/* Search & Filter Controls */}
        <section className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white shadow-md shadow-orange-500/25"
                    : "bg-white text-gray-600 hover:text-orange-600 hover:bg-orange-50 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="w-full md:w-72 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search chai, paratha..."
              className="w-full bg-white border border-gray-200 text-gray-900 rounded-full py-2 pl-10 pr-4 text-sm placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-xs transition-colors"
            />
            <svg
              className="w-4 h-4 text-gray-400 absolute left-3.5 top-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </section>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            <p className="text-lg">No dishes found matching your search.</p>
            <button
              onClick={() => {
                setSelectedCategory("All")
                setSearchQuery("")
              }}
              className="mt-4 px-5 py-2 bg-orange-50 hover:bg-orange-100 text-orange-600 text-sm font-semibold rounded-full border border-orange-200 cursor-pointer transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((dish) => (
              <article
                key={dish.id}
                className="group bg-white border border-orange-100 rounded-2xl overflow-hidden hover:border-orange-300 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-lg hover:shadow-orange-500/10"
              >
                {/* Dish Image */}
                <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-orange-50">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {dish.badge && (
                    <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {dish.badge}
                    </span>
                  )}
                  <span className="absolute bottom-3 left-3 bg-white/90 text-gray-700 text-xs px-2.5 py-1 rounded-md border border-gray-200/80 backdrop-blur-sm shadow-xs font-medium">
                    {dish.category}
                  </span>
                </div>

                {/* Dish Info */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                        {dish.name}
                      </h3>
                      <span className="text-orange-600 font-extrabold text-base sm:text-lg whitespace-nowrap">
                        {dish.price}
                      </span>
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {dish.description}
                    </p>
                  </div>

                  {/* Order button linking to Contact */}
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-emerald-600 flex items-center gap-1.5 font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Freshly Prepared
                    </span>
                    <Link
                      to="/contact"
                      className="px-4 py-1.5 bg-orange-50 hover:bg-orange-500 text-orange-600 hover:text-white rounded-full text-xs font-semibold border border-orange-200 hover:border-orange-500 transition-all duration-300"
                    >
                      Order Now
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </section>
        )}

        {/* Bottom CTA / Visit Us Section */}
        <section className="mt-16 p-8 sm:p-12 rounded-3xl  from-orange-50 via-white to-orange-100/60 border border-orange-200 text-center shadow-md shadow-orange-500/5">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Craving Fresh Chai & Paratha?
          </h3>
          <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Dine in with us or place a takeaway order directly. We are open daily from 8:00 AM to 9:00 PM.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full text-sm transition-all duration-300 shadow-md shadow-orange-500/25"
            >
              Contact & Directions
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 bg-white hover:bg-orange-50 text-gray-700 hover:text-orange-600 font-semibold rounded-full text-sm border border-gray-300 hover:border-orange-300 transition-all duration-300"
            >
              Our Story
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home
