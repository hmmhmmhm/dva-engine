/**
 * Creates an in-world effect entity. This
 * effect entity will persist until destroyed,
 * to obtain a reference to this entity, use
 * the last created entity value. This action
 * will fail if too many entities have been created.
 */
export const createEffect = (
	/**
	 * Visible to - One or more players who will
	 * be able to see the effect. Can use most
	 * Value Syntax to select one or multiple players.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	visibleTo: string | number | any[],
	/**
	 * Color - The color of the effect to be created.
	 * IF a particular team is chosen, the effect
	 * will either be red or blue, depending on
	 * whether the team is hostile to the viewer.
	 * Does not apply to sound effects. (Sphere,
	 * Light Shaft, Orb, Ring, Cloud, Sparkles,
	 * Good Aura, Bad Aura, Energy Sound, Pick-Up
	 * Sound, Good Aura Sound, Bad Aura Sound,
	 * Sparkles Sound, Smoke Sound, Decal Sound, Beacon Sound)
	 * - `Type.Effect.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	type: string | number | any[],
	/**
	 * Position - The effect’s position. If this
	 * value is a player, then the effect will
	 * move along with the player, otherwise, the
	 * value is interpreted as a position in the
	 * world. Can use most Player or Vector based
	 * Value Syntax. (Sphere, Light Shaft, Orb,
	 * Ring, Cloud, Sparkles, Good Aura, Bad Aura,
	 * Energy Sound, Pick-Up Sound, Good Aura Sound,
	 * Bad Aura Sound, Sparkles Sound, Smoke Sound,
	 * Decal Sound, Beacon Sound)
	 * - `Type.Color.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	color: string | number | any[],
	/**
	 * Radius - The effect’s radius in meters.
	 * Sound effects have their volume affected
	 * instead. (Sphere, Light Shaft, Orb, Ring,
	 * Cloud, Sparkles, Good Aura, Bad Aura, Energy
	 * Sound, Pick-Up Sound, Good Aura Sound, Bad
	 * Aura Sound, Sparkles Sound, Smoke Sound,
	 * Decal Sound, Beacon Sound)
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	position: string | number | any[],
	/**
	 * Reevaluation - Specifies which of this action’s
	 * inputs will be continuously reevaluated,
	 * the effect will keep asking for and using
	 * new values from reevaluated inputs.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	radius: string | number | any[],
	/**
	 * Visible to - One or more players who will
	 * be able to see the icon. Can use most Value
	 * Syntax to select one or multiple players.
	 * - `Type.EffectReevaluation.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	reevaluation: string | number | any[]
) => {

	return `Create Effect(${visibleTo}, ${type}, ${color}, ${position}, ${radius}, ${reevaluation})`
}