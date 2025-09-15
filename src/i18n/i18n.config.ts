import {FoodTranslationsEn, FoodTranslationsEs} from "./FoodTranslations";
import {FoodFormTranslationsEn, FoodFormTranslationsEs} from "./FoodFormTranslations";
import {FoodCardEs, FoodCardEn} from "./FoodCard";


export default {
    lng: "es",
    fallbackLng: "en",
    resources: {
        es: {
            translation: {
                Food: FoodTranslationsEs,
                FoodForm: FoodFormTranslationsEs,
                FoodCard: FoodCardEs
            }
        },
        en: {
            translation: {
                Food: FoodTranslationsEn,
                FoodForm: FoodFormTranslationsEn,
                FoodCard: FoodCardEn
            }
        }
    },
    interpolation: {
        escapeValue: false,
    }
}
