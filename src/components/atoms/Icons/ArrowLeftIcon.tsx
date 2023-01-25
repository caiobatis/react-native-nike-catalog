import { FunctionComponent } from 'react'

import { IIconProps, Icon } from 'native-base'
import { Path } from 'react-native-svg'

export const ArrowLeftIcon: FunctionComponent<IIconProps> = ({ ...props }) => (
  <Icon {...{ viewBox: '0 0 24 24', ...props }} testID="ArrowLeftIcon">
    <Path
      d="M16.0303 4.46967C16.2966 4.73594 16.3208 5.1526 16.1029 5.44621L16.0303 5.53033L9.56097 12L16.0303 18.4697C16.2966 18.7359 16.3208 19.1526 16.1029 19.4462L16.0303 19.5303C15.764 19.7966 15.3474 19.8208 15.0538 19.603L14.9696 19.5303L7.96964 12.5303C7.70338 12.2641 7.67917 11.8474 7.89702 11.5538L7.96964 11.4697L14.9696 4.46967C15.2625 4.17678 15.7374 4.17678 16.0303 4.46967Z"
      fill="currentColor"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.4935 5.75897L16.3968 5.87093L10.2681 12L16.3839 18.1161C16.8279 18.5602 16.8678 19.2544 16.5045 19.7441L16.4935 19.759L16.3968 19.8709L16.3839 19.8839C15.9398 20.328 15.2455 20.3679 14.7558 20.0045L14.741 19.9935L14.629 19.8968L7.61609 12.8839C7.172 12.4398 7.13212 11.7456 7.49548 11.2559L7.50648 11.241L7.60314 11.1291L14.6161 4.11612C15.1042 3.62796 15.8957 3.62796 16.3839 4.11612C16.8279 4.56021 16.8678 5.25443 16.5045 5.74415L16.4935 5.75897ZM16.0303 18.4697L9.56097 12L16.0303 5.53033L16.1029 5.44621C16.3208 5.1526 16.2966 4.73594 16.0303 4.46967C15.7374 4.17678 15.2625 4.17678 14.9696 4.46967L7.96964 11.4697L7.89702 11.5538C7.67917 11.8474 7.70338 12.2641 7.96964 12.5303L14.9696 19.5303L15.0538 19.603C15.3474 19.8208 15.764 19.7966 16.0303 19.5303L16.1029 19.4462C16.3208 19.1526 16.2966 18.7359 16.0303 18.4697Z"
      fill="currentColor"
    />
  </Icon>
)
