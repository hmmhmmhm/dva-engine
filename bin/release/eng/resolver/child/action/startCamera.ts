/**
 * Places your camera at a location, facing a direction.
 */
export const startCamera = (
	/**
	 * Player - The player executing this rule.
	 * As specified by the event, may be the same
	 * as the attacker or the victim. Can use most
	 * Player based Value Syntax.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * Eye Position - The position of the camrea,
	 * reevaluates continously. Can use most Vector
	 * based Value Syntax to specify.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	eyePosition: string | number | any[],
	/**
	 * Look at position - Where the camera looks
	 * at, reevaluates continously. Can use most
	 * Vector based Value Syntax to specify.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	lookAtPosition: string | number | any[],
	/**
	 * Blend Speed - How fast to blend the camera
	 * movement as positions change. 0 means do
	 * not blend at all and just change positions
	 * instantly. Can use most Number based Value Syntax.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	blendSpeed: string | number | any[]
) => {

	return `Start Camera(${player}, ${eyePosition}, ${lookAtPosition}, ${blendSpeed})`
}