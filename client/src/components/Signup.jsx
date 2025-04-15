import React from "react"
import { Link } from "react-router-dom"

export default function Signup() {
  return (
    <div className="container flex h-screen items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">Create an account</h2>
          <p className="text-sm text-gray-500">Enter your information to create an account</p>
        </div>

        <form className="space-y-4">
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium mb-1">First name</label>
              <input
                id="first-name"
                placeholder="John"
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-medium mb-1">Last name</label>
              <input
                id="last-name"
                placeholder="Doe"
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              id="email"
              type="email"
              placeholder="j.doe@university.edu"
              required
              className="w-full border rounded px-3 py-2"
            />
            <p className="text-xs text-gray-500 mt-1">Please use your university email address</p>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
            <input
              id="password"
              type="password"
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium mb-1">Confirm password</label>
            <input
              id="confirm-password"
              type="password"
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center space-x-2">
            <input id="terms" type="checkbox" required className="h-4 w-4 text-[#4F6BED] border-gray-300" />
            <label htmlFor="terms" className="text-sm">
              I agree to the{" "}
              <Link to="/terms" className="text-[#4F6BED] hover:underline">Terms of Service</Link> and{" "}
              <Link to="/privacy" className="text-[#4F6BED] hover:underline">Privacy Policy</Link>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#4F6BED] hover:bg-[#4F6BED]/90 text-white py-2 rounded"
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <div className="text-center text-sm mt-6">
          <span className="text-gray-500">Already have an account? </span>
          <Link to="/login" className="text-[#4F6BED] hover:underline">Sign in</Link>
        </div>
      </div>
    </div>
  )
}
