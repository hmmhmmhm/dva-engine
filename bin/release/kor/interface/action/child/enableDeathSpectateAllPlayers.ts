import { ValuePlayerType } from '../../../type'

/**
 * 플레이어 사망 시,
 * 아군뿐 아니라 모든 플레이어를
 * 관전할 수 있도록 허용합니다.
 */
export interface IEnableDeathSpectateAllPlayers {
    /**
     * 모든 플레이어를
     * 관전할 수 있도록
     * 허용된 플레이어입니다.
     */
    player: ValuePlayerType
}