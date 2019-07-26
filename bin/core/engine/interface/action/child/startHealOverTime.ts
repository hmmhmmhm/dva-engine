import { ValuePlayerType, ValueNumberType, ValueAssisterParamType } from '../../../type'

/**
 * {106}
 */
export interface IStartHealOverTime {
    /**
     * {310}
     */
    player: ValuePlayerType
    /**
     * {192}
     */
    healer: ValueAssisterParamType
    /**
     * {311}
     */
    duration: ValueNumberType
    /**
     * {312}
     */
    healingPerSecond: ValueNumberType
}