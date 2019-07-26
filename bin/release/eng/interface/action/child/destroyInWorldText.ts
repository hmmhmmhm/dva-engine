import { ValueTextId } from '../../../type'

/**
 * Destroys in-world text that was created
 * by create in-world text.
 */
export interface IDestroyInWorldText {
    /**
     * Text Id - A Reference to the last piece
     * of text created by the event player (or
     * created at the global level) via the create
     * hud text or create in-world text action.
     */
    textId: ValueTextId
}