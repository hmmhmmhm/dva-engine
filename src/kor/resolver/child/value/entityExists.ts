/**
 * 특정 플레이어, 아이콘 개체, 효과 개체가 아직 존재하는지 여부입니다.
 * 플레이어가 경기를 나갔는지, 개체가 소멸됐는지 등을 판별할 때 유용합니다.
 */
export const entityExists = (
	/**
	 * 존재를 확인할 플레이어, 아이콘 개체 또는 효과 개체입니다.
	 * - `Entity.` 또는 `Type.Entity.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	entity: string
) => {

	return `Entity Exists(${entity})`
}