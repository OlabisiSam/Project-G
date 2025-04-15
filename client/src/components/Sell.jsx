import  { useState } from "react"
import { FiUpload, FiX } from "react-icons/fi"

export default function Sell() {
  const [images, setImages] = useState([])
  const [price, setPrice] = useState(50)
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    condition: "",
    description: "",
    location: "",
  })

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
      setImages((prev) => [...prev, ...newImages])
    }
  }

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index))
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ ...formData, price, images })
    alert("Your item has been listed successfully!")
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="mb-6 text-3xl font-bold">Sell an Item</h1>
      <div className="border rounded-lg p-6 shadow bg-white">
        <h2 className="text-xl font-semibold mb-1">Item Details</h2>
        <p className="text-gray-500 mb-6">Provide detailed information about the item you want to sell.</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="e.g., Calculus Textbook, Desk Lamp"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleSelectChange}
              required
              className="w-full border rounded px-3 py-2"
            >
              <option value="" disabled>Select a category</option>
              <option value="textbooks">Textbooks</option>
              <option value="furniture">Furniture</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Condition */}
          <div>
            <label className="block text-sm font-medium mb-1">Condition</label>
            <select
              name="condition"
              value={formData.condition}
              onChange={handleSelectChange}
              required
              className="w-full border rounded px-3 py-2"
            >
              <option value="" disabled>Select condition</option>
              <option value="like-new">Like New</option>
              <option value="excellent">Excellent</option>
              <option value="good">Good</option>
              <option value="fair">Fair</option>
              <option value="poor">Poor</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label htmlFor="price" className="block text-sm font-medium mb-1">
              Price (${price})
            </label>
            <input
              id="price"
              type="range"
              min={1}
              max={500}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>$1</span>
              <span>$500+</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-1">Description</label>
            <textarea
              id="description"
              name="description"
              rows={4}
              placeholder="Describe your item in detail (condition, features, etc.)"
              value={formData.description}
              onChange={handleInputChange}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className="block text-sm font-medium mb-1">Preferred Meeting Location</label>
            <input
              id="location"
              name="location"
              placeholder="e.g., University Library, Student Center"
              value={formData.location}
              onChange={handleInputChange}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium mb-2">Images</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {images.map((img, index) => (
                <div key={index} className="relative aspect-square border rounded overflow-hidden">
                  <img src={img} alt={`upload-${index}`} className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full"
                  >
                    <FiX className="w-4 h-4" />
                  </button>
                </div>
              ))}
              {images.length < 4 && (
                <label className="flex flex-col items-center justify-center border-2 border-dashed rounded cursor-pointer aspect-square">
                  <FiUpload className="text-gray-400 w-6 h-6 mb-1" />
                  <span className="text-xs text-gray-400">Upload Image</span>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              )}
            </div>
            <p className="text-xs text-gray-400 mt-1">Upload up to 4 images. First image will be the cover image.</p>
          </div>

          {/* Submit */}
          <div className="space-y-2">
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
              List Item for Sale
            </button>
            <p className="text-center text-xs text-gray-400">
              By listing this item, you agree to our{" "}
              <a href="/terms" className="text-blue-600 hover:underline">Terms of Service</a> and{" "}
              <a href="/safety-tips" className="text-blue-600 hover:underline">Safety Guidelines</a>.
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
