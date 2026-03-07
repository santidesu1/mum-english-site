import { NextResponse } from "next/server";
import { getNaverPosts } from "@/lib/naverRss";

export async function GET() {
  try {
    const posts = await getNaverPosts();
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Failed to load Naver RSS posts:", error);
    return NextResponse.json(
      { error: "Failed to load posts" },
      { status: 500 }
    );
  }
}
