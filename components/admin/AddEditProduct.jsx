import React from 'react'

const AddEditProduct = () => {
  return (
    <div className="w-1/2 h-[95vh] rounded-2xl shadow-2xl p-4 flex flex-col overflow-y-auto">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-3xl font-bold">
            {isEditing ? "Edit Product" : "Add Product"}
          </h1>
          {isEditing && (
            <button
              onClick={clearForm}
              className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded-md"
            >
              Clear
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Product Title"
            className="border p-2 rounded-md"
            required
          />
          <input
            type="text"
            name="subtitle"
            value={formData.subtitle}
            onChange={handleChange}
            placeholder="Subtitle"
            className="border p-2 rounded-md"
          />
          <input
            type="text"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            placeholder="Slug"
            className="border p-2 rounded-md"
          />
          <textarea
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            placeholder="Description"
            className="border p-2 rounded-md"
            rows="3"
          />
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Main Image URL"
            className="border p-2 rounded-md"
          />

          {/* Paragraphs Section */}
          <div className="border p-3 rounded-md bg-gray-50">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold text-lg">Paragraphs</h2>
              <button
                type="button"
                onClick={addParagraph}
                className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-md text-sm"
              >
                + Add
              </button>
            </div>
            {formData.paragraphs.map((p, i) => (
              <div key={i} className="flex flex-col gap-1 mb-2 border-b pb-2">
                <input
                  type="text"
                  value={p.title}
                  onChange={(e) => updateParagraph(i, "title", e.target.value)}
                  placeholder="Paragraph Title"
                  className="border p-2 rounded-md"
                />
                <textarea
                  value={p.paragraph}
                  onChange={(e) =>
                    updateParagraph(i, "paragraph", e.target.value)
                  }
                  placeholder="Paragraph Text"
                  className="border p-2 rounded-md"
                  rows="2"
                />
                <button
                  type="button"
                  onClick={() => removeParagraph(i)}
                  className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md text-sm self-end"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Sub Images Section */}
          <div className="border p-3 rounded-md bg-gray-50">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold text-lg">Sub Images</h2>
              <input
                type="file"
                accept="image/*"
                onChange={handleAddSubImage}
                className="text-sm"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.subImages.map((img, i) => (
                <div key={i} className="relative">
                  <img
                    src={img}
                    alt={`sub-${i}`}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <button
                    type="button"
                    onClick={() => removeSubImage(i)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex justify-center items-center"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className={`${
              isEditing
                ? "bg-green-600 hover:bg-green-700"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white font-semibold py-2 px-4 rounded-md transition`}
          >
            {isEditing ? "Update Product" : "Add Product"}
          </button>
        </form>
      </div>
  )
}

export default AddEditProduct