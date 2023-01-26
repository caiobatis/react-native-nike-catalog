import { camelCase, snakeCase } from 'lodash'

import * as index from './index'

describe('transform lib', () => {
  describe('TYPES_TO_CASE_FUNCTION', () => {
    it('should be properly configured', () => {
      expect(index.TYPES_TO_CASE_FUNCTION).toEqual({
        snake: snakeCase,
        camel: camelCase
      })
    })
  })

  describe('transformCase()', () => {
    describe('when type argument is equal to "snake"', () => {
      it('should convert all the data argument in snake case', () => {
        const data = {
          objectData: {
            propertyData: 'propertyValue'
          },
          arrayData: ['itemValue'],
          stringData: 'propertyValue'
        }

        expect(index.transformCase('snake', data)).toEqual({
          object_data: {
            property_data: 'propertyValue'
          },
          array_data: ['itemValue'],
          string_data: 'propertyValue'
        })
      })
    })

    describe('when type argument is equal to "camel"', () => {
      it('should convert all the data argument in camel case', () => {
        const data = {
          object_data: {
            property_data: 'propertyValue'
          },
          array_data: ['itemValue'],
          string_data: 'propertyValue'
        }

        expect(index.transformCase('camel', data)).toEqual({
          objectData: {
            propertyData: 'propertyValue'
          },
          arrayData: ['itemValue'],
          stringData: 'propertyValue'
        })
      })
    })
  })

  describe('toCamelCase()', () => {
    it('should convert all the data argument in camel case', () => {
      const data = {
        object_data: {
          property_data: 'propertyValue'
        },
        array_data: ['itemValue'],
        string_data: 'propertyValue'
      }

      expect(index.toCamelCase(data)).toEqual({
        objectData: {
          propertyData: 'propertyValue'
        },
        arrayData: ['itemValue'],
        stringData: 'propertyValue'
      })
    })
  })

  describe('toSnakeCase()', () => {
    it('should convert all the data argument in snake case', () => {
      const data = {
        objectData: {
          propertyData: 'propertyValue'
        },
        arrayData: ['itemValue'],
        stringData: 'propertyValue'
      }

      expect(index.toSnakeCase(data)).toEqual({
        object_data: {
          property_data: 'propertyValue'
        },
        array_data: ['itemValue'],
        string_data: 'propertyValue'
      })
    })
  })

  describe('removeSpacesTranformField', () => {
    it('shoud return an string equal to value argument without space characters', () => {
      const value = 'john doe'

      expect(index.removeSpacesTranformField(value)).toEqual('johndoe')
    })
  })
})
