import {FoodTranslationsEs, FoodTranslationsEn} from "./FoodTranslations";

export default {
    lng: "es",
    fallbackLng: "en",
    resources: {
        es: {
            translation: {
                ...FoodTranslationsEs
            }
        },
        en: {
            translation: {
                ...FoodTranslationsEn
            }
        }
    },
    interpolation: {
        escapeValue: false,
    }
}
