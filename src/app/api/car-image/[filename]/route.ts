import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ filename: string }> }
) {
  const { filename } = await params;
  const artifactDir = "C:\\Users\\USER\\.gemini\\antigravity-ide\\brain\\7e2ed646-7ad5-4df2-beea-da4f42991aa5";
  const filePath = path.join(artifactDir, filename);

  if (fs.existsSync(filePath)) {
    const fileBuffer = fs.readFileSync(filePath);
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  }

  return new NextResponse("Image not found", { status: 404 });
}
