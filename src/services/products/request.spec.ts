import mockAxios from 'jest-mock-axios'

import * as requests from './requests'

describe('getProductList()', () => {
  afterEach(() => {
    mockAxios.reset()
  })

  const params = {
    search: 'jordan'
  }

  describe('when the GET "/catalog" request is successful', () => {
    it('should called with params passed', async () => {
      mockAxios.get.mockResolvedValueOnce({ data: [] })

      await requests.getProductList(params)

      expect(mockAxios.get).toHaveBeenCalledWith('/catalog', { params })
    })

    it('should return the request response with the data value', async () => {
      const response = {
        data: [
          {
            boxCondition: 'string'
          }
        ]
      }

      mockAxios.get.mockResolvedValueOnce(response)

      const result = await requests.getProductList(params)

      expect(result).toEqual(response)
    })
  })
})
