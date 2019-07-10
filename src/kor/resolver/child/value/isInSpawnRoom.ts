import { IIsInSpawnRoom } from '../../../interface'

/**
 * 지정된 플레이어가 전투준비실에 있는지
 * (또한 치유되고 영웅을 변경할 수 있는지) 여부 입니다.
 */
export const isInSpawnRoom = (value: IIsInSpawnRoom) => {
	return `Is In Spawn Room(${value['player']})`
}