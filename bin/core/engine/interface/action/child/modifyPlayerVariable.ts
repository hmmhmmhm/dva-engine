import {
    ValueType,
    ValuePlayerType,
    ValueVariableOperation
} from '../../../type'

import { IPlayerVariable } from '../../value'

/**
 * {52}
 */
export interface IModifyPlayerVariable {
    /**
     * {206}
     */
    player: ValuePlayerType
    /**
     * {207}
     */
    variable: IPlayerVariable
    /**
     * {199}
     */
    operation: ValueVariableOperation
    /**
     * {208}
     */
    value: ValueType
}