/**
 * Destroys an icon entity that was created by create icon.
 */
export const destroyIcon = (
	/**
	 * Text ID - Specifies which icon to destroy.
	 * This ID may be last text ID or a variable
	 * into which last create entity was earlier stored.
	 * - `Type.Entity.`
	 */
	entity: string | number | any[]
) => {

	return `Destroy Icon(${entity})`
}