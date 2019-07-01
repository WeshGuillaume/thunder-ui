import * as React from 'react'
import { withTheme } from 'styled-components'

import withLabel from '../withLabel'

import TextInputProps, { TextInputInnerProps } from './TextInput.interface'
import {
  InputContainer,
  Input,
  InputSpinner,
  RightElementContainer,
} from './TextInput.style'

const TextInput: React.ComponentType<
  TextInputInnerProps & React.ClassAttributes<any>
> = React.forwardRef((props, ref) => {
  const {
    onChange,
    value,
    defaultValue,
    loading,
    rightHoverElement,
    rightElement,
    inputRef,
    disabled,
    placeholder,
    small,
    ...rest
  } = props

  const handleChange = React.useCallback(e => onChange(e.target.value, e), [
    onChange,
  ])

  return (
    <InputContainer {...rest} data-disabled={disabled}>
      <Input
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        ref={inputRef || ref}
        loading={loading}
        disabled={disabled}
        placeholder={placeholder}
        small={small}
      />
      {loading && <InputSpinner size={small ? 15 : 18} />}
      {rightHoverElement && (
        <RightElementContainer className="hover-element-right">
          {rightHoverElement}
        </RightElementContainer>
      )}
      {rightElement && (
        <RightElementContainer>{rightElement}</RightElementContainer>
      )}
    </InputContainer>
  )
})

TextInput.defaultProps = {
  onChange: () => null,
  value: '',
}

export default withLabel()(withTheme(TextInput) as React.FunctionComponent<
  TextInputProps
>)
