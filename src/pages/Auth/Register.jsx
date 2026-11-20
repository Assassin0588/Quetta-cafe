import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { message } from "antd"

const initialState = { username: "", email: "", password: "", confirmPassword: "" }
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const Register = () => {
  const [state, setState] = useState(initialState)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => { setState({ ...state, [e.target.name]: e.target.value }) }

  const handleSubmit = (e) => {
    e.preventDefault()
    let { username, email, password, confirmPassword } = state
    username = (username || "").trim()
    email = (email || "").trim().toLowerCase()

    if (username.length < 3) {
      return message.error("Username must be at least 3 characters")
    }
    if (!emailRegex.test(email)) {
      return message.error("Please enter a valid email address")
    }
    if (password.length < 8) {
      return message.error("Password must be at least 8 characters")
    }
    if (password !== confirmPassword) {
      return message.error("Passwords do not match")
    }
    let user = { username, email, password }
    user.id = Math.random().toString(36).slice(2)
    user.createdAt = new Date().getTime()
    console.log("user", user)

    try {
      let users = JSON.parse(localStorage.getItem("users")) || []
      users.push(user)
      localStorage.setItem("users", JSON.stringify(users))
      message.success("Account created successfully!")
      navigate("/login")
    } catch (error) {
      message.error("Error , Something wents wrong")
      
    }
  }
  return (
    <main className="min-h-[calc(100vh-5rem)] from-white via-orange-50/20 to-white text-gray-900 flex items-center justify-center px-4 py-12 pb-28">
      <div className="w-full max-w-md bg-white border border-orange-100 rounded-3xl p-6 sm:p-10 shadow-xl shadow-orange-500/5 relative overflow-hidden">
        {/* Subtle decorative top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 from-transparent via-orange-500 to-transparent" />

        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-orange-600 bg-orange-50 border border-orange-200 uppercase mb-2">
            Quetta Cafe Member
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Create an Account
          </h1>
          <p className="text-gray-500 text-xs sm:text-sm mt-2">
            Join us for exclusive deals, rewards, and fast orders.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5 ml-1">
              Username
            </label>
            <div className="relative">
              <input
                type="text"
                name="username"
                value={state.username}
                onChange={handleChange}
                placeholder="Enter your username"
                required
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-200"
              />
              <span className="absolute right-3.5 top-3.5 text-gray-400 pointer-events-none">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5 ml-1">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={state.email}
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

          {/* Password */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5 ml-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={state.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 pr-11 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-700 transition-colors p-0.5 rounded focus:outline-none cursor-pointer"
              >
                {showPassword ? (
                  // Eye Slash (Hide)
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"
                    />
                  </svg>
                ) : (
                  // Eye (Show)
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5 ml-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={state.confirmPassword}
                onChange={handleChange}
                placeholder="Enter your confirm password"
                required
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 pr-11 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-700 transition-colors p-0.5 rounded focus:outline-none cursor-pointer"
              >
                {showConfirmPassword ? (
                  // Eye Slash (Hide)
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"
                    />
                  </svg>
                ) : (
                  // Eye (Show)
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-4 rounded-full transition-all duration-300 shadow-md shadow-orange-500/25 text-sm tracking-wide cursor-pointer active:scale-[0.98]"
          >
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-3 text-gray-400">Or continue with</span>
          </div>
        </div>

        {/* Footer Link */}
        <p className="text-center text-xs sm:text-sm text-gray-500">
          Already have an account?{" "}
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

export default Register
