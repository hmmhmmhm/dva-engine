import { ValuePlayerType, ValueNumberType } from '../../../type'

/**
 * {75}
 */
export interface ISetHealingReceived {
    /**
     * {239}
     */
    player: ValuePlayerType
    /**
     * {240}
     */
    healingReceivedPercent: ValueNumberType
}