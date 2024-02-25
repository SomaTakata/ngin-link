import { NextResponse } from "next/server";
import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: ["/"],
  afterAuth: (auth, req) => {
    // 保護するルート (例えば, /dashboard/* が保護される)
    const protectRoutes = ["/dashboard", "/welcome", "/register"];

    if (auth.userId && req.nextUrl.pathname === "/") {
      const url = req.nextUrl.clone();
      url.pathname = "/dashboard";
      return NextResponse.redirect(url);
    }

    for (const route of protectRoutes) {
      if (!auth.userId && req.nextUrl.pathname.startsWith(route)) {
        return redirectToSignIn({ returnBackUrl: req.url });
      }
    }

    // Allow users visiting public routes to access them
    return NextResponse.next();
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
