import { ValuePlayerType, ValueNumberType } from '../../../type'

/**
 * {105}
 */
export interface IStartForcingThrottle {
    /**
     * {304}
     */
    player: ValuePlayerType
    /**
     * {305}
     */
    minForward: ValueNumberType
    /**
     * {306}
     */
    maxForward: ValueNumberType
    /**
     * {307}
     */
    minBackward: ValueNumberType
    /**
     * {308}
     */
    maxBackward: ValueNumberType
    /**
     * {309}
     */
    minSideways: ValueNumberType
    /**
     * {310}
     */
    maxSideways: ValueNumberType
}