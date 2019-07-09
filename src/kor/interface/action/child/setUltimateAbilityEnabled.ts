import { ValuePlayerType, ValueBoolType } from '../../../type'

/**
 * 플레이어의 궁극기
 * 활성화 여부를 설정합니다.
 */
export interface ISetUltimateAbilityEnabled {
    /**
     * 궁극기 사용에 있어
     * 영향을 받는 플레이어입니다.
     */
    player: ValuePlayerType
    /**
     * 플레이어가 궁극기를
     * 사용할 수 있는지 여부를 지정합니다.
     * TRUE, FALSE 등의 부울 값
     * 또는 COMPARE를 사용합니다.
     */
    enabled: ValueBoolType
}