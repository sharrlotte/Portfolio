import { languages } from "@/config";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname;

	const pathnameIsMissingLocale = languages.every((locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`);

	if (pathnameIsMissingLocale) {
		const locale = request.nextUrl.locale || "en";
		return Response.redirect(new URL(`/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`, request.url));
	}

	return NextResponse.next();
}

export const config = { matcher: "/((?!api|_next/static|_next/image|favicon.ico|.svg|icons|.ttf).*)" };
