import * as React from 'react'
import styled, { css } from 'styled-components'

import fontSizes from '../fontSizes'
import theme from '../theme'

import TextButtonProps from './TextButton.interface'

const prepareProps = props => {
  const color = theme.get('primary', { dynamic: true })(props)

  return {
    color,
    hoverColor: theme.getActive(props.hoverColor, color),
  }
}

const TextButton: React.FunctionComponent<
  TextButtonProps
> = styled.button.attrs(prepareProps)`
  border: none;
  outline: none;
  background-color: unset;

  font-weight: 600;
  text-transform: uppercase;

  transition: color 150ms ease-in-out;

  color: ${({ color }) => color};

  cursor: pointer;
  user-select: none;

  &:hover,
  &:active {
    color: ${({ hoverColor }) => hoverColor};
  }

  &:disabled {
    pointer-events: none;
    filter: grayscale();
  }

  ${({ small }) =>
    small &&
    css`
      padding: 6px 16px;
      font-size: ${fontSizes.tiny};
    `};

  ${({ large }) =>
    large &&
    css`
      padding: 16px 24px;
      font-size: ${fontSizes.regular};
    `};

  ${({ small, large }) =>
    !small &&
    !large &&
    css`
      padding: 12px 20px;
      font-size: ${fontSizes.small};
    `};
`

TextButton.defaultProps = {
  type: 'button',
}

export default TextButton
