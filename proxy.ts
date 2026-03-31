import { languages } from "@/config";
import { NextRequest, NextResponse } from "next/server";

const defaultLocale = "vi";

function getPreferredLocale(request: NextRequest) {
	try {
		const header = request.headers.get("accept-language");

		if (!header) {
			return defaultLocale;
		}

		const preferredLocales = header
			.split(",")
			.map((value) => {
				const [localePart, qualityPart] = value.trim().split(";q=");
				const locale = localePart.toLowerCase();
				const quality = Number(qualityPart ?? "1");

				return {
					locale,
					quality: Number.isNaN(quality) ? 0 : quality,
				};
			})
			.sort((a, b) => b.quality - a.quality);

		for (const { locale } of preferredLocales) {
			const matchedLocale = languages.find((language) => locale === language || locale.startsWith(`${language}-`));

			if (matchedLocale) {
				return matchedLocale;
			}
		}

		return defaultLocale;
	} catch (error) {
		return defaultLocale;
	}
}

export function proxy(request: NextRequest) {
	const pathname = request.nextUrl.pathname;

	const pathnameIsMissingLocale = languages.every((locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`);

	if (pathnameIsMissingLocale) {
		const locale = getPreferredLocale(request);
		return Response.redirect(new URL(`/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`, request.url));
	}

	return NextResponse.next();
}

export const config = { matcher: "/((?!api|_next/static|_next/image|favicon.ico|.svg|icons|.ttf).*)" };
