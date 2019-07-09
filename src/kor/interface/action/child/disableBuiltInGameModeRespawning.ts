import { ValuePlayerType, ValueArrayType } from '../../../type'

/**
 * 플레이어에 대해 자동
 * 부활 기능을 비활성화하고,
 * 스크립트 명령어를 통한
 * 부활만 허용합니다.
 */
export interface IDisableBuiltInGameModeRespawning {
    /**
     * 부활 설정의 영향을
     * 받게 되는 플레이어입니다.
     */
    players: ValuePlayerType | ValueArrayType
}