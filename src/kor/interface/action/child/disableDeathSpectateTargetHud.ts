import { ValuePlayerType } from '../../../type'

/**
 * 플레이어를 대상으로
 * ENABLE DEATH SPECTATE TARGET HUD
 * 액션의 효과를 취소합니다.
 */
export interface IDisableDeathSpectateTargetHud {
    /**
     * 사망 후 관전 시 자신의 HUD를
     * 다시 보게 될 플레이어입니다.
     */
    player: ValuePlayerType
}