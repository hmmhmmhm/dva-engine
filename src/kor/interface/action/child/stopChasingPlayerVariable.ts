import {
    ValuePlayerType,
    VariableType,
} from '../../../type'

/**
 * 진행 중인 플레이어 변수 추적을 중지하고
 * 해당 변수의 현재 값을 그대로 유지합니다.
 */
export interface IStopChasingPlayerVariable {
    /**
     * 변수 반경을 중지할
     * 플레이어입니다.
     * 플레이어가 다수인 경우,
     * 각각의 변수는
     * 변경되지 않습니다.
     */
    player: ValuePlayerType
    /**
     * 수정을 중지할
     * 플레이어의 변수를
     * 지정합니다.
     */
    variable: VariableType
}