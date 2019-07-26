import { ValueHealOverTimeIdType } from '../../../type'

/**
 * Stops an instance of heal over time that
 * was started by the start heal over time action
 */
export interface IStopHealOverTime {
    /**
     * Heal Over Time ID - Specifies which heal
     * over time instance to stop, this ID may
     * be the last heal over time ID or a variable
     * into which last heal over time ID was earlier
     * stored. Can use most Number based Value Syntax.
     */
    healOverTimeId: ValueHealOverTimeIdType
}