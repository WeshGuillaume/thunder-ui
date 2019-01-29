import * as React from 'react'

import { Input, formOption } from '../_internal/types'

export default interface SelectProps extends Input<any> {
  placeholder?: string
  options: any[]
  description?: string
  placeholderClassName?: string
  icon?: React.ReactNode

  annotation?: string
  canReset?: boolean
  filterable?: boolean
  compact ?: boolean
  multi?: boolean
}

export interface SelectState {
  open: boolean,
  search: string,
  isInputFocus: boolean,
  focusedItem: any,
  rawOptions: [any],
  rawValue: any,
  options: formOption[],
  value: any | any[]
}
