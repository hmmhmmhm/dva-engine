/**
 * Whether an entity has spawned in the world.
 * Results in false for players who have not
 * chosen a hero yet.
 */
export const hasSpawned = (
	/**
	 * - `Type.Entity.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	entity: string | number | any[]
) => {

	return `Has Spawned(${entity})`
}