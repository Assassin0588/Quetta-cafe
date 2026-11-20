import { message } from "antd"
import { useState } from "react"
import { Link } from "react-router-dom"

const initialState = { email: "" }

const Forget = () => {
  const [state, setState] = useState(initialState)

  const handleChange = (e) => { setState({ ...state, [e.target.name]: e.target.value }) }

  const handleSubmit = (e) => {
    e.preventDefault()
    let { email } = state
    try {
      const users = JSON.parse(localStorage.getItem("users")) || []
      const user = users.find((user) => user.email === email)
      if (user) {
        message.success("Email found! Reset instructions have been sent.")
      } else {
        message.error("No account found with this email.")
      }
    } catch (error) {
      console.error("Something went wrong", error)
      message.error("Something went wrong")
    }
  }

  const { email } = state

  return (
    <main className="min-h-[calc(100vh-5rem)]  from-white via-orange-50/20 to-white text-gray-900 flex items-center justify-center px-4 py-12 pb-28">
      <div className="w-full max-w-md bg-white border border-orange-100 rounded-3xl p-6 sm:p-10 shadow-xl shadow-orange-500/5 relative overflow-hidden">
        {/* Subtle decorative top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1  from-transparent via-orange-500 to-transparent" />

        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-orange-600 bg-orange-50 border border-orange-200 uppercase mb-2">
            Quetta Cafe Member
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Forget Password
          </h1>
          <p className="text-gray-500 text-xs sm:text-sm mt-2">
            Forget your password? Enter your email address and we'll send you a link to reset it.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5 ml-1">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-200"
              />
              <span className="absolute right-3.5 top-3.5 text-gray-400 pointer-events-none">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
            </div>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-4 rounded-full transition-all duration-300 shadow-md shadow-orange-500/25 text-sm tracking-wide cursor-pointer active:scale-[0.98]"
          >
            Send Reset Link
          </button>
        </form>

        {/* Back to login link */}
        <p className="text-center text-xs sm:text-sm text-gray-500 mt-6">
          Remember your password?{" "}
          <Link
            to="/login"
            className="text-orange-600 hover:text-orange-700 font-semibold transition-colors duration-200 hover:underline ml-1"
          >
            Log in
          </Link>
        </p>
      </div>
    </main>
  )
}

export default Forget
