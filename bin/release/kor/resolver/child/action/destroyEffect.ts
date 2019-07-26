/**
 * CREATE EFFECT에 의해 생성된
 * 효과 개체 하나를 제거합니다.
 */
export const destroyEffect = (
	/**
	 * 제거할 효과 개체를 지정합니다.
	 * 여기에 사용되는 개체는
	 * LAST CREATED ENTITY 또는
	 * 예전에 LAST CREATED ENTITY
	 * 가 담긴 변수입니다.
	 * - `Type.Entity.`
	 */
	entity: string | number | any[]
) => {

	return `Destroy Effect(${entity})`
}