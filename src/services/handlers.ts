import { AxiosRequestConfig, AxiosResponse } from 'axios'

export const responseSuccess = (
  response: AxiosResponse,
  options: { config: AxiosRequestConfig }
) => {
  const newResponse = {
    response,
    data: {},
    headers: {}
  }

  if (response?.data?.data) newResponse.data = response?.data?.data

  if (options?.config?.headers) newResponse.headers = response?.headers

  return newResponse
}
