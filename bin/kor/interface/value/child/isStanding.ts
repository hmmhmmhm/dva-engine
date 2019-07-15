import {
    ValuePlayerType,
} from '../../../type'

/**
 * 플레이어가 서 있는 상태인지 여부
 * (이동하지 않고 공중에 있는
 * 상태가 아닌 경우로 판단)입니다.
 */
export interface IIsStanding {
    /**
     * 서 있는 상태를 확인할 대상 플레이어입니다.
     */
    player: ValuePlayerType
}