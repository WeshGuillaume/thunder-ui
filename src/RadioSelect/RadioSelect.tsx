import * as React from 'react'
import { map, includes, filter, isEmpty, isNil } from 'lodash'
import { withTheme } from 'styled-components'

import withLabel from '../withLabel'
import { getMainColor } from '../_internal/colors'

import { RadioSelectContainer, Option } from './RadioSelect.style'
import RadioSelectProps from './RadioSelect.interface'
import { formValue } from '../_internal/types'

const getNewValueNotMulti = (item: formValue, value: formValue, { canBeEmpty }) => {
  if (value === item && canBeEmpty) {
    return null
  }

  return item
}

const getNewValueMulti = (item: formValue, value: formValue[], { canBeEmpty }) => {
  if (includes(value, item)) {
    const newValue = filter(value, value => value !== item)

    if (isEmpty(newValue)) {
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
  if (isNil(value)) {
    return multi ? [] : null
  }

  return value
}

export const BaseRadioSelect: React.StatelessComponent<RadioSelectProps> = props => {
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

  const selected = map(options, ({ value }) => {
    if (multi) {
      return includes(currentValue as formValue[], value)
    }

    return value === currentValue
  })

  const color = getMainColor(props)

  return (
    <RadioSelectContainer color={color} data-disabled={disabled} {...rest}>
      {options.map(({ value, label }, index) => (
        <Option
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
  options: []
}

const RadioSelect = withLabel({ padding: 12 })(withTheme(BaseRadioSelect))

export default RadioSelect
