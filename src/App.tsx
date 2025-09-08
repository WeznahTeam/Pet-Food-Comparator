import './App.css'
import './i18n/i18n'
import {useTranslation} from "react-i18next";
import i18next from "i18next";

function App() {
    i18next.changeLanguage('es')

    const {t} = useTranslation();

    return (
        <>
            <div>
                <div>{t($ => $.additive)}</div>
                <div>{t($ => $.component)}</div>
                <div>{t($ => $.food)}</div>
                <div>{t($ => $.kibble)}</div>
                <div>{t($ => $.treats)}</div>
                <div>{t($ => $.wetFood)}</div>
            </div>
        </>
    )
}

export default App
