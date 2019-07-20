import { ValueType, ValueVariableOperation } from '../../../type'
import { IGlobalVariable } from '../../value'

/**
 * 게임 자체에 종속된
 * 전역 변수 값을 수정합니다.
 */
export interface IModifyGlobalVariable {
    /**
     * 수정할 전역 변수입니다.
     */
    variable: IGlobalVariable
    /**
     * 변수값의 변경 방식입니다.
     * 일반적인 사칙연산,
     * 그리고 값의 추가 및 제거를 위한
     * ARRAY 연산 등의 옵션이 있습니다.
     */
    operation: ValueVariableOperation
    /**
     * 수정에 사용되는 값입니다.
     * 산술연산의 경우 이것은
     * 두 피연산자 중 두 번째로,
     * 나머지 하나는 변수의
     * 현재 값으로 사용됩니다.
     * 배열 연산에서는
     * 이 값을 추가 또는 제거합니다.
     */
    value: ValueType
}