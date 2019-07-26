/**
 * Destroys an effect entity that was created
 * by create effect.
 */
export const destroyEffect = (
	/**
	 * Entity - Specifies which effect entity to
	 * destroy. This entity may be the last created
	 * entity or a variable into which last created
	 * entity was earlier stored.
	 * - `Type.Entity.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	entity: string | number | any[]
) => {

	return `Destroy Effect(${entity})`
}