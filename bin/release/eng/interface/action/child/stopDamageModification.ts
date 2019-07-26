import { ValueDamageModificationId } from '../../../type'

/**
 * Stops a damage modification that was started
 * by the start damage modification action
 */
export interface IStopDamageModification {
    /**
     * Damage modification ID - Specifies which
     * damage modification instance to stop, this
     * ID may be the last damage modification ID
     * or a variable into which last damage modification
     * ID was earlier stored. Can use most Number
     * based Value Syntax.
     */
    damageModificationId: ValueDamageModificationId
}