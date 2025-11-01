"use client";

import ShowProdcuts from "@/components/admin/ShowProdcuts";
import React, { useState,useEffect } from "react";

const Products = () => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    desc: "",
    image: "",
    slug: "",
    paragraphs: [],
    subImages: [],
  });
  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [reload]);

  // 🧩 handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 🖼️ upload image (main or sub)
  const uploadImage = async (file, type = "main") => {
    try {
      setUploading(true);

      const form = new FormData();
      form.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: form,
      });

      if (!res.ok) throw new Error("Upload failed");

      const data = await res.json();
      const imageUrl = data.url; // returned uploaded URL

      if (type === "main") {
        setFormData((prev) => ({ ...prev, image: imageUrl }));
      } else {
        setFormData((prev) => ({
          ...prev,
          subImages: [...prev.subImages, imageUrl],
        }));
      }
    } catch (err) {
      console.error("Upload error:", err);
      alert("Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  // 📷 Handle main image change
  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    if (file) uploadImage(file, "main");
  };

  // 📸 Handle sub-image add
  const handleAddSubImage = (e) => {
    const file = e.target.files[0];
    if (file) uploadImage(file, "sub");
  };

  // ❌ Remove sub-image
  const removeSubImage = (index) => {
    const updated = formData.subImages.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, subImages: updated }));
  };

  // 🧾 Paragraphs
  const addParagraph = () => {
    setFormData((prev) => ({
      ...prev,
      paragraphs: [...prev.paragraphs, { title: "", paragraph: "" }],
    }));
  };

  const updateParagraph = (index, field, value) => {
    const updated = [...formData.paragraphs];
    updated[index][field] = value;
    setFormData((prev) => ({ ...prev, paragraphs: updated }));
  };

  const removeParagraph = (index) => {
    const updated = formData.paragraphs.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, paragraphs: updated }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = isEditing ? "PUT" : "POST";
      const url = isEditing ? `/api/products/${editId}` : "/api/products";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to save product");
      const newProduct = await res.json();

      setReload(prev => !prev);

      clearForm();
    } catch (error) {
      console.error("Error saving product:", error);
      alert("Error saving product");
    }
  };

  const handleEdit = (product) => {
    setFormData({
      title: product.title,
      subtitle: product.subtitle,
      desc: product.desc,
      image: product.image,
      slug: product.slug,
      paragraphs: product.paragraphs || [],
      subImages: product.subImages || [],
    });
    setIsEditing(true);
    setEditId(product.id);
  };

  const clearForm = () => {
    setFormData({
      id: "",
      title: "",
      subtitle: "",
      desc: "",
      image: "",
      slug: "",
      paragraphs: [],
      subImages: [],
    });
    setIsEditing(false);
    setEditId(null);
  };

  return (
    <div className="w-full h-full flex justify-center gap-4">
      <ShowProdcuts
        products={products}
        setProducts={setProducts}
        onClickEdit={(product) => handleEdit(product)}
      />

      <div className="w-1/2 h-[95vh] rounded-2xl shadow-2xl p-4 flex flex-col overflow-y-auto">
        {/* Title + Clear */}
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
          {/* 🖼️ Main Image Preview */}
          {formData.image ? (
            <div className="relative w-full flex flex-col items-center mb-2">
              <img
                src={formData.image}
                alt="Product"
                className="w-48 h-48 object-cover rounded-lg border"
              />
              <label
                htmlFor="mainImage"
                className="absolute bottom-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded-md cursor-pointer"
              >
                Change Image
              </label>
              <input
                id="mainImage"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleMainImageChange}
              />
            </div>
          ) : (
            <div className="border-2 border-dashed p-4 text-center rounded-md">
              <label
                htmlFor="mainImage"
                className="cursor-pointer text-blue-600 font-semibold"
              >
                Upload Main Image
              </label>
              <input
                id="mainImage"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleMainImageChange}
              />
            </div>
          )}

          {/* Uploading status */}
          {uploading && (
            <p className="text-sm text-gray-500 italic">Uploading image...</p>
          )}

          {/* Basic Fields */}
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

          {/* 🧾 Paragraphs Section */}
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

          {/* 🖼️ Sub Images Section */}
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
    </div>
  );
};

export default Products;
