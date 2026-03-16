
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Knowledge from "@/models/Knowledge";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const question = searchParams.get("q");

  await mongoose.connect(process.env.MONGODB_URI);

  const notes = await Knowledge.find({});

  const content = notes.map((note) => note.text).join(" ");

  const answer = `solution for asked query ${question} is `;

  return NextResponse.json({
    question,
    answer,
  });
}