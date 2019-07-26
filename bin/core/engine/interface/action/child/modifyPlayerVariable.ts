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
     * {204}
     */
    player: ValuePlayerType
    /**
     * {205}
     */
    variable: IPlayerVariable
    /**
     * {199}
     */
    operation: ValueVariableOperation
    /**
     * {206}
     */
    value: ValueType
}