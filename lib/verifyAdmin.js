import { jwtVerify } from "jose";

const secret = process.env.JWT_SECRET || "supersecretkey";
const secretKey = new TextEncoder().encode(secret);

// Helper to check admin JWT
export async function verifyAdmin(req) {
  const token = req.cookies.get("adminToken")?.value;
  if (!token) throw new Error("Unauthorized");

  const { payload } = await jwtVerify(token, secretKey);
  if (!payload?.userId) throw new Error("Unauthorized");
  return payload.userId;
}