import { FunctionComponent } from 'react'

import { IInputProps, Input } from 'native-base'

export const InputText: FunctionComponent<IInputProps> = (props) => {
  return (
    <Input
      py={4}
      h={12}
      variant="filled"
      autoCorrect={false}
      autoCapitalize="none"
      enablesReturnKeyAutomatically
      {...props}
    />
  )
}
