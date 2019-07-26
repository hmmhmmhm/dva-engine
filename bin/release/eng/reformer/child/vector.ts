import { Type, Value } from '../../resolver'

class Vector {
	public vector: string

	/**
	 * @param vector `Type.Vector.` 를 입력하면
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	constructor(vector: string){
		this.vector = vector
	}

	/**
	 * The angle in degrees between two directional
	 * vectors (no normalization required).
	 */
	angleBetweenVectors(
		/**
		 * Vector - One of two directional vectors
		 * between which to measure the angle in degrees.
		 * this vector does not need to be pre-normalized.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		vector1: string,
		/**
		 * Vector - One of two directional vectors
		 * between which to measure the angle in degrees.
		 * this vector does not need to be pre-normalized.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		vector2: string
	){
		return Value.angleBetweenVectors(vector1, vector2)
	}

	/**
	 * The vector in local coordinates corresponding
	 * to the provided vector in world coordinates.
	 */
	localVectorOf(
		/**
		 * World Vector - The vector in world coordinates
		 * that will be converted to local coordinates.
		 * Can use most Vector based Value Syntax to
		 * provide this data.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		worldVector: string,
		/**
		 * Local vector - The vector in local coordinates
		 * that will be converted to world coordinates.
		 * Can use most Vector based Value Syntax to
		 * provide this value.
		 * - `Type.Player.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		relativePlayer: string,
		/**
		 * Relative Player - The player to whom the
		 * local vector is relative. Can use most Player
		 * based Value Syntax to provide this value.
		 * - `Type.Transformation.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		transformation: string
	){
		return Value.localVectorOf(worldVector, relativePlayer, transformation)
	}

	/**
	 * The vector in the world coordinates corresponding
	 * to the provided vector in local coordinates.
	 */
	worldVectorOf(
		/**
		 * Local vector - Specifies whether the vector
		 * should receive a rotation and a translation
		 * (usually applied to positions) or only a
		 * rotation (usually applied to directions
		 * and velocities). Can select rotation or
		 * rotation and translation.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		localVector: string,
		/**
		 * Local vector - The vector in local coordinates
		 * that will be converted to world coordinates.
		 * Can use most Vector based Value Syntax to
		 * provide this value.
		 * - `Type.Player.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		relativePlayer: string,
		/**
		 * Relative Player - The player to whom the
		 * local vector is relative. Can use most Player
		 * based Value Syntax to provide this value.
		 * - `Type.Transformation.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		transformation: string
	){
		return Value.worldVectorOf(localVector, relativePlayer, transformation)
	}

	/**
	 * The difference between two angles, after
	 * the angles are wrapped within +/- 180 of
	 * each other, the result is positive if the
	 * second angle is greater than the first angle,
	 * otherwise the result is zero or negative.
	 */
	angleDifference(
		/**
		 * Angle - You can specify any Angle Syntax
		 * to define both of the required values.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		angle1: string,
		/**
		 * Angle - One of the two angles between which
		 * to measure the resulting angle.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		angle2: string
	){
		return Value.angleDifference(angle1, angle2)
	}
	acrossineInDegrees(){
		return Value.acrossineInDegrees()
	}

	/**
	 * Arccosine in radians of the specified value
	 */
	arccosineInRadians(
		/**
		 * Value - Input value for the function.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		value: string
	){
		return Value.arccosineInRadians(value)
	}

	/**
	 * Arcsine in degrees of the specified value.
	 */
	arcsineInDegrees(
		/**
		 * Value - Input value for the function.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		value: string
	){
		return Value.arcsineInDegrees(value)
	}

	/**
	 * Arcsine in radians of the specified value.
	 */
	arcsineInRadians(
		/**
		 * Value - Input value for the function.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		value: string
	){
		return Value.arcsineInRadians(value)
	}

	/**
	 * Arctangent in degrees of the specified numerator
	 * and denominator(often referred to as atan2).
	 */
	arctangentInDegrees(
		/**
		 * Numerator - Numerator input for the function.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		numerator: string,
		/**
		 * Denominator - Denominator input for the function.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		denominator: string
	){
		return Value.arctangentInDegrees(numerator, denominator)
	}

	/**
	 * Arctangent in radians of the specified numerator
	 * and denominator(often referred to as atan2).
	 */
	arctangentInRadians(
		/**
		 * Numerator - Numerator input for the function.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		numerator: string,
		/**
		 * Denominator - Denominator input for the function.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		denominator: string
	){
		return Value.arctangentInRadians(numerator, denominator)
	}

	/**
	 * The cosine of a specified angle in degrees.
	 * The cosine of the angle is equal to the
	 * length of the adjacent side divided by the
	 * length of the hypotenuse.
	 */
	cosineFromDegrees(
		/**
		 * Angle - Angle in degrees. Can use most Player
		 * based Value Syntax to provide this value.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		angle: string
	){
		return Value.cosineFromDegrees(angle)
	}

	/**
	 * The cosine of a specified angle in radians.
	 * The cosine of the angle is equal to the
	 * length of the adjacent side divided by the
	 * length of the hypotenuse. A radian is a
	 * unit of angle, equal to an angle at the
	 * center of a circle whose arc is equal in
	 * length to the radius.
	 */
	cosineFromRadians(
		/**
		 * Angle - Angle in radians. Can use most Player
		 * based Value Syntax to provide this value.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		angle: string
	){
		return Value.cosineFromRadians(angle)
	}

	/**
	 * The cross product of the specified values.
	 */
	crossProduct(
		/**
		 * Value - You must specify the first Value
		 * Syntax to compare to the second.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		value1: string,
		/**
		 * Value - You must specify the first Value
		 * Syntax to compare to the second.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		value2: string
	){
		return Value.crossProduct(value1, value2)
	}

	/**
	 * The unit-length direction vector corresponding
	 * to the specified angles.
	 */
	directionFromAngles(
		/**
		 * Horizontal Angle - The horizontal angle
		 * in degrees used to construct the resulting
		 * vector. Most angle based Value Syntax can be used here.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		horizontalAngle: string,
		/**
		 * Vertical Angle - The vertical angle in degrees
		 * used to construct the resulting vector.
		 * Most angle based Value Syntax can be used here.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		verticalAngle: string
	){
		return Value.directionFromAngles(horizontalAngle, verticalAngle)
	}

	/**
	 * The unit-length direction vector from position to another.
	 */
	directionTowards(
		/**
		 * Start Pos - The position from which the
		 * resulting direction vector will point. Most
		 * positional based Value Syntax can be used here.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		startPos: string,
		/**
		 * End Pos - The position to which the resulting
		 * direction vector will point. Most positional
		 * based Value Syntax can be used here.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		endPos: string
	){
		return Value.directionTowards(startPos, endPos)
	}

	/**
	 * The distance between two positions in meters.
	 */
	distanceBetween(
		/**
		 * Start Pos - One of the two positions used
		 * in the distance measurement. Most positional
		 * based Value Syntax can be used here.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		startPos: string,
		/**
		 * End Pos - One of the two positions used
		 * in the distance measurement. Most positional
		 * based Value Syntax can be used here.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		endPos: string
	){
		return Value.distanceBetween(startPos, endPos)
	}

	/**
	 * The dot product of the specified values.
	 * The dot product tells you what amount of
	 * one vector goes in the direction of another.
	 */
	dotProduct(
		/**
		 * Value - One of the two vector operands of
		 * the dot product. Any positional based Syntax
		 * may be used here.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		value1: string,
		/**
		 * Value - One of the two vector operands of
		 * the dot product. Any positional based Syntax
		 * may be used here.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		value2: string
	){
		return Value.dotProduct(value1, value2)
	}

	/**
	 * Shorthand for the direction vector(0, -1,
	 * 0) which points down.
	 */
	down(){
		return Value.down()
	}

	/**
	 * Shorthand for the direction vector(0, 0,
	 * 1) which points forward.
	 */
	forward(){
		return Value.forward()
	}

	/**
	 * The horizontal angle in degrees from a player’s
	 * current forward direction to the specified
	 * position. The result is positive if the
	 * position is on the player’s left, otherwise
	 * the result is zero or negative.
	 */
	horizontalAngleTowards(
		/**
		 * Player - The player whose current facing
		 * angle begins. Can use most player based
		 * Value Syntax to retrieve this value.
		 * - `Type.Player.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		player: string,
		/**
		 * Position - The player whose current facing
		 * the angle begins. Can use most Player based
		 * Value Syntax to provide this value.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		position: string
	){
		return Value.horizontalAngleTowards(player, position)
	}

	/**
	 * Whether two positions have line of sight
	 * with each other.
	 */
	isInLineOfSight(
		/**
		 * Start Pos - The start position for the line
		 * of sight check. Most positional based Value
		 * Syntax can be used here.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		startPos: string,
		/**
		 * End Pos - The end position for the line
		 * of sight check. Most positional based Value
		 * Syntax can be used here.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		endPos: string,
		/**
		 * Barriers - Defines how barriers affect line
		 * of sight, when considering whether a barrier
		 * belongs to an enemy, the allegiance of the
		 * player provided to start pos (if any) is
		 * used. Can be set to “Barriers do not block
		 * LOS”, Enemy barriers block LOS", and “All
		 * barriers block LOS”.
		 * - `Type.Barrier.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		barriers: string
	){
		return Value.isInLineOfSight(startPos, endPos, barriers)
	}

	/**
	 * Whether a location is within view of a player.
	 */
	isInViewAngle(
		/**
		 * Player - The player whose view to use for
		 * the check. Can use most Player based Value
		 * Syntax to provide this value.
		 * - `Type.Player.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		player: string,
		/**
		 * Location - The location to test if it’s
		 * within view. Most positional based Value
		 * Syntax can be used here.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		location: string,
		/**
		 * Team - The team or teams on which to consider
		 * players. Can use most Team based Value Syntax
		 * to provide this value.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		viewAngle: string
	){
		return Value.isInViewAngle(player, location, viewAngle)
	}

	/**
	 * Shorthand for the directional vector(1,
	 * 0, 0), which points to the left.
	 */
	left(){
		return Value.left()
	}
	nearestWalkablePostion(){
		return Value.nearestWalkablePostion()
	}

	/**
	 * The unit-length normalization of a vector.
	 */
	normalize(
		/**
		 * Vector - The vector to normalize. Can use
		 * any Vector based Value syntax to divide with.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		position: string
	){
		return Value.normalize(position)
	}

	/**
	 * An array containing all players within a
	 * certain distance of a position, optionally
	 * restricted by team and line of sight.
	 */
	playersWithinRadius(
		/**
		 * Center - The center position from which
		 * to measure distance. Can use most Vector
		 * based Value Syntax to provide this value.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		center: string,
		/**
		 * Radius - The radius in meters inside which
		 * players must be in order to be included
		 * in the resulting array. Can use most Number
		 * based Value Syntax to provide this value.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		radius: string,
		/**
		 * Team - The team or teams to which a player
		 * must belong to be included in the resulting
		 * array. Can use most Team based Value Syntax
		 * to provide this value.
		 * - `Type.Team.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		team: string,
		/**
		 * LOS Check - Specifies whether and how a
		 * player must pass a line-of-sight check to
		 * be included in the resulting array. You
		 * can choose from Off, Surfaces, Surfaces
		 * and Enemy Barriers, and Surfaces and All
		 * Barriers. Off will result in the line of
		 * sight is never blocked, allowing results
		 * through walls. Surfaces will result in line
		 * of sight is blocked by ceilings, walls,
		 * floors, platforms, and any fixed object
		 * that blocks projectiles. Surfaces and Enemy
		 * Barriers will result in line of sight is
		 * blocked by ceilings, walls, floors, platforms,
		 * any fixed object that blocks projectiles,
		 * and barriers created by the enemy team.
		 * Surfaces and All Barriers will result in
		 * line of sight is blocked by ceilings, walls,
		 * floors, platforms, any fixed object that
		 * blocks projectiles, and all barriers.
		 * - `Type.LosCheck.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		losCheck: string
	){
		return Value.playersWithinRadius(center, radius, team, losCheck)
	}

	/**
	 * Shorthand for the directional vector (-1,
	 * 0, 0), which points to the right.
	 */
	right(){
		return Value.right()
	}

	/**
	 * Sine of the specified angle in degrees.
	 * The sine is the ratio of the length of the
	 * side that is opposite  that angle to the
	 * length of the longest side of the triangle
	 * (the hypotenuse).
	 */
	sineFromDegrees(
		/**
		 * Angle - Angle in degrees. Can use most Player
		 * based Value Syntax to provide this value.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		angle: string
	){
		return Value.sineFromDegrees(angle)
	}

	/**
	 * Sine of the specified angle in radians.
	 * The sine is the ratio of the length of the
	 * side that is opposite  that angle to the
	 * length of the longest side of the triangle
	 * (the hypotenuse). A radian is a unit of
	 * angle, equal to an angle at the center of
	 * a circle whose arc is equal in length to the radius.
	 */
	sineFromRadians(
		/**
		 * Angle - Angle in radians. Can use most Player
		 * based Value Syntax to provide this value.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		angle: string
	){
		return Value.sineFromRadians(angle)
	}

	/**
	 * The slot number of the specified player.
	 * In team games, each team has slots 0 through
	 * 5. In free-for-all games, slots are numbers 0 through 11.
	 */
	slotOf(
		/**
		 * Player - The player whose slot number to
		 * acquire. Can use most Player based Value
		 * Syntax to provide this value.
		 * - `Type.Player.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		player: string
	){
		return Value.slotOf(player)
	}

	/**
	 * Tangent of the specified angle in degrees.
	 */
	tangentFromDegrees(
		/**
		 * Angle - Angle in degrees. Can use most Player
		 * based Value Syntax to provide this value.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		angle: string
	){
		return Value.tangentFromDegrees(angle)
	}

	/**
	 * Tangent of the specified angle in radians.
	 */
	tangentFromRadians(
		/**
		 * Angle - Angle in radians. Can use most Player
		 * based Value Syntax to provide this value.
		 * - `Type.Number.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		angle: string
	){
		return Value.tangentFromRadians(angle)
	}

	/**
	 * Shorthand for the directional vector(0,
	 * 1, 0). Which points upward.
	 */
	up(){
		return Value.up()
	}

	/**
	 * The vertical angle in degrees corresponding
	 * to the specified direction vector.
	 */
	verticalAngleFromDirection(
		/**
		 * Direction - The direction vector from which
		 * to acquire a vertical angle in degrees.
		 * The vector is unitized before calculations
		 * begins. Can use most Vector based Value
		 * Syntax to provide this value.
		 * - `Type.Vector.` 를 입력하면 
		 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
		 */
		direction: string
	){
		return Value.verticalAngleFromDirection(direction)
	}

	/**
	 * The X Component of the specified Vector,
	 * usually representing a leftward amount.
	 */
	xComponentOf(){
		return Value.xComponentOf(this.vector)
	}

	/**
	 * The Y Component of the specified Vector,
	 * usually representing a upward amount.
	 */
	yComponentOf(){
		return Value.yComponentOf(this.vector)
	}

	/**
	 * The Z Component of the specified Vector,
	 * usually representing a forward amount.
	 */
	zComponentOf(){
		return Value.zComponentOf(this.vector)
	}
}

export default Vector