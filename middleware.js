import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.pathname;
  const isLoggedIn = req.cookies.get("adminAuth")?.value === "true";

  // If not logged in and trying to access /admin (except login page)
  if (url.startsWith("/admin") && url !== "/admin/login" && !isLoggedIn) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  // If logged in and tries to go back to login
  if (url === "/admin/login" && isLoggedIn) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"], // applies to all /admin routes
};
