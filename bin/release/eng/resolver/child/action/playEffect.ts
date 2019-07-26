/**
 * Plays an effect at a position in the world.
 * The lifetime of this effect is short, so
 * it does not need to be updated or destroyed.
 */
export const playEffect = (
	/**
	 * Visible to - One or more players who will
	 * be able to see the effect. Can use most
	 * Value Syntax to select one or multiple players.
	 * - `Type.PlayersParam.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	visibleTo: string | number | any[],
	/**
	 * Type - The type of the effect to be created.
	 * (Good Explosion, Bad Explosion, Ring Explosion,
	 * Good Pickup Effect, Bad Pickup Effect, Debuff
	 * Impact Sound, Buff Impact Sound, Ring Explosion
	 * Sound, Buff Explosion Sound, Explosion Sound)
	 * - `Type.Play.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	type: string | number | any[],
	/**
	 * Color - The color of the effect to be created.
	 * IF a particular team is chosen, the effect
	 * will either be red or blue, depending on
	 * whether the team is hostile to the viewer.
	 * (Good Explosion, Bad Explosion, Ring Explosion,
	 * Good Pickup Effect, Bad Pickup Effect, Debuff
	 * Impact Sound, Buff Impact Sound, Ring Explosion
	 * Sound, Buff Explosion Sound, Explosion Sound)
	 * - `Type.Color.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	color: string | number | any[],
	/**
	 * Position - The effect’s position. If this
	 * value is a player, then the effect will
	 * move along with the player, otherwise, the
	 * value is interpreted as a position in the
	 * world. Can use most Player or Vector based
	 * Value Syntax. (Good Explosion, Bad Explosion,
	 * Ring Explosion, Good Pickup Effect, Bad
	 * Pickup Effect, Debuff Impact Sound, Buff
	 * Impact Sound, Ring Explosion Sound, Buff
	 * Explosion Sound, Explosion Sound)
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	position: string | number | any[],
	/**
	 * Radius - The effect’s radius in meters.
	 * Can use most Number based Value Syntax.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	radius: string | number | any[]
) => {

	return `Play Effect(${visibleTo}, ${type}, ${color}, ${position}, ${radius})`
}