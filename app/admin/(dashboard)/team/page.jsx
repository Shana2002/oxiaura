"use client";

import React, { useState, useEffect } from "react";
import ShowProdcuts from "@/components/admin/ShowProdcuts"; // You can rename to ShowTeam
import AdminTeamShow from "@/components/admin/AdminTeamShow";

const AdminTeam = () => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    bio: "",
    imageUrl: "",
    showAt: [], // e.g., ["homepage", "about"]
  });

  const [team, setTeam] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);

  // Fetch team members
  useEffect(() => {
    const fetchTeam = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/team");
        if (!res.ok) throw new Error("Failed to fetch team members");
        const data = await res.json();
        setTeam(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTeam();
  }, [reload]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleShowAtChange = (value) => {
    setFormData((prev) => {
      const updated = prev.showAt.includes(value)
        ? prev.showAt.filter((v) => v !== value)
        : [...prev.showAt, value];
      return { ...prev, showAt: updated };
    });
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

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = await uploadImage(file);
    if (url) setFormData((prev) => ({ ...prev, imageUrl: url }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = isEditing ? "PUT" : "POST";
      const url = isEditing ? `/api/team/${editId}` : "/api/team";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to save team member");
      setReload((prev) => !prev);
      clearForm();
    } catch (err) {
      console.error(err);
      alert("Error saving team member");
    }
  };

  const handleEdit = (member) => {
    setFormData({ ...member });
    setIsEditing(true);
    setEditId(member.id);
  };

  const clearForm = () => {
    setFormData({
      name: "",
      title: "",
      bio: "",
      imageUrl: "",
      showAt: [],
    });
    setIsEditing(false);
    setEditId(null);
  };

  return (
    <div className="w-full h-full flex justify-center gap-4">
      {/* Team List */}
      <AdminTeamShow teams={team} setTeams={setTeam} onClickEdit={handleEdit} />

      {/* Team Form */}
      <div className="w-1/2 h-[95vh] rounded-2xl shadow-2xl p-4 flex flex-col overflow-y-auto">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-3xl font-bold">{isEditing ? "Edit Team Member" : "Add Team Member"}</h1>
          {isEditing && (
            <button onClick={clearForm} className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded-md">
              Clear
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {/* Image */}
          {formData.imageUrl && (
            <img src={formData.imageUrl} alt="Team" className="w-48 h-48 object-cover rounded-lg border mb-2" />
          )}
          <input type="file" accept="image/*" onChange={handleImageChange} />

          {/* Fields */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="border p-2 rounded-md"
            required
          />
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            className="border p-2 rounded-md"
          />
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Bio"
            className="border p-2 rounded-md"
            rows={4}
          />

          {/* Show At */}
          <div className="flex gap-2 items-center">
            {["GROUP", "PLANTATION"].map((page) => (
              <label key={page} className="flex items-center gap-1">
                <input
                  type="checkbox"
                  checked={formData.showAt.includes(page)}
                  onChange={() => handleShowAtChange(page)}
                  className="w-4 h-4"
                />
                <span className="capitalize">{page}</span>
              </label>
            ))}
          </div>

          <button
            type="submit"
            className={`${isEditing ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"} text-white font-semibold py-2 px-4 rounded-md transition`}
          >
            {isEditing ? "Update Member" : "Add Member"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminTeam;
