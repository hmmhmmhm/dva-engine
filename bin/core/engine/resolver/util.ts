export * from './child/value/max'
export * from './child/value/min'
export * from './child/value/normalizedHealth'
export * from './child/value/randomInteger'
export * from './child/value/randomReal'
export * from './child/value/randomValueInArray'
export * from './child/value/randomizedArray'
export * from './child/value/roundToInteger'
export * from './child/value/squareRoot'

import { Type } from '../resolver'
import {
    roundToInteger,
    squareRoot
} from './child/value'

/**
 * @param value Type `Type.Number.`
 */
export const ceil = (value: string) => roundToInteger(value, Type.RoundingType.Default('UP'))
/**
 * @param value Type `Type.Number.`
 */
export const floor = (value: string) => roundToInteger(value, Type.RoundingType.Default('DOWN'))
/**
 * @param value Type `Type.Number.`
 */
export const round = (value: string) => roundToInteger(value, Type.RoundingType.Default('TO NEAREST'))
/**
 * @param value Type `Type.Number.`
 */
export const sqrt = squareRoot