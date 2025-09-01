import i18n from "i18next";
import {initReactI18next} from "react-i18next/initReactI18next";
import config from "./i18n.config"

export default i18n.use(initReactI18next).init(config, err => err ? console.error(err) : undefined);
