import { AxiosResponse } from 'axios'

import * as transform from '../utils/transform'

export const responseSuccess = (res: AxiosResponse) => {
  const newRes = { ...res }

  newRes.data = transform.toCamelCase(newRes.data)

  return newRes
}
