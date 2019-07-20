import {
    ValuePlayerType,
    VariableType,
    ValueType
} from '../../../type'

/**
 * 지정된 플레이어에
 * 속한 플레이어 변수에
 * 값 하나를 저장합니다.
 */
export interface ISetPlayerVariable {
    /**
     * 변수를 설정할 플레이어입니다.
     * 플레이어가 다수인 경우,
     * 각각의 변수가 설정됩니다
     */
    player: ValuePlayerType
    /**
     * 값을 저장할 플레이어의
     * 변수를 지정합니다.
     */
    variable: VariableType
    /**
     * 저장할 값입니다.
     */
    value: ValueType
}