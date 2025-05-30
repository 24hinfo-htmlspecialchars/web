import { NextResponse } from "next/server";
import { auth } from "@/services/auth";

const UNAUTH_BLOCKED = ["/app"]; // Add paths that should be blocked for unauthenticated users
const AUTH_BLOCKED = ["/auth/"]; // Add paths that should be blocked for authenticated users

export default auth((req) => {
  const { pathname } = req.nextUrl;

    if (req.auth) {
        if (AUTH_BLOCKED.some((path) => pathname.startsWith(path))) {
            return NextResponse.redirect(new URL("/", req.url));
        }
    }
    else if (!UNAUTH_BLOCKED.some((path) => !pathname.startsWith(path))) {
         return NextResponse.redirect(new URL("/auth/login", req.url));
    }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
