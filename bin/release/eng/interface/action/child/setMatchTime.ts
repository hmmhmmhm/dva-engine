import { ValueNumberType } from '../../../type'

/**
 * Sets the current match time (which is visible
 * at the top of the screen). This can be used
 * to shorten or extend the duration of a match
 * or to change the duration of assemble heroes or setup.
 */
export interface ISetMatchTime {
    /**
     * Time - The match time in seconds. Can use
     * most Number based Value Syntax for this value.
     */
    time: ValueNumberType
}