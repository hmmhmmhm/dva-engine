import { ValuePlayerType, ValueVectorType, ValueNumberType, ValueRelativeType, ValueStartThrottleBehaviorType, ValueStartThrottleReevaluationType } from '../../../type'

/**
 * {738}
 */
export interface IStartThrottleInDirection {
    /**
     * {739}
     */
    player: ValuePlayerType
    /**
     * {740}
     */
    direction: ValueVectorType
    /**
     * {741}
     */
    magnitude: ValueNumberType
    /**
     * {742}
     */
    relative: ValueRelativeType
    /**
     * {743}
     */
    behavior: ValueStartThrottleBehaviorType
    /**
     * {744}
     */
    reevaluation: ValueStartThrottleReevaluationType
}