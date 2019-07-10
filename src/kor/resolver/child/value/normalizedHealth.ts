import { INormalizedHealth } from '../../../interface'

/**
 * 방어력 및 보호막을 포함하여 0과 1사이로 
 * 정규화 된 플레이어의 현재 생명력입니다.
 * (예를 들어, 0은 생명력 없음,
 * 0.5는 생명력 절반, 1은 최대 생명력 등등)
 */
export const normalizedHealth = (value: INormalizedHealth) => {
	return `Normalized Health(${value['player']})`
}