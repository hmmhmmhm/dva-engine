import { ValuePlayerType, ValueNumberType } from '../../../type'

/**
 * 플레이어의 점수(처치수)를 수정합니다.
 * 이 액션은 개별 전투
 * 모드에서만 효과가 있습니다.
 */
export interface IModifyPlayerScore {
    /**
     * 점수를 수정할 플레이어입니다.
     */
    player: ValuePlayerType
    /**
     * 점수 증감량입니다.
     * 양수인 경우 점수가 오르고
     * 음수인 경우 감소합니다.
     */
    score: ValueNumberType
}