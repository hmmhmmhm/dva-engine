/**
 * Whether the specified player, icon entity,
 * or effect entity still exists. Useful for
 * determining if a player has left the match
 * or an entity has been destroyed.
 */
export const entityExists = (
	/**
	 * Entity - The player, icon entity, or effect
	 * entity whose existance to check.
	 * - `Type.Entity.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	entity: string | number | any[]
) => {

	return `Entity Exists(${entity})`
}