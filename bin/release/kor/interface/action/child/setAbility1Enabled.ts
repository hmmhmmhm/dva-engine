import { ValuePlayerType, ValueBoolType } from '../../../type'

/**
 * 플레이어의 기술1 활성화 여부를 설정합니다.
 */
export interface ISetAbility1Enabled {
    /**
     * 기술 1 사용 여부를 설정할 플레이어입니다.
     */
    player: ValuePlayerType
    /**
     * 플레이어가 기술 1을
     * 사용할 수 있는지 여부를 지정합니다.
     * TRUE, FALSE 등의 부울 값
     * 또는 COMPARE를 사용합니다.
     */
    enabled: ValueBoolType
}