import { type NextRequest, NextResponse } from "next/server";
import { middleware as dashboardMiddleware } from "./src/app/dashbord/middleware";

export async function middleware(request: NextRequest) {
  // Generic session handling logic for all requests
  console.log("Middleware: Handling session update...");
  
  // Perform custom session update or placeholder logic
  const sessionResponse = NextResponse.next(); // Placeholder response (you can replace this with your own logic)

  // Check if the request is for the "/dashboard" path
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    // Call dashboard middleware if applicable
    return dashboardMiddleware(request);
  }

  // Return generic session response for all other paths
  return sessionResponse;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(svg|png|jpg|jpeg|gif|webp)$).*)", // Match all paths except static files
  ],
};
