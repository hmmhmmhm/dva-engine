import { ValueEntityType } from '../../../type'

/**
 * Destroys an icon entity that was created by create icon.
 */
export interface IDestroyIcon {
    /**
     * Text ID - Specifies which icon to destroy.
     * This ID may be last text ID or a variable
     * into which last create entity was earlier stored.
     */
    entity: ValueEntityType
}