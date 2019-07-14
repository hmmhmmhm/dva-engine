/**
 * 월드에 개체가 생성되었는지 여부입니다.
 * 플레이어가 영웅을 선택하지 않은 경우
 * 결과값은 FALSE 입니다.
 */
export const hasSpawned = (
	/**
	 * - `Type.Entity.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	entity: string
) => {

	return `Has Spawned(${entity})`
}