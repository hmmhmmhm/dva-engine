/**
 * Starts turning one or more players to face
 * the specified direction.
 */
export const startFacing = (
	/**
	 * Direction - The unit direction in which
	 * the player or players will eventually face.
	 * Can use most Vector based Value Syntax.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Turn Rate - The turn rate in degrees per
	 * second. Can use most Number based Value
	 * Syntax to specify.
	 * - `Type.Vector.`
	 */
	direction: string | number | any[],
	/**
	 * Relative - Specifies whether direction is
	 * relative to the world coordinates or the
	 * local coordinates of the player or players.
	 * - `Type.Number.`
	 */
	turnRate: string | number | any[],
	/**
	 * Reevaluation - Specifies which of this actions
	 * inputs will be continously reevaluated.
	 * This action will keep asking for and using
	 * new values from reevaluated inputs. You
	 * can choose from “Direction and Turn Rate” or “None”.
	 * - `Type.Relative.`
	 */
	relative: string | number | any[],
	/**
	 * Player - The player or players who will
	 * start turning. Can use most Player based Value Syntax.
	 * - `Type.FacingReevaluation.`
	 */
	reevaluation: string | number | any[]
) => {

	return `Start Facing(${player}, ${direction}, ${turnRate}, ${relative}, ${reevaluation})`
}