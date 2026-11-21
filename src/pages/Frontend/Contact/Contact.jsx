const Contact = () => {
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

        <div className="mt-10">
          <h3 className="text-center text-2xl sm:text-3xl font-bold text-gray-900">
            Contact Us
          </h3>
          <div className="w-16 h-1 bg-orange-400 mx-auto my-4 rounded-full" />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-8 rounded-2xl bg-white border border-orange-100 shadow-xs hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/10 transition-all">
              <div className="w-12 h-12 mx-auto mb-4 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Visit Us For Web Development
              </h4>
              <p className="text-gray-600 text-sm">
                Fsd
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-orange-100 shadow-xs hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/10 transition-all">
              <div className="w-12 h-12 mx-auto mb-4 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Hours
              </h4>
              <p className="text-gray-600 text-sm">
                8:00 AM - 9:00 PM Daily
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-orange-100 shadow-xs hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/10 transition-all">
              <div className="w-12 h-12 mx-auto mb-4 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Call Us
              </h4>
              <p className="text-gray-600 text-sm">
                +92 315-0588862
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact
