import Enum from 'enum'
import enUS from 'src/locales/en-US'
import plPL from 'src/locales/pl-PL'

export const Locales = new Enum({
  'en-US': {
    name: 'English',
    locales: enUS
  },
  'pl-PL': {
    name: 'Polish',
    locales: plPL
  }
})

export default {
  'en-US': Locales['en-US'],
  'pl-PL': Locales['pl-PL']
}
