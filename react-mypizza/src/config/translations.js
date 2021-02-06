import i18n from 'i18next'
import {initReatI18next} from 'react-i18next'
import fr from './translations/fr.json'
import en from './translations/en.json'

const ressources = {
    fr,
    en
}

i18n.use(initReatI18next).init({
    lng: 'fr',
    fallbackLng: 'en',
    ressources,

    interpolation:{
        escapeValue:false,
    }
})

export default i18n;