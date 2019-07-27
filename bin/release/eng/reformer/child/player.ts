import { Type, Value } from '../../resolver'

class Player {
	public player: string

	/**
	 * @param player `Type.Player.`
	 */
	constructor(player: string = Type.Player.eventPlayer()){
		this.player = player
	}

	/**
	 * The player’s current height in meters above
	 * a surface. Results in a 0 whenever the place
	 * is on a surface.
	 */
	altitudeOf(){
		return Value.altitudeOf(this.player)
	}

	/**
	 * The player closest to a position, optionally
	 * restricted by team.
	 */
	closestPlayerTo(
		/**
		 * Center - The position to which to measure
		 * proximity. Can use most Value Syntax related
		 * to reporting a position in the map.
		 * - `Type.Vector.`
		 */
		center: string,
		/**
		 * Team - You can specify any Team Syntax to
		 * restrict which players is reported when
		 * defining this value.
		 * - `Type.Team.`
		 */
		team: string
	){
		return Value.closestPlayerTo(center, team)
	}

	/**
	 * The position of a player's first person
	 * view (used for aiming)
	 */
	eyePosition(){
		return Value.eyePosition(this.player)
	}

	/**
	 * The unit-length directional vector of a
	 * player’s current facing relative to the
	 * world. This value includes both horizontal
	 * and vertical facing.
	 */
	facingDirectionOf(){
		return Value.facingDirectionOf(this.player)
	}

	/**
	 * The player farthest to a position, optionally
	 * restricted by team.
	 */
	farthestPlayerFrom(
		/**
		 * Center - The position to which to measure
		 * proximity. Can use most Value Syntax related
		 * to reporting a position in the map.
		 * - `Type.Vector.`
		 */
		center: string,
		/**
		 * Team - You can specify any Team Syntax to
		 * restrict which players is reported when
		 * defining this value.
		 * - `Type.Player.`
		 */
		team: string
	){
		return Value.farthestPlayerFrom(center, team)
	}

	/**
	 * Whether the specified player has the specified
	 * status, either from the set status action
	 * or from a non-scripted game mechanic.
	 */
	hasStatus(
		/**
		 * Status - The status to check for. Values
		 * include Hacked, Burning, Knocked Down, Asleep,
		 * Frozen, Unkillable, Invincible, Phased Out,
		 * Rooted, or Stunned.
		 * - `Type.Status.`
		 */
		status: string
	){
		return Value.hasStatus(this.player, status)
	}

	/**
	 * The current health of a player including
	 * armor and shields.
	 */
	health(){
		return Value.health(this.player)
	}

	/**
	 * The Current Hero of a Player.
	 */
	heroOf(){
		return Value.heroOf(this.player)
	}

	/**
	 * The horizontal angle in degrees corresponding
	 * to the specified direction vector.
	 */
	horizontalAngleFromDirection(
		/**
		 * Direction - The direction vector from which
		 * to acquire a horizontal angle in degrees.
		 * The vector is unitized before calculation
		 * begins. Can use most Vector based Value
		 * Syntax to retrieve this value.
		 * - `Type.Vector.`
		 */
		direction: string
	){
		return Value.horizontalAngleFromDirection(direction)
	}

	/**
	 * The directional angle in degrees of a player’s
	 * current facing relative to the world. This
	 * value increases as the player rotates to
	 * the left (wrapping around at +/- 180).
	 */
	horizontalFacingAngleOf(){
		return Value.horizontalFacingAngleOf(this.player)
	}

	/**
	 * The current horizontal speed of a player
	 * in meters per second. This measurement excludes
	 * all vertical motion.
	 */
	horizontalSpeedOf(){
		return Value.horizontalSpeedOf(this.player)
	}

	/**
	 * Determines whether a player is alive. Returns
	 * a Boolean value.
	 */
	isAlive(){
		return Value.isAlive(this.player)
	}

	/**
	 * Whether a player is holding a specific button.
	 */
	isButtonHeld(
		/**
		 * Button - The button to check. Designed by
		 * any action inputs by ability but not directional
		 * inputs. (i.e. Primary Fire, Secondary Fire,
		 * Ultimate Ability, Jump, Crouch, etc.)
		 * - `Type.Button.`
		 */
		button: string
	){
		return Value.isButtonHeld(this.player, button)
	}

	/**
	 * Whether a player is using a specific communication
	 * type (such as emote, using a voice line, etc.).
	 */
	isCommunicating(
		/**
		 * Type - The type of communication to consider.
		 * The duration of emotes is exact, the duration
		 * of voice lines is assumed to be 4 seconds,
		 * and all other durations are assumed to be
		 * 2 seconds. Any of the four emote slots,
		 * four voice lines slots, or any standard
		 * communication (Need healing, Ultimate Status,
		 * etc.) can be designated.
		 * - `Type.Communication.`
		 */
		type: string
	){
		return Value.isCommunicating(this.player, type)
	}

	/**
	 * Whether a player is using any communication
	 * type (such as emoting, using a voice line, etc.)
	 */
	isCommunicatingAny(){
		return Value.isCommunicatingAny(this.player)
	}

	/**
	 * Whether a player is using a emote.
	 */
	isCommunicatingAnyEmote(){
		return Value.isCommunicatingAnyEmote(this.player)
	}

	/**
	 * Whether a player is using a voice line.
	 * (The duration of a voice line is assumed
	 * to be 4 seconds.)
	 */
	isCommunicatingAnyVoiceLine(){
		return Value.isCommunicatingAnyVoiceLine(this.player)
	}

	/**
	 * Whether a player is crouching.
	 */
	isCrouching(){
		return Value.isCrouching(this.player)
	}

	/**
	 * Whether a player is dead.
	 */
	isDead(){
		return Value.isDead(this.player)
	}

	/**
	 * Whether the specified player’s primary weapon
	 * attack is being used.
	 */
	isFiringPrimary(){
		return Value.isFiringPrimary(this.player)
	}

	/**
	 * Whether the specified player’s secondary
	 * weapon attack is being used.
	 */
	isFiringSecondary(){
		return Value.isFiringSecondary(this.player)
	}

	/**
	 * Whether a player is airborne.
	 */
	isInAir(){
		return Value.isInAir(this.player)
	}

	/**
	 * Whether a specific player is in the spawn
	 * room (and is thus being healed and able
	 * to change heroes).
	 */
	isInSpawnRoom(){
		return Value.isInSpawnRoom(this.player)
	}

	/**
	 * Whether a specific player is moving (as
	 * defined by having a non-zero constant speed).
	 */
	isMoving(){
		return Value.isMoving(this.player)
	}

	/**
	 * Whether a player is on the ground (or other
	 * walkable surface).
	 */
	isOnGround(){
		return Value.isOnGround(this.player)
	}

	/**
	 * Whether a specific player is currently occupying
	 * a payload or capture point.
	 */
	isOnObjective(){
		return Value.isOnObjective(this.player)
	}

	/**
	 * Whether a player is on a wall (climbing or riding).
	 */
	isOnWall(){
		return Value.isOnWall(this.player)
	}

	/**
	 * Whether a specific player’s portrait is on fire.
	 */
	isPortraitOnFire(){
		return Value.isPortraitOnFire(this.player)
	}

	/**
	 * Whether a player is standing (defined as
	 * both not moving and not in the air).
	 */
	isStanding(){
		return Value.isStanding(this.player)
	}

	/**
	 * Whether the specified player is using ability 1.
	 */
	isUsingAbility1(){
		return Value.isUsingAbility1(this.player)
	}

	/**
	 * Whether the specified player is using ability 2.
	 */
	isUsingAbility2(){
		return Value.isUsingAbility2(this.player)
	}

	/**
	 * Whether the specified player is using an
	 * ultimate ability.
	 */
	isUsingUltimate(){
		return Value.isUsingUltimate(this.player)
	}

	/**
	 * The max health of a player, including armor and shields.
	 */
	maxHealth(){
		return Value.maxHealth(this.player)
	}

	/**
	 * The number of deaths a specific player has
	 * earned. This value only accumulates while
	 * a game is in progress.
	 */
	numberOfDeaths(){
		return Value.numberOfDeaths(this.player)
	}

	/**
	 * The number of eliminations a specific player
	 * has earned. This value only accumulates
	 * while a game is in progress.
	 */
	numberOfEliminations(){
		return Value.numberOfEliminations(this.player)
	}

	/**
	 * The number of final blows a specific player
	 * has earned. This value only accumulates
	 * while a game is in progress.
	 */
	numberOfFinalBlows(){
		return Value.numberOfFinalBlows(this.player)
	}

	/**
	 * The player closest to the reticle of the
	 * specified player, optionally restricted by team.
	 */
	playerClosestToReticle(
		/**
		 * Team - The team or teams on which to search
		 * for the closest player. Can use most Team
		 * based Value Syntax to provide this value.
		 * - `Type.Team.`
		 */
		team: string
	){
		return Value.playerClosestToReticle(this.player, team)
	}

	/**
	 * The players who are within a specific view
	 * angle of a specific player’s reticle, optionally
	 * restricted by team.
	 */
	playersInViewAngle(
		/**
		 * View Angle - The view angle to compare against
		 * in degrees. Can use most Angle based Value
		 * Syntax to provide this value.
		 * - `Type.Team.`
		 */
		team: string,
		/**
		 * Team - The team or teams on which to consider
		 * players. Can use most Team based Value Syntax
		 * to provide this value.
		 * - `Type.Number.`
		 */
		viewAngle: string
	){
		return Value.playersInViewAngle(this.player, team, viewAngle)
	}

	/**
	 * The current position of a player as a vector.
	 */
	positionOf(){
		return Value.positionOf(this.player)
	}

	/**
	 * The current score of a player. Results in
	 * 0 if the game mode is not free-for-all.
	 */
	scoreOf(){
		return Value.scoreOf(this.player)
	}

	/**
	 * The current speed of a player in meters per second.
	 */
	speedOf(){
		return Value.speedOf(this.player)
	}

	/**
	 * The current speed of a player in a specific
	 * direction in meters per second.
	 */
	speedOfInDirection(
		/**
		 * Direction - The direction of travel in which
		 * to measure the player’s speed. Can use most
		 * Vector based Value Syntax to provide this value.
		 * - `Type.Vector.`
		 */
		direction: string
	){
		return Value.speedOfInDirection(this.player, direction)
	}

	/**
	 * The team of a player. If the game mode is
	 * free-for-all, the team is considered to be all.
	 */
	teamOf(){
		return Value.teamOf(this.player)
	}

	/**
	 * The directional input of a player, represented
	 * by a vector with a horizontal input on the
	 * X component (positive to the left) and vertical
	 * input on the Z component (positive upward).
	 */
	throttleOf(){
		return Value.throttleOf(this.player)
	}

	/**
	 * The current ultimate ability charge percentage of a player.
	 */
	ultimateChargePercent(){
		return Value.ultimateChargePercent(this.player)
	}

	/**
	 * The current velocity of a player as a vector.
	 * If the player is on a surface, the Y component
	 * of this velocity will be 0m even when traveling
	 * up or down a slope.
	 */
	velocityOf(){
		return Value.velocityOf(this.player)
	}

	/**
	 * The vertical angle in degrees from a player’s
	 * current forward direction to the specified
	 * position. The result is positive if the
	 * position is below the player. Otherwise,
	 * the result is zero or negative.
	 */
	verticalAngleTowards(
		/**
		 * Position - The player whose current facing
		 * the angle begins. Can use most Player based
		 * Value Syntax to provide this value.
		 * - `Type.Vector.`
		 */
		position: string
	){
		return Value.verticalAngleTowards(this.player, position)
	}

	/**
	 * The vertical angle in degrees, of a player’s
	 * current facing relative to the world. This
	 * value increases as the player looks down.
	 */
	verticalFacingAngleOf(){
		return Value.verticalFacingAngleOf(this.player)
	}

	/**
	 * The current vertical speed of a player in
	 * meters per second. This measurement excludes
	 * all horizontal motion, including motion
	 * while traveling up and down slopes.
	 */
	verticalSpeedOf(){
		return Value.verticalSpeedOf(this.player)
	}
}

export default Player