/**
 * Creates an in-world entity. This icon entity
 * will persist until destroyed. To obtain
 * a reference to this entity, use the last
 * created entity value. This action will fail
 * if too many entities have been created.
 */
export const createIcon = (
	/**
	 * Position - The icon’s position. If this
	 * value is a player, then the icon will appear
	 * above the player’s head, otherwise, the
	 * value is interpreted as a position in the
	 * world. Can use most Player or Vector based Value Syntax.
	 * - `Type.Player.`
	 */
	visibleTo: string | number | any[],
	/**
	 * Icon - The icon to be created. (Arrow: Down,
	 * Arrow: Left, Arrow: Right, Arrow: Up, Asterisk,
	 * Bolt, Checkmark, Circle, Club, Diamond,
	 * Dizzy, Exclamation Mark, Eye, Fire, Flag,
	 * Halo, Happy, Heart, Moon, No, Plus, Poison,
	 * Poison 2, Question Mark, Radioactive, Recycle,
	 * Ring Thick, Ring Thin, Sad, Skull, Spade,
	 * Spiral, Stop, Trashcan, Warning, X)
	 * - `Type.Vector.`
	 */
	position: string | number | any[],
	/**
	 * Reevaluation - Specifies which of this action’s
	 * inputs will be continously reevaluated,
	 * the icon will keep asking for and using
	 * new values from reevaluated inputs. (Arrow:
	 * Down, Arrow: Left, Arrow: Right, Arrow:
	 * Up, Asterisk, Bolt, Checkmark, Circle, Club,
	 * Diamond, Dizzy, Exclamation Mark, Eye, Fire,
	 * Flag, Halo, Happy, Heart, Moon, No, Plus,
	 * Poison, Poison 2, Question Mark, Radioactive,
	 * Recycle, Ring Thick, Ring Thin, Sad, Skull,
	 * Spade, Spiral, Stop, Trashcan, Warning,
	 * X, Visible to and position, Position, Visible to, None)
	 * - `Type.Icon.`
	 */
	icon: string | number | any[],
	/**
	 * Visible to - One or more players who will
	 * be able to see the icon. Can use most Value
	 * Syntax to select one or multiple players.
	 * - `Type.IconReevaluation.`
	 */
	reevaluation: string | number | any[],
	/**
	 * Icon Color - The color of the icon to be
	 * created. IF a particular team is chosen,
	 * the icon will either be red or blue, depending
	 * on whether the team is hostile to the viewer.
	 * (Arrow: Down, Arrow: Left, Arrow: Right,
	 * Arrow: Up, Asterisk, Bolt, Checkmark, Circle,
	 * Club, Diamond, Dizzy, Exclamation Mark,
	 * Eye, Fire, Flag, Halo, Happy, Heart, Moon,
	 * No, Plus, Poison, Poison 2, Question Mark,
	 * Radioactive, Recycle, Ring Thick, Ring Thin,
	 * Sad, Skull, Spade, Spiral, Stop, Trashcan,
	 * Warning, X, Visible to and position, Position,
	 * Visible to, None)
	 * - `Type.Color.`
	 */
	iconColor: string | number | any[],
	/**
	 * Show when offscreen - Should this icon still
	 * appear even when it is behind you? Can use
	 * most Boolean based Value Syntax to specify.
	 * - `Type.Bool.`
	 */
	showWhenOffscreen: string | number | any[]
) => {

	return `Create Icon(${visibleTo}, ${position}, ${icon}, ${reevaluation}, ${iconColor}, ${showWhenOffscreen})`
}