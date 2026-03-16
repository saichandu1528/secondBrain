"use client";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

export default function Dashboar() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hoveredNote, setHoveredNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [sortBy, setSortBy] = useState("newest");


  useEffect(() => {
    const fetchNotes = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/notes");
        setNotes(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);

  // Filter + sort
  const filteredNotes = useMemo(() => {
    let filtered = notes.filter((note) => {
      const matchesSearch =
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.summary?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.content.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = filterType === "all" || note.type === filterType;
      return matchesSearch && matchesType;
    });

    if (sortBy === "newest")
      filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    else if (sortBy === "oldest")
      filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    else if (sortBy === "title")
      filtered.sort((a, b) => a.title.localeCompare(b.title));

    return filtered;
  }, [notes, searchTerm, filterType, sortBy]);

  return (
    <div className="min-h-screen bg-linear-to-br from-rose-50 via-pink-50 to-orange-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
     
        <div className="fixed top-6 right-6 z-50">
          <Link
            href="/"
            className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-sm flex items-center gap-2"
          >
            ← Home
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Dashboard
          </h1>
          <div className="w-32 h-1 bg-linear-to-r from-rose-400 to-pink-400 rounded-full mx-auto shadow-lg"></div>
          <p className="text-xl text-rose-700 font-light mt-4 max-w-2xl mx-auto">
            Organize your knowledge with AI-powered insights ✨
          </p>
        </motion.div>

     
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-2xl border border-rose-100 mb-8 sticky top-24 z-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
            {/* Search */}
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-rose-400">
                🔍
              </span>
              <input
                type="text"
                placeholder="Search notes, titles, AI summaries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-rose-200 rounded-2xl focus:border-rose-400 focus:ring-4 focus:ring-rose-100/50 transition-all text-lg bg-rose-50"
              />
            </div>

            {/* Filter */}
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-400">
                🎛️
              </span>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-pink-200 rounded-2xl focus:border-pink-400 focus:ring-4 focus:ring-pink-100/50 transition-all text-lg bg-pink-50 appearance-none"
              >
                <option value="all">All Types</option>
                <option value="note">📝 Notes</option>
                <option value="idea">💡 Ideas</option>
                <option value="task">✅ Tasks</option>
              </select>
            </div>

 
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400">
                📅
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-orange-200 rounded-2xl focus:border-orange-400 focus:ring-4 focus:ring-orange-100/50 transition-all text-lg bg-orange-50 appearance-none"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="title">A → Z</option>
              </select>
            </div>
          </div>
        </motion.div>

     
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {loading ? (
            Array.from({ length: 6 }).map((_, idx) => (
              <motion.div
                key={idx}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-rose-100 animate-pulse h-80"
              />
            ))
          ) : filteredNotes.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="col-span-full text-center py-24"
            >
              <div className="w-32 h-32 bg-linear-to-r from-rose-100 to-pink-100 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
                🔍
              </div>
              <h2 className="text-3xl font-bold text-rose-700 mb-4">
                No notes found
              </h2>
              <p className="text-xl text-rose-600 mb-8 max-w-md mx-auto">
                Try adjusting your search or filter settings
              </p>
              <Link
                href="/create"
                className="inline-flex items-center gap-3 bg-linear-to-r from-rose-500 to-pink-500 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-3xl hover:from-rose-600 hover:to-pink-600 transition-all duration-300 text-lg"
              >
                + Create Note
              </Link>
            </motion.div>
          ) : (
            <AnimatePresence>
              {filteredNotes.map((note) => (
                <motion.div
                  key={note._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="group bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-rose-100 cursor-pointer relative overflow-hidden h-80 flex flex-col hover:bg-linear-to-t hover:from-pink-50/50"
                  onMouseEnter={() => setHoveredNote(note)}
                  onMouseLeave={() => setHoveredNote(null)}
                >
           
                  <div className="absolute inset-0 bg-linear-to-t from-rose-500/5 to-transparent rounded-3xl group-hover:from-pink-500/10 transition-all duration-300" />

 
                  <div className="flex-1 flex flex-col relative z-10 space-y-2 p-2">
                  
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-bold text-gray-900 line-clamp-1 pr-10 flex-1">
                        {note.title}
                      </h3>
                      {note.summary && (
                        <span className="text-xs bg-linear-to-r from-blue-100 to-purple-100 text-blue-800 px-2.5 py-1 rounded-full font-bold whitespace-nowrap">
                          ✨ AI
                        </span>
                      )}
                    </div>

                
                    <p
                      className={`text-gray-700 text-sm leading-relaxed wrap-break-word transition-all duration-300 ${
                        hoveredNote?._id === note._id ? "" : "line-clamp-3"
                      }`}
                    >
                      {note.summary?.replace(/\n/g, " ") ||
                        note.content?.replace(/\n/g, " ")}
                    </p>
                  </div>

                
                  <div className="relative z-10 pt-2 border-t border-rose-100/50 flex justify-between text-xs">
                    <span className="px-2.5 py-1 bg-linear-to-r from-rose-100 to-pink-100 text-rose-700 rounded-full font-medium">
                      {note.type === "note"
                        ? "📝"
                        : note.type === "idea"
                          ? "💡"
                          : "✅"}
                    </span>
                    <span className="text-rose-600 font-medium">
                      {note.tags?.length || 0} tags
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  );
}
