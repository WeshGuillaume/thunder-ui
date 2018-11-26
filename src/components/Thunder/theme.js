import { get as lodashGet } from 'lodash'

import { colors } from '../../theme'

export const DEFAULT_THEME = {
  background: colors.white,
  border: colors.whiteSmoke,
  text: colors.paynesGrey,

  item: {
    title: colors.maastrichtBlue,
    subtitle: colors.maastrichtBlue,
    focus: colors.snow,
    actionIcon: colors.paynesGrey,
    icon: colors.whiteSmoke,
    iconBackground: colors.trueBlue,
    highlight: colors.oldLace,
  },

  welcome: {
    background: colors.trueBlue,
    color: colors.whiteSmoke,
  },
}


export const get = path => ({ theme }) => lodashGet(theme, `_thunder.${path}`)
