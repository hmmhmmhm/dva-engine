/**
 * Places your camera at a location, facing a direction.
 */
export const startCamera = (
	/**
	 * Player - The player executing this rule.
	 * As specified by the event, may be the same
	 * as the attacker or the victim. Can use most
	 * Player based Value Syntax.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Eye Position - The position of the camrea,
	 * reevaluates continously. Can use most Vector
	 * based Value Syntax to specify.
	 * - `Type.Vector.`
	 */
	eyePosition: string | number | any[],
	/**
	 * Look at position - Where the camera looks
	 * at, reevaluates continously. Can use most
	 * Vector based Value Syntax to specify.
	 * - `Type.Vector.`
	 */
	lookAtPosition: string | number | any[],
	/**
	 * Blend Speed - How fast to blend the camera
	 * movement as positions change. 0 means do
	 * not blend at all and just change positions
	 * instantly. Can use most Number based Value Syntax.
	 * - `Type.Number.`
	 */
	blendSpeed: string | number | any[]
) => {

	return `Start Camera(${player}, ${eyePosition}, ${lookAtPosition}, ${blendSpeed})`
}