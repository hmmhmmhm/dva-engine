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
	 * - `Type.Player.`
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
	 * - `Type.Effect.`
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
	 * - `Type.Color.`
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
	 * - `Type.Vector.`
	 */
	position: string | number | any[],
	/**
	 * Reevaluation - Specifies which of this action’s
	 * inputs will be continuously reevaluated,
	 * the effect will keep asking for and using
	 * new values from reevaluated inputs.
	 * - `Type.Number.`
	 */
	radius: string | number | any[],
	/**
	 * Visible to - One or more players who will
	 * be able to see the icon. Can use most Value
	 * Syntax to select one or multiple players.
	 * - `Type.EffectReevaluation.`
	 */
	reevaluation: string | number | any[]
) => {

	return `Create Effect(${visibleTo}, ${type}, ${color}, ${position}, ${radius}, ${reevaluation})`
}