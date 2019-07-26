/**
 * Preemptively loads the specified hero or
 * heroes into memory using the skins of the
 * specified player or players, available memory
 * permitting. Useful whenever rapid hero changing
 * is possible and the next hero is known.
 */
export const preloadHero = (
	/**
	 * Player - The player or players who will
	 * begin preloading a hero or heroes. Only
	 * one preload hero action will be active at
	 * a time for a given player. Can use most
	 * Player based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Hero - The hero or heroes to begin preloading
	 * for the specified player or players. When
	 * multiple heroes are specified in an array,
	 * the Heroes towards the beginning of the
	 * array are prioritized. Can use most Hero
	 * based Value Syntax for this value.
	 * - `Type.Hero.`
	 */
	hero: string | number | any[]
) => {

	return `Preload Hero(${player}, ${hero})`
}