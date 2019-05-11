import tag from 'clean-tag'
import * as React from 'react'
import styled, { css } from 'styled-components'

import useMergedContext from '../_internal/useMergedContext'
import { assert } from '../_internal/validityCheck'
import fontSizes from '../fontSizes'
import TabsContext from '../Tabs/Tabs.context'
import theme from '../theme'

import TabsItemProps from './TabsItem.interface'

const prepareProps = props => {
  const color = theme.get('neutral')(props)
  const activeColor = theme.get('primary', { propName: 'activeColor' })(props)

  return {
    color,
    activeColor,
    hoverColor: activeColor || props.hoverColor,
    activeClassName: 'active',
    className: `${props.className} ${props.active ? 'active' : ''}`,
  }
}

const StyledTabsItem = styled(tag).attrs(prepareProps)`
  display: flex;
  position: relative;

  padding: 16px 8px;
  margin: 0 8px;
  font-size: ${fontSizes.regular};
  color: ${({ color }) => color};
  transition: all 150ms ease-in-out;
  white-space: nowrap;

  ${({ closed }) =>
    closed &&
    css`
      opacity: 0.7;
      text-decoration: line-through;
    `}

  &.active {
    color: ${({ activeColor }) => activeColor};

    &::after {
      width: 100%;
      left: 0;
      transition: all 250ms ease-in-out;
    }
  }

  &:hover {
    text-decoration: none;
    color: ${({ hoverColor }) => hoverColor};
  }

  &::after {
    content: '';

    width: 0;
    height: 3px;

    position: absolute;
    bottom: 0;
    left: 50%;

    background-color: ${({ activeColor }) => activeColor};
  }
`

const TabsItem: React.FunctionComponent<TabsItemProps> = rawProps => {
  const { isInsideATabs, ...props } = useMergedContext(TabsContext, rawProps)

  assert(isInsideATabs, 'TabsItem should be used inside a Tabs')

  return (
    <StyledTabsItem
      data-testid="tabs-item"
      blacklist={['activeColor', 'hoverColor', 'closed']}
      {...props}
    />
  )
}

TabsItem.defaultProps = {
  activeColor: null,
  hoverColor: null,
  closed: false,
}

export default TabsItem
