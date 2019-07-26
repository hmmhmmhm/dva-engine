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
	 * - `Type.Entity.`
	 */
	entity: string | number | any[]
) => {

	return `Destroy Effect(${entity})`
}