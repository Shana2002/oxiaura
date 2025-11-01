"use client";

import React, { useState, useEffect } from "react";
import ShowProdcuts from "@/components/admin/ShowProdcuts"; // You can rename to ShowBlogs

const AdminBlogs = () => {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    image: "",
    content: [], // JSON array: [{type: "paragraph"|"subtitle"|"image", value: "text/url"}]
  });

  const [blogs, setBlogs] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);

  // Fetch blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/blogs");
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [reload]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const uploadImage = async (file) => {
    try {
      setUploading(true);
      const form = new FormData();
      form.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: form });
      if (!res.ok) throw new Error("Upload failed");
      const data = await res.json();
      return data.url;
    } catch (err) {
      console.error(err);
      alert("Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleContentChange = (index, value) => {
    const updated = [...formData.content];
    updated[index].value = value;
    setFormData((prev) => ({ ...prev, content: updated }));
  };

  const handleContentTypeChange = (index, type) => {
    const updated = [...formData.content];
    updated[index].type = type;
    setFormData((prev) => ({ ...prev, content: updated }));
  };

  const addContentItem = (type = "paragraph") => {
    setFormData((prev) => ({
      ...prev,
      content: [...prev.content, { type, value: "" }],
    }));
  };

  const removeContentItem = (index) => {
    const updated = formData.content.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, content: updated }));
  };

  const handleContentImageUpload = async (index, file) => {
    const url = await uploadImage(file);
    if (url) handleContentChange(index, url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = isEditing ? "PUT" : "POST";
      const url = isEditing ? `/api/blogs/${editId}` : "/api/blogs";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to save blog");
      setReload((prev) => !prev);
      clearForm();
    } catch (err) {
      console.error(err);
      alert("Error saving blog");
    }
  };

  const handleEdit = (blog) => {
    setFormData({ ...blog });
    setIsEditing(true);
    setEditId(blog.id);
  };

  const clearForm = () => {
    setFormData({
      title: "",
      slug: "",
      image: "",
      content: [],
    });
    setIsEditing(false);
    setEditId(null);
  };

  return (
    <div className="w-full h-full flex justify-center gap-4">
      {/* Blog List */}
      <ShowProdcuts
        products={blogs}
        setProducts={setBlogs}
        onClickEdit={handleEdit}
      />

      {/* Blog Form */}
      <div className="w-1/2 h-[95vh] rounded-2xl shadow-2xl p-4 flex flex-col overflow-y-auto">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-3xl font-bold">{isEditing ? "Edit Blog" : "Add Blog"}</h1>
          {isEditing && (
            <button onClick={clearForm} className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded-md">
              Clear
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {/* Main Blog Image */}
          {formData.image && (
            <img src={formData.image} alt="Blog" className="w-48 h-48 object-cover rounded-lg border mb-2" />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={async (e) => {
              const file = e.target.files[0];
              if (file) {
                const url = await uploadImage(file);
                if (url) setFormData((prev) => ({ ...prev, image: url }));
              }
            }}
          />

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Blog Title"
            className="border p-2 rounded-md"
            required
          />
          <input
            type="text"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            placeholder="Slug"
            className="border p-2 rounded-md"
            required
          />

          {/* Dynamic Content */}
          <div className="border p-3 rounded-md bg-gray-50">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold text-lg">Content</h2>
              <button type="button" onClick={() => addContentItem()} className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-md text-sm">
                + Add Paragraph
              </button>
            </div>

            {formData.content.map((item, i) => (
              <div key={i} className="flex flex-col gap-1 mb-2 border-b pb-2">
                <select
                  value={item.type}
                  onChange={(e) => handleContentTypeChange(i, e.target.value)}
                  className="border p-2 rounded-md w-full"
                >
                  <option value="paragraph">Paragraph</option>
                  <option value="subtitle">Subtitle</option>
                  <option value="image">Image</option>
                </select>

                {item.type === "image" ? (
                  <>
                    {item.value && <img src={item.value} className="w-32 h-32 object-cover rounded-md" />}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleContentImageUpload(i, e.target.files[0])}
                    />
                  </>
                ) : (
                  <textarea
                    value={item.value}
                    onChange={(e) => handleContentChange(i, e.target.value)}
                    placeholder={item.type === "paragraph" ? "Paragraph Text" : "Subtitle"}
                    className="border p-2 rounded-md"
                    rows={item.type === "subtitle" ? 1 : 3}
                  />
                )}

                <button type="button" onClick={() => removeContentItem(i)} className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md text-sm self-end">
                  Remove
                </button>
              </div>
            ))}
          </div>

          <button type="submit" className={`${isEditing ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"} text-white font-semibold py-2 px-4 rounded-md transition`}>
            {isEditing ? "Update Blog" : "Add Blog"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminBlogs;
