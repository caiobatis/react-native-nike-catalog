import { forwardRef } from 'react'

import { IInputProps, Input } from 'native-base'
import { TextInput } from 'react-native'

export const InputText = forwardRef<TextInput, IInputProps>((props) => {
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
})
