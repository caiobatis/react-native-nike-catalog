import * as fixtures from './fixtures'

describe('fixtures', () => {
  describe('applicationSuccess', () => {
    it('should be properly configured', () => {
      expect(fixtures.applicationSuccess).toEqual({
        serviceSuccess: true,
        hasErrors: false,
        errors: [],
        metadata: {
          runtime: 2,
          requestId: 'ckh23h7pg0002fqeqh32a5st9'
        },
        data: {},
        status: 200,
        headers: {}
      })
    })
  })

  describe('applicationError', () => {
    it('should be properly configured', () => {
      expect(fixtures.applicationError).toEqual({
        serviceSuccess: false,
        hasErrors: true,
        errors: ['request error'],
        metadata: {
          runtime: 2,
          requestId: 'ckh23h7pg0002fqeqh32a5st9'
        },
        data: {},
        status: 400,
        headers: {}
      })
    })
  })
})
