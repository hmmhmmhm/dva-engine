import {
    ValueType,
    VariableType
} from '../../../type'

/**
 * 게임 자체에 속한
 * 전역 변수에 값을 저장합니다.
 */
export interface ISetGlobalVariable {
    /**
     * 어느 전역 변수에
     * 값을 저장할지 지정합니다.
     */
    variable: VariableType
    /**
     * 저장할 값입니다.
     */
    value: ValueType
}