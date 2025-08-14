import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = "/events/all";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/events"],
};
