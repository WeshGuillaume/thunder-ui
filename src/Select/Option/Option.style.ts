import styled from 'styled-components'

import fontSizes from '../../fontSizes'
import { getMainColor } from '../../_internal/colors'

export const OptionContainer = styled.div`
  transition: background-color ease-in 150ms;
  outline: none;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  display: flex;
  align-items: center;
  font-size: ${fontSizes.regular};
  padding: ${({ compact }) => compact ? 6 : 12 }px 18px;

  i {
    vertical-align: middle;
    margin-right: 4px;
  }

  &:hover,
  &:focus,
  &[data-selected="true"] {
    background-color: ${props => getMainColor(props, { themeKey: 'neutralLighter' })};
  }
`
