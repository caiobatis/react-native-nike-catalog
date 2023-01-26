import {
  cloneDeep,
  isArray,
  isObject,
  map,
  mapKeys,
  camelCase,
  snakeCase,
  mapValues,
  isPlainObject,
  isString
} from 'lodash'

export const TYPES_TO_CASE_FUNCTION = {
  snake: snakeCase,
  camel: camelCase
}

export const transformCase = (type: 'snake' | 'camel', data: object): object => {
  let dataObjt = cloneDeep(data)

  if (isString(dataObjt)) return dataObjt

  if (isArray(dataObjt)) return map(dataObjt, (item: object) => transformCase(type, item))

  dataObjt = mapKeys(dataObjt, (value, key) => TYPES_TO_CASE_FUNCTION[type](key))

  // Recursively apply throughout object
  return mapValues(dataObjt, (value: object): object => {
    if (isPlainObject(value)) return transformCase(type, value)

    if (isArray(value))
      return map(value, (item) => (isObject(item) ? transformCase(type, item) : item))

    return value
  })
}

export const toCamelCase = (data: object) => transformCase('camel', data)

export const toSnakeCase = (data: object) => transformCase('snake', data)

export const removeSpacesTranformField = (value: any) => String(value).replace(/\s/g, '')
