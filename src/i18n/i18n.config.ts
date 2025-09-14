import {FoodTranslationsEs, FoodTranslationsEn} from "./FoodTranslations";
import {FoodFormTranslationsEn, FoodFormTranslationsEs} from "./FoodFormTranslations";

export default {
    lng: "es",
    fallbackLng: "en",
    resources: {
        es: {
            translation: {
                FoodTranslations: FoodTranslationsEs,
                FoodFormTranslations: FoodFormTranslationsEs
            }
        },
        en: {
            translation: {
                FoodTranslations: FoodTranslationsEn,
                FoodFormTranslations: FoodFormTranslationsEn
            }
        }
    },
    interpolation: {
        escapeValue: false,
    }
}
