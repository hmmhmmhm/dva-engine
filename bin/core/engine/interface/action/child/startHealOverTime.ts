import { ValuePlayerType, ValueNumberType, ValueAssisterParamType } from '../../../type'

/**
 * {106}
 */
export interface IStartHealOverTime {
    /**
     * {311}
     */
    player: ValuePlayerType
    /**
     * {193}
     */
    healer: ValueAssisterParamType
    /**
     * {312}
     */
    duration: ValueNumberType
    /**
     * {313}
     */
    healingPerSecond: ValueNumberType
}