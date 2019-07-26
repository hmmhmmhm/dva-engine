import {
    ValueType,
    ValuePlayerType,
    ValueVariableOperation
} from '../../../type'

import { IPlayerVariable } from '../../value'

/**
 * {55}
 */
export interface IModifyPlayerVariable {
    /**
     * {203}
     */
    player: ValuePlayerType
    /**
     * {204}
     */
    variable: IPlayerVariable
    /**
     * {198}
     */
    operation: ValueVariableOperation
    /**
     * {205}
     */
    value: ValueType
}