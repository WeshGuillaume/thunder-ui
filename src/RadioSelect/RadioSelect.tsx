import * as React from 'react'
import { withTheme } from 'styled-components'

import { formValue, styledTheme } from '../_internal/types'
import theme from '../theme'
import withLabel from '../withLabel'

import RadioSelectProps, {
  RadioSelectInnerProps,
} from './RadioSelect.interface'
import { RadioSelectContainer, Option } from './RadioSelect.style'

const getNewValueNotMulti = (
  item: formValue,
  value: formValue,
  { canBeEmpty }
) => {
  if (value === item && canBeEmpty) {
    return null
  }

  return item
}

const getNewValueMulti = (
  item: formValue,
  value: formValue[],
  { canBeEmpty }
) => {
  if (value.includes(item)) {
    const newValue = value.filter(el => el !== item)

    if (newValue.length === 0) {
      if (canBeEmpty) {
        return newValue
      }

      return value
    }

    return newValue
  }

  return [...value, item]
}

const getCurrentValue = (value, { multi }) => {
  if (!value && value == null) {
    // '==' to check undefined values, not just null
    return multi ? [] : null
  }

  return value
}

export const BaseRadioSelect: React.FunctionComponent<
  RadioSelectInnerProps
> = props => {
  const {
    options,
    onChange,
    multi,
    value,
    canBeEmpty,
    disabled,
    ...rest
  } = props

  const currentValue = getCurrentValue(value, { multi })

  const onItemClick = item => {
    const newValue = multi
      ? getNewValueMulti(item, currentValue as formValue[], { canBeEmpty })
      : getNewValueNotMulti(item, currentValue as formValue, { canBeEmpty })

    return onChange(newValue)
  }

  const selected = options.map(({ value }) => {
    if (multi) {
      return currentValue.includes(value)
    }

    return value === currentValue
  })

  const color = theme.get('primary', { dynamic: true })(props)

  return (
    <RadioSelectContainer color={color} data-disabled={disabled} {...rest}>
      {options.map(({ value, label }, index) => (
        <Option
          data-testid="radio-select-option"
          isNextSelected={index < options.length - 1 && selected[index + 1]}
          isPreviousSelected={index > 0 && selected[index - 1]}
          key={value}
          color={color}
          onClick={() => onItemClick(value)}
          data-checked={selected[index]}
        >
          {label}
        </Option>
      ))}
    </RadioSelectContainer>
  )
}

BaseRadioSelect.defaultProps = {
  canBeEmpty: true,
  multi: false,
  disabled: false,
  options: [],
  theme: {} as styledTheme,
}

export default withLabel({ padding: 12 })(withTheme(
  BaseRadioSelect
) as React.FunctionComponent<RadioSelectProps>)
