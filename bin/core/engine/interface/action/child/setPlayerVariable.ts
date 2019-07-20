import {
    ValuePlayerType,
    VariableType,
    ValueType
} from '../../../type'

/**
 * {83}
 */
export interface ISetPlayerVariable {
    /**
     * {253}
     */
    player: ValuePlayerType
    /**
     * {254}
     */
    variable: VariableType
    /**
     * {234}
     */
    value: ValueType
}