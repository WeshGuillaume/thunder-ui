import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { withState } from 'recompose'
import styled from 'styled-components'

import TextArea from './index'

const CONTENT = 'Hello world'

const Container = styled.div`
  width: 350px;
`

const TextAreaWithState = ({ value = '', ...props }) => {
  const Component = withState('value', 'onChange', value)(newProps => (
    <TextArea {...newProps} onChange={value => newProps.onChange(value)} />
  ))

  return (
    <Container>
      <Component {...props} />
    </Container>
  )
}

storiesOf('Inputs|TextArea', module)
  .add('basic', () => <TextAreaWithState value={CONTENT} />)
  .add('small', () => <TextAreaWithState small value={CONTENT} />)
  .add('disabled', () => <TextAreaWithState disabled value={CONTENT} />)
  .add('placeholder', () => (
    <TextAreaWithState value="" placeholder="Type something here" />
  ))
  .add('error', () => (
    <TextAreaWithState
      error
      value={CONTENT}
      placeholder="Type something here"
    />
  ))
