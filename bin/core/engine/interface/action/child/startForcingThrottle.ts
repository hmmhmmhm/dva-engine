import { ValuePlayerType, ValueNumberType } from '../../../type'

/**
 * {105}
 */
export interface IStartForcingThrottle {
    /**
     * {303}
     */
    player: ValuePlayerType
    /**
     * {304}
     */
    minForward: ValueNumberType
    /**
     * {305}
     */
    maxForward: ValueNumberType
    /**
     * {306}
     */
    minBackward: ValueNumberType
    /**
     * {307}
     */
    maxBackward: ValueNumberType
    /**
     * {308}
     */
    minSideways: ValueNumberType
    /**
     * {309}
     */
    maxSideways: ValueNumberType
}