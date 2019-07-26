import { ValuePlayerType } from '../../../type'

/**
 * 사망 후 관전 시
 * 플레이어 자신의 HUD 대신
 * 관전 대상의 HUD를 볼 수 있습니다.
 */
export interface IEnableDeathSpectateTargetHud {
    /**
     * 사망 후 관전 시
     * 대상의 관전 대상의
     * HUD를 보게 될
     * 플레이어입니다.
     */
    player: ValuePlayerType
}