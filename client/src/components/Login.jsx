import React from "react"
import { Link } from "react-router-dom"

export default function Login() {
  return (
    <div className="container flex h-screen items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">Welcome back</h2>
          <p className="text-sm text-gray-500">Enter your credentials to sign in to your account</p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              id="email"
              type="email"
              placeholder="m.smith@university.edu"
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label htmlFor="password" className="text-sm font-medium">Password</label>
              <Link to="/forgot-password" className="text-sm text-[#4F6BED] hover:underline">Forgot password?</Link>
            </div>
            <input
              id="password"
              type="password"
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center space-x-2">
            <input id="remember" type="checkbox" className="h-4 w-4 text-[#4F6BED] border-gray-300" />
            <label htmlFor="remember" className="text-sm">Remember me</label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#4F6BED] hover:bg-[#4F6BED]/90 text-white py-2 rounded"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <div className="text-center text-sm mt-6">
          <span className="text-gray-500">Don't have an account? </span>
          <Link to="/register" className="text-[#4F6BED] hover:underline">Sign up</Link>
        </div>
      </div>
    </div>
  )
}
