import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Knowledge from "@/models/Knowledge";
import { generateSummary } from "@/lib/ai";

export async function POST(request) {
  try {
    await connectDB();

    const { title, content, tags, type } = await request.json();

    const summary = await generateSummary(`${title}\n\n${content}`);

    const knowledge = await Knowledge.create({
      title: title.trim(),
      content: content.trim(),
      summary,
      tags: Array.isArray(tags)
        ? tags.map((t) => t.trim()).filter(Boolean)
        : [],
      type: type || "note",
    });

    return NextResponse.json(knowledge);
  } catch (error) {
    console.error("Error creating knowledge:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const knowledges = await Knowledge.find().sort({ createdAt: -1 });
    return NextResponse.json(knowledges);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
