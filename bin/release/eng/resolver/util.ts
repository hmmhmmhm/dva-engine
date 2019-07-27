// @ts-ignore
export * from './child/value/max'
// @ts-ignore
export * from './child/value/min'
// @ts-ignore
export * from './child/value/normalizedHealth'
// @ts-ignore
export * from './child/value/randomInteger'
// @ts-ignore
export * from './child/value/randomReal'
// @ts-ignore
export * from './child/value/randomValueInArray'
// @ts-ignore
export * from './child/value/randomizedArray'
// @ts-ignore
export * from './child/value/roundToInteger'
// @ts-ignore
export * from './child/value/squareRoot'

import { Type } from '../resolver'

import {
    roundToInteger,
    squareRoot
    
// @ts-ignore
} from './child/value'

/**
 * @param value Type `Type.Number.`
 */
export const ceil = (value: string) => roundToInteger(value, Type.RoundingType.Default('Up'))
/**
 * @param value Type `Type.Number.`
 */
export const floor = (value: string) => roundToInteger(value, Type.RoundingType.Default('Down'))
/**
 * @param value Type `Type.Number.`
 */
export const round = (value: string) => roundToInteger(value, Type.RoundingType.Default('To Nearest'))
/**
 * @param value Type `Type.Number.`
 */
export const sqrt = squareRoot