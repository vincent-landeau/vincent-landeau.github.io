import {createI18n} from 'vue-i18n'
import messages from './locales/en'

export const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: { 'en': messages }
})

const loadedLanguages = ['en']

export const languagesAvailable = ['en', 'fr']

function setI18nLanguage (lang) {
    i18n.global.locale = lang
    document.querySelector('html').setAttribute('lang', lang)
    return lang
}

export function navigatorCloseLanguage () {
    const userLanguage = navigator.language
    if (languagesAvailable.includes(userLanguage)) {
        return loadLanguageAsync(userLanguage)
    } else if (userLanguage.includes('-')) {
        const userLanguageSplit = userLanguage.split('-')
        if (languagesAvailable.includes(userLanguageSplit[0])) {
            return loadLanguageAsync(userLanguageSplit[0])
        }
    }
    return 'en'
}

export function loadLanguageAsync (lang) {
    if (i18n.global.locale !== lang) {
        if (!loadedLanguages.includes(lang)) {
            return import( `./locales/${lang}`).then(msgs => {
                i18n.global.setLocaleMessage(lang, msgs.default)
                loadedLanguages.push(lang)
                return setI18nLanguage(lang)
            })
        }
        return Promise.resolve(setI18nLanguage(lang))
    }
    return Promise.resolve(lang)
}

