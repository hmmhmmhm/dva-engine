import { IEntityExists } from '../../../interface'

/**
 * 특정 플레이어, 아이콘 개체, 효과 개체가 아직 존재하는지 여부입니다.
 * 플레이어가 경기를 나갔는지, 개체가 소멸됐는지 등을 판별할 때 유용합니다.
 */
export const entityExists = (value: IEntityExists) => {
	return `Entity Exists(${value['entity']})`
}