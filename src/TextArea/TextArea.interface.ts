import * as React from 'react'

import { Except, Input } from '../_internal/types'

export default interface TextAreaProps
  extends Input<string | number>,
    Except<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      keyof Input<any>
    > {
  small?: boolean
}
