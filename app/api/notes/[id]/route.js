import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Knowledge from "@/models/Knowledge";

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const { id } = params;

    await Knowledge.findByIdAndDelete(id);
    return NextResponse.json({ message: "Knowledge deleted" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
