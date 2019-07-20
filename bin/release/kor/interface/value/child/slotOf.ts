import { ValuePlayerType } from '../../../type'

/**
 * 지정된 플레이어의 슬롯 번호입니다.
 * 팀전에서 각 팀은 0에서 5개의 슬롯을 보유하며,
 * 개별 전투 게임에서 슬롯 수는 0에서 11까지입니다.
 */
export interface ISlotOf {
    /**
     * 슬롯 번호 정보를 가져올 플레이어입니다.
     */
    player: ValuePlayerType
}