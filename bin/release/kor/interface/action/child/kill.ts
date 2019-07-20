import { ValuePlayerType, ValueAssisterParamType } from '../../../type'

/**
 * 플레이어를 즉시 처치합니다.
 */
export interface IKill {
    /**
     * 처치될 플레이어입니다.
     */
    player: ValuePlayerType
    /**
     * 처치를 기록한 것으로
     * 집계될 플레이어입니다.
     * KILLER가 NULL이면
     * 집계될 플레이어가
     * 없음을 의미합니다.
     */
    killer: ValueAssisterParamType
}