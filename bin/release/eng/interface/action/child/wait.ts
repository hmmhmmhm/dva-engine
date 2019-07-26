import { ValueNumberType, ValueWaitBehaviorType } from '../../../type'

/**
 * Pauses the execution of the action list,
 * unless the wait is interrupted. The remainder
 * of the actions will execute after the pause.
 */
export interface IWait {
    /**
     * Time - The duration of the pause. A minimum
     * value of 0.250 seconds is required. Can
     * use most Number based Value Syntax.
     */
    time: ValueNumberType
    /**
     * Wait Behavior - Specifies if and how the
     * wait can be interrupted. If the condition
     * list is ignored, the wait will not be interrupted,
     * otherwise, the condition list will determine
     * if and when the action list will abort or restart.
     */
    waitBehavior: ValueWaitBehaviorType
}