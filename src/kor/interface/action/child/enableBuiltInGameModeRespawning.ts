import { ValuePlayersParamType } from '../../../type'

/**
 * 플레이어에 대해
 * DISABLE BUILT-IN GAME MODE RESPAWNING
 * 액션의 효과를 취소합니다.
 */
export interface IEnableBuiltInGameModeRespawning {
    /**
     * 부활 설정의 영향을
     * 받게 되는 플레이어입니다.
     */
    players: ValuePlayersParamType
}