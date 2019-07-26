import { ValuePlayerType } from '../../../type/value/player'
import { VariableType } from '../../../type/variable'

/**
 * 지정된 플레이어가 가진 플레이어 변수의 현재 값입니다.
 */
export interface IPlayerVariable {
    player: ValuePlayerType
    variable: VariableType
}