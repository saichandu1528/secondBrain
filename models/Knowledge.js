import mongoose from "mongoose";

const KnowledgeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    summary: { type: String, default: "" },
    type: { type: String, default: "note" },

    tags: { type: [String], default: [] },
  },
  { timestamps: true },
);

const Knowledge =
  mongoose.models.Knowledge || mongoose.model("Knowledge", KnowledgeSchema);

export default Knowledge;
