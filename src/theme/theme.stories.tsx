import { storiesOf } from '@storybook/react'
import * as React from 'react'
import styled from 'styled-components'

import theme from './theme'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 64px;
`

const Color = styled.div`
  width: 250px;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Circle = styled.div`
  height: 64px;
  width: 64px;
  border-radius: 50%;
  border: 1px solid ${theme.light.neutral};
  background-color: ${({ color }) => color};
`

const Label = styled.div`
  padding-top: 8px;
`

storiesOf('Theme', module).add('default colors', () => (
  <Container>
    {Object.entries(theme.light).map(([name, color]) => (
      <Color>
        <Circle color={color} />
        <Label>{name}</Label>
      </Color>
    ))}
  </Container>
))
