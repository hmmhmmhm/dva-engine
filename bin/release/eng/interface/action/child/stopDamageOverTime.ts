import { ValueDamageOverTimeId } from '../../../type'

/**
 * Stops an instance of damage over time that
 * was started by the start damage over time action
 */
export interface IStopDamageOverTime {
    /**
     * Damage Over Time ID - Specifies which damage
     * over time instance to stop, this ID may
     * be the last damage over time ID or a variable
     * into which last damage over time ID was
     * earlier stored. Can use most Number based Value Syntax.
     */
    damageOverTimeId: ValueDamageOverTimeId
}