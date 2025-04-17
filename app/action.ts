import { languages } from "@/config";
import en from "@/language/en";

export async function getTranslation(language: (typeof languages)[number]) {
	return await import(`@/language/${language}`).then((module) => module.default as typeof en);
}
