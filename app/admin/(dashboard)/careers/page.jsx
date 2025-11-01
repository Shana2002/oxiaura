"use client";

import AdminCareersPage from "@/components/admin/AdminCareersPage";
import ShowProdcuts from "@/components/admin/ShowProdcuts"; // or rename to ShowJobs
import React, { useState, useEffect } from "react";

const Careers = () => {
  const [formData, setFormData] = useState({
    title: "",
    level: "",
    slug: "",
    description: "",
    qualifications: [],
    experience: [],
    offers: [],
    salary: "",
    imageUrl: "",
  });

  const [jobs, setJobs] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reload, setReload] = useState(false);

  // fetch jobs
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/careers");
        if (!res.ok) throw new Error("Failed to fetch jobs");
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setError("Failed to load jobs");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
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
      setFormData((prev) => ({ ...prev, imageUrl: data.url }));
    } catch (err) {
      console.error(err);
      alert("Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) uploadImage(file);
  };

  // 🔹 Dynamic array handlers for qualifications, experience, offers
  const addArrayItem = (field) => {
    setFormData((prev) => ({ ...prev, [field]: [...prev[field], ""] }));
  };

  const updateArrayItem = (field, index, value) => {
    const updated = [...formData[field]];
    updated[index] = value;
    setFormData((prev) => ({ ...prev, [field]: updated }));
  };

  const removeArrayItem = (field, index) => {
    const updated = formData[field].filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, [field]: updated }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = isEditing ? "PUT" : "POST";
      const url = isEditing ? `/api/careers/${editId}` : "/api/careers";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error(`Failed to save job`);
      setReload((prev) => !prev);
      clearForm();
    } catch (error) {
      console.error("Error saving job:", error);
      alert("Error saving job");
    }
  };

  const handleEdit = (job) => {
    setFormData({ ...job });
    setIsEditing(true);
    setEditId(job.id);
  };

  const clearForm = () => {
    setFormData({
      title: "",
      level: "",
      slug: "",
      description: "",
      qualifications: [],
      experience: [],
      offers: [],
      salary: "",
      imageUrl: "",
    });
    setIsEditing(false);
    setEditId(null);
  };

  return (
    <div className="w-full h-full flex justify-center gap-4">
      <AdminCareersPage jobs={jobs} setJobs={setJobs} onClickEdit={handleEdit}/>

      <div className="w-1/2 h-[95vh] rounded-2xl shadow-2xl p-4 flex flex-col overflow-y-auto">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-3xl font-bold">{isEditing ? "Edit Job" : "Add Job"}</h1>
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
          {/* Image */}
          {formData.imageUrl && (
            <img
              src={formData.imageUrl}
              alt="Job"
              className="w-48 h-48 object-cover rounded-lg border mb-2"
            />
          )}
          <input type="file" accept="image/*" onChange={handleImageChange} />

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Job Title"
            className="border p-2 rounded-md"
            required
          />
          <input
            type="text"
            name="level"
            value={formData.level}
            onChange={handleChange}
            placeholder="Level (Junior, Senior, etc.)"
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
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Job Description"
            className="border p-2 rounded-md"
            rows="3"
          />

          {/* Dynamic Array Fields */}
          {["qualifications", "experience", "offers"].map((field) => (
            <div key={field} className="border p-3 rounded-md bg-gray-50">
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-semibold text-lg">{field.charAt(0).toUpperCase() + field.slice(1)}</h2>
                <button
                  type="button"
                  onClick={() => addArrayItem(field)}
                  className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-md text-sm"
                >
                  + Add
                </button>
              </div>
              {formData[field].map((item, i) => (
                <div key={i} className="flex items-center gap-2 mb-1">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => updateArrayItem(field, i, e.target.value)}
                    className="border p-2 rounded-md w-full"
                  />
                  <button
                    type="button"
                    onClick={() => removeArrayItem(field, i)}
                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          ))}

          <input
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            placeholder="Salary"
            className="border p-2 rounded-md"
          />

          <button
            type="submit"
            className={`${
              isEditing ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
            } text-white font-semibold py-2 px-4 rounded-md transition`}
          >
            {isEditing ? "Update Job" : "Add Job"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Careers;
