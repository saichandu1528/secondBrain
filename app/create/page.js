"use client";

import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CreatePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [type, setType] = useState("note");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const tagsArray = tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag);

      const response = await axios.post("/api/notes", {
        title: title.trim(),
        content: content.trim(),
        tags: tagsArray,
        type,
      });

 
      setTitle("");
      setContent("");
      setTags("");
      setError("");

      alert("✅ Note saved with AI summary!");
      window.location.href = "/dashboar"; 
    } catch (err) {
      console.error("Save error:", err);
      setError(
        "Error saving note: " +
          (err.response?.data?.error || err.message || "Unknown error"),
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0}}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-black text-gray-800 mb-4">
            Create Knowledge
          </h1>
          <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border-4 border-black"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
       
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100/50 transition-all text-lg"
                placeholder="title"
                required
                disabled={loading}
              />
            </div>


            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Content
              </label>
              <textarea
                rows="8"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100/50 transition-all text-lg resize-vertical"
                placeholder="useState is a React Hook that allows you to add state to function components..."
                required
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Type
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:ring-4 focus:ring-green-100/50 transition-all text-lg"
                disabled={loading}
              >
                <option value="note">Note</option>
                <option value="idea">Idea</option>
                <option value="task">Task</option>
                <option value="quote">Quote</option>
              </select>
            </div>


            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-50 border-2 border-red-200 rounded-2xl text-red-800 font-medium"
              >
                {error}
              </motion.div>
            )}

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading || !title.trim() || !content.trim()}
                className="flex-1 px-8 py-4 bg-linear-to-r from-gray-900 to-black text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:from-gray-800 hover:to-gray-700 border-2 border-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 text-lg"
              >
                {loading ? "🤖 AI Generating..." : "💾 Save Knowledge"}
              </motion.button>

              <Link
                href="/dashboar"
                className="px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:from-blue-700 hover:to-purple-700 border-2 border-blue-700 transition-all duration-300 text-lg whitespace-nowrap"
              >
                ← Dashboard
              </Link>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
