import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secret = process.env.JWT_SECRET || "supersecretkey";
// Convert to Uint8Array (fixes your error)
const secretKey = new TextEncoder().encode(secret);

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // Get token from cookies
  const token = req.cookies.get("adminToken")?.value;
  let isLoggedIn = false;

  if (token) {
    try {
      const {payload} = await jwtVerify(token, secretKey);
      if (payload?.userId) isLoggedIn = true;
      console.log("Payload from cookie:", payload.userId);
    } catch (err) {
      console.warn("JWT verify failed:", e.message);
      isLoggedIn = false;
    }
  }

  // Protect admin routes except login
  if (pathname.startsWith("/admin") && pathname !== "/admin/login" && !isLoggedIn) {
    const url = req.nextUrl.clone();
    url.pathname = "/admin/login";
    return NextResponse.redirect(url);
  }

  // Redirect logged in users away from login page
  if (pathname === "/admin/login" && isLoggedIn) {
    const url = req.nextUrl.clone();
    url.pathname = "/admin/"; // or "/admin"
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
