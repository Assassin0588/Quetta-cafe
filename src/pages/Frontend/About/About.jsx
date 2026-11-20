const About = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-4 py-12 pb-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide text-gray-900">
          Quetta Cafe
        </h1>
        <h2 className="text-center text-lg sm:text-2xl md:text-3xl text-gray-500 mt-2 tracking-wider uppercase font-medium">
          Traditional Flavours, Modern Table
        </h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto my-6 rounded-full" />

        {/* About Section */}
        <div className="mt-10 bg-orange-50/40 border border-orange-100 rounded-3xl p-8 sm:p-10 shadow-xs">
          <h3 className="text-center text-2xl sm:text-3xl font-bold text-gray-900">
            About Us
          </h3>
          <div className="w-16 h-1 bg-orange-400 mx-auto my-4 rounded-full" />
          <p className="text-gray-600 text-sm sm:text-base text-center leading-relaxed max-w-2xl mx-auto">
            Quetta Cafe blends traditional recipes with a modern dining experience. From rich curries to fresh bread and vibrant teas, every dish is made with the best ingredients. Whether you're here for a quick bite or a full meal, we promise quality and flavour in every bite.
          </p>
        </div>

        {/* Stats Section */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-6 rounded-2xl bg-white border border-orange-100 shadow-xs hover:border-orange-300 transition-colors">
            <p className="text-3xl sm:text-4xl font-extrabold text-orange-600">10+</p>
            <p className="text-gray-500 text-xs sm:text-sm font-medium mt-1">Years Serving</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-orange-100 shadow-xs hover:border-orange-300 transition-colors">
            <p className="text-3xl sm:text-4xl font-extrabold text-orange-600">50+</p>
            <p className="text-gray-500 text-xs sm:text-sm font-medium mt-1">Dishes</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-orange-100 shadow-xs hover:border-orange-300 transition-colors">
            <p className="text-3xl sm:text-4xl font-extrabold text-orange-600">100%</p>
            <p className="text-gray-500 text-xs sm:text-sm font-medium mt-1">Fresh</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-orange-100 shadow-xs hover:border-orange-300 transition-colors">
            <p className="text-3xl sm:text-4xl font-extrabold text-orange-600">1M+</p>
            <p className="text-gray-500 text-xs sm:text-sm font-medium mt-1">Customers</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About
