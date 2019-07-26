import { ValueTextId } from '../../../type'

/**
 * Destroys hud text that was created by create hud text.
 */
export interface IDestroyHudText {
    /**
     * Text ID - Specifies which hud text to destroy.
     * This ID may be last text ID or a variable
     * into which last text ID was earlier stored.
     */
    textId: ValueTextId
}