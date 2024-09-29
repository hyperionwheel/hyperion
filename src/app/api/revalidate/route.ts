import { NextResponse, type NextRequest } from "next/server";
import { revalidateTag } from "next/cache";
import { NextTags } from "@/utils/constants";

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag") ?? "";
  const secret = request.nextUrl.searchParams.get("secret") ?? "";

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ code: "Invalid Secret" }, { status: 401 });
  }

  if (!Object.values(NextTags).includes(tag as NextTags)) {
    return NextResponse.json({ code: "Invalid Tag" }, { status: 400 });
  }

  revalidateTag(tag);

  return NextResponse.json({ code: "OK" }, { status: 200 });
}
