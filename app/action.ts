import { languages } from "@/config";
import en, { Translation } from "@/language/en";

export async function getTranslation(language: (typeof languages)[number]): Promise<Translation> {
	return await import(`@/language/${language}`).then((module) => module.default as typeof en);
}
