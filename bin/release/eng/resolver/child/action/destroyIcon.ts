/**
 * Destroys an icon entity that was created by create icon.
 */
export const destroyIcon = (
	/**
	 * Text ID - Specifies which icon to destroy.
	 * This ID may be last text ID or a variable
	 * into which last create entity was earlier stored.
	 * - `Type.Entity.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	entity: string | number | any[]
) => {

	return `Destroy Icon(${entity})`
}