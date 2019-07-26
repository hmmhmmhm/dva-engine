import {
    // Number Type
    IAbsoluteValue,
    INumber,

    // Custom Array Type
    IAllDeadPlayers,
    IAllLivingPlayers,
    IAllPlayers,
    IAllPlayersNotOnObjective,
    IAllPlayersOnObjective,
    IAllowedHeroes,
    IAllHeroes,
    IArccosineInDegrees,
    IArccosineInRadians,
    IArcsineInDegrees,
    IArcsineInRadians,
    IArctangentInDegrees,
    IArctangentInRadians,

    IAppendToArray,
    IArrayContains,
    IArraySlice,

    // Method Type
    IAltitudeOf,
    ILocalVectorOf,
    IWorldVectorOf,
    IVectorTowards,
    IAngleBetweenVectors,
    IAngleDifference,

    // Class Type
    IVector,
    IAttacker,

    // Operator Type
    IAnd,

    // Variable Type
    IGlobalVariable,
    IPlayerVariable,

    // Unclassified
    IClosestPlayerTo,
    ICompare,
    IControlModeScoringPercentage,
    IControlModeScoringTeam,
    ICosineFromDegrees,
    ICosineFromRadians,
    ICountOf,
    ICrossProduct,
    ICurrentArrayElement,
    IDirectionFromAngles,
    IDirectionTowards,
    IDistanceBetween,
    IDotProduct,
    IEmptyArray,
    IEntityExists,
    IEventDamage,
    IEventPlayer,
    IBackward,
    ITeam,
    IDown,
    IEventWasCriticalHit,
    IEyePosition,
    IFacingDirectionOf,
    IFalse,
    IFarthestPlayerFrom,
    IFilteredArray,
    IFirstOf,
    IFlagPosition,
    IForward,
    IHasSpawned,
    IHasStatus,
    IHealth,
    IHero,
    IHeroIconString,
    IHeroOf,
    IHorizontalAngleFromDirection,
    IHorizontalAngleTowards,
    IHorizontalFacingAngleOf,
    IHorizontalSpeedOf,
    IIndexOfArrayValue,
    IIsAlive,
    IIsAssemblingHeroes,
    IIsBetweenRounds,
    IIsButtonHeld,
    IIsCommunicating,
    IIsCommunicatingAny,
    IIsCommunicatingAnyEmote,
    IIsCommunicatingAnyVoiceLine,
    IIsControlModePointLocked,
    IIsCrouching,
    IIsCTFModeInSuddenDeath,
    IIsDead,
    IIsFiringPrimary,
    IIsFlagAtBase,
    IIsFlagBeingCarried,
    IIsGameInProgress,
    IIsHeroBeingPlayed,
    IIsInAir,
    IIsInLineOfSight,
    IIsInSetup,
    IIsInSpawnRoom,
    IIsInViewAngle,
    IIsMatchComplete,
    IIsMoving,
    IIsObjectiveComplete,
    IIsOnGround,
    IIsOnObjective,
    IIsOnWall,
    IIsPortraitOnFire,
    IIsStanding,
    IIsTeamOnDefense,
    IIsFiringSecondary,
    IIsTeamOnOffense,
    IIsTrueForAll,
    IIsTrueForAny,
    IIsUsingAbility1,
    IIsUsingAbility2,
    IIsUsingUltimate,
    IIsWaitingForPlayers,
    ILastCreatedEntity,
    ILastDamageModificationId,
    ILastDamageOverTimeId,
    ILastHealOverTimeId,
    ILastOf,
    ILastTextId,
    ILeft,
    IMatchRound,
    IMatchTime,
    IMax,
    IMaxHealth,
    IMin,
    IModulo,
    INearestWalkablePosition,
    INormalize,
    INormalizedHealth,
    INot,
    INull,
    INumberOfDeadPlayers,
    INumberOfDeaths,
    INumberOfEliminations,
    INumberOfFinalBlows,
    INumberOfHeroes,
    INumberOfLivingPlayers,
    INumberOfPlayers,
    INumberOfPlayersOnObjective,
    IObjectiveIndex,
    IObjectivePosition,
    IOppositeTeamOf,
    IOr,
    IPayloadPosition,
    IPayloadProgressPercentage,
    IPlayerCarryingFlag,
    IPlayerClosestToReticle,
    IPlayersInSlot,
    IPlayersInViewAngle,
    IPlayersOnHero,
    IPlayersWithinRadius,
    IPointCapturePercentage,
    IPositionOf,
    IRaiseToPower,
    IRandomInteger,
    IRandomReal,
    IRandomValueInArray,
    IRandomizedArray,
    IRayCastHitNormal,
    IRayCastHitPlayer,
    IRayCastHitPosition,
    IRemoveFromArray,
    IRight,
    IRoundToInteger,
    IScoreOf,
    ISineFromDegrees,
    ISineFromRadians,
    ISlotOf,
    ISortedArray,
    ISpeedOf,
    ISpeedOfInDirection,
    ISquareRoot,
    IString,
    ISubtract,
    IAdd,
    IDivide,
    IMultiply,
    ITangentFromDegrees,
    ITangentFromRadians,
    ITeamOf,
    ITeamScore,
    IThrottleOf,
    ITotalTimeElapsed,
    ITrue,
    IUltimateChargePercent,
    IUp,
    IValueInArray,
    IVelocityOf,
    IVerticalAngleFromDirection,
    IVerticalAngleTowards,
    IVerticalFacingAngleOf,
    IVerticalSpeedOf,
    IVictim,
    IXComponentOf,
    IYComponentOf,
    IZComponentOf,
    IServerLoad,
    IServerLoadAverage,
    IServerLoadPeak,

} from './child'

export interface IValue {
    /**
     * The absolute value is a measure of how far
     * the number is from zero. If you think of
     * a number line, with zero in the center,
     * all you’re really doing is asking how far
     * away you are from this zero point. For example
     * the Absolute Value of 4 is 4 and the absolute
     * value of -6 is 6.
     */
    absoluteValue: IAbsoluteValue

    /**
     * The sum of two numbers or vectors. This
     * value will add the two specified values.
     */
    add: IAdd

    /**
     * An array containing all dead players on
     * a team in a match. A player is defined as
     * being dead when they are eliminated but
     * have not yet respawned back into the game.
     */
    allDeadPlayers: IAllDeadPlayers

    /**
     * An array of all heroes in Overwatch. Not
     * to be confused with the All Players array
     */
    allHeroes: IAllHeroes

    /**
     * An array containing all living players on
     * a team in a match. A player is defined as
     * being alive when they are spawned into the
     * game but have not yet been eliminated since spawning.
     */
    allLivingPlayers: IAllLivingPlayers

    /**
     * An array containing all players on a team in a match.
     */
    allPlayers: IAllPlayers

    /**
     * An array containing all players occupying
     * neither a payload nor a control point (either
     * on a team or in a match).
     */
    allPlayersNotOnObjective: IAllPlayersNotOnObjective

    /**
     * An array containing all players occupying
     * either a payload or a control point (either
     * on a team or in a match).
     */
    allPlayersOnObjective: IAllPlayersOnObjective

    /**
     * The array of heroes from which the specified
     * player is currently allowed to select.
     */
    allowedHeroes: IAllowedHeroes

    /**
     * The player’s current height in meters above
     * a surface. Results in a 0 whenever the place
     * is on a surface.
     */
    altitudeOf: IAltitudeOf

    /**
     * Whether both of the two inputs are true
     * or equivalent to true.
     */
    and: IAnd

    /**
     * The angle in degrees between two directional
     * vectors (no normalization required).
     */
    angleBetweenVectors: IAngleBetweenVectors

    /**
     * The difference between two angles, after
     * the angles are wrapped within +/- 180 of
     * each other, the result is positive if the
     * second angle is greater than the first angle,
     * otherwise the result is zero or negative.
     */
    angleDifference: IAngleDifference

    /**
     * A copy of an array with one or more values
     * appended to the end.
     */
    appendToArray: IAppendToArray

    /**
     * Arccosine in degrees of the specified value.
     */
    arccosineInDegrees: IArccosineInDegrees

    /**
     * Arccosine in radians of the specified value
     */
    arccosineInRadians: IArccosineInRadians

    /**
     * Arcsine in degrees of the specified value.
     */
    arcsineInDegrees: IArcsineInDegrees

    /**
     * Arcsine in radians of the specified value.
     */
    arcsineInRadians: IArcsineInRadians

    /**
     * Arctangent in degrees of the specified numerator
     * and denominator(often referred to as atan2).
     */
    arctangentInDegrees: IArctangentInDegrees

    /**
     * Arctangent in radians of the specified numerator
     * and denominator(often referred to as atan2).
     */
    arctangentInRadians: IArctangentInRadians

    /**
     * Whether the specified array contains the
     * specified value.
     */
    arrayContains: IArrayContains

    /**
     * A copy of the specified array containing
     * only values from a specified index range.
     */
    arraySlice: IArraySlice

    /**
     * The player that dealt damage for the event
     * currently being processed by this rule.
     * May be the same as the victim or the event player.
     */
    attacker: IAttacker

    /**
     * Shorthand for the direction vector(0, 0,
     * -1) which points backwards.
     */
    backward: IBackward

    /**
     * The player closest to a position, optionally
     * restricted by team.
     */
    closestPlayerTo: IClosestPlayerTo

    /**
     * Whether the comparison of the two inputs is true.
     */
    compare: ICompare

    /**
     * The score percentage for the specified team
     * in the control mode.
     */
    controlModeScoringPercentage: IControlModeScoringPercentage

    /**
     * The team that is currently accumulating
     * score percentage in control mode Results
     * in all if neither team is accumulating score.
     */
    controlModeScoringTeam: IControlModeScoringTeam

    /**
     * The cosine of a specified angle in degrees.
     * The cosine of the angle is equal to the
     * length of the adjacent side divided by the
     * length of the hypotenuse.
     */
    cosineFromDegrees: ICosineFromDegrees

    /**
     * The cosine of a specified angle in radians.
     * The cosine of the angle is equal to the
     * length of the adjacent side divided by the
     * length of the hypotenuse. A radian is a
     * unit of angle, equal to an angle at the
     * center of a circle whose arc is equal in
     * length to the radius.
     */
    cosineFromRadians: ICosineFromRadians

    /**
     * The number of elements in the specified array.
     */
    countOf: ICountOf

    /**
     * The cross product of the specified values.
     */
    crossProduct: ICrossProduct

    /**
     * The current array element being considered.
     * Only meaningful during the evaluation of
     * values such as filtered array and sorted array.
     */
    currentArrayElement: ICurrentArrayElement

    /**
     * The unit-length direction vector corresponding
     * to the specified angles.
     */
    directionFromAngles: IDirectionFromAngles

    /**
     * The unit-length direction vector from position to another.
     */
    directionTowards: IDirectionTowards

    /**
     * The distance between two positions in meters.
     */
    distanceBetween: IDistanceBetween
    
    /**
     * The ratio of two numbers or vectors. A vector
     * divided by a number will yield a scaled
     * vector. Division by zero results in zero.
     */
    divide: IDivide

    /**
     * The dot product of the specified values.
     * The dot product tells you what amount of
     * one vector goes in the direction of another.
     */
    dotProduct: IDotProduct

    /**
     * Shorthand for the direction vector(0, -1,
     * 0) which points down.
     */
    down: IDown

    /**
     * An array with no elements.
     */
    emptyArray: IEmptyArray

    /**
     * Whether the specified player, icon entity,
     * or effect entity still exists. Useful for
     * determining if a player has left the match
     * or an entity has been destroyed.
     */
    entityExists: IEntityExists

    /**
     * The amount of damage received by the victim
     * for the event currently being processed by this rule.
     */
    eventDamage: IEventDamage

    /**
     * The player executing the rule, as specified
     * by the event, may be the same as the attacker or victim.
     */
    eventPlayer: IEventPlayer

    /**
     * Whether the damage was a critical hit (such
     * as a headshot) for the event currently being
     * processed by this rule.
     */
    eventWasCriticalHit: IEventWasCriticalHit

    /**
     * The position of a player's first person
     * view (used for aiming)
     */
    eyePosition: IEyePosition

    /**
     * The unit-length directional vector of a
     * player’s current facing relative to the
     * world. This value includes both horizontal
     * and vertical facing.
     */
    facingDirectionOf: IFacingDirectionOf

    /**
     * The Boolean value of false.
     */
    false: IFalse

    /**
     * The player farthest to a position, optionally
     * restricted by team.
     */
    farthestPlayerFrom: IFarthestPlayerFrom

    /**
     * A copy of the specified array with any values
     * that do not match the specified condition removed.
     */
    filteredArray: IFilteredArray

    /**
     * The value at the started of the specified
     * array. Results in a 0 if the specified array is empty.
     */
    firstOf: IFirstOf

    /**
     * The position of a specific team’s flag in
     * Capture the Flag.
     */
    flagPosition: IFlagPosition

    /**
     * Shorthand for the direction vector(0, 0,
     * 1) which points forward.
     */
    forward: IForward

    /**
     * The current value of a global variable,
     * which is a variable which belongs to the
     * custom game itself.
     */
    globalVariable: IGlobalVariable

    /**
     * Whether an entity has spawned in the world.
     * Results in false for players who have not
     * chosen a hero yet.
     */
    hasSpawned: IHasSpawned

    /**
     * Whether the specified player has the specified
     * status, either from the set status action
     * or from a non-scripted game mechanic.
     */
    hasStatus: IHasStatus

    /**
     * The current health of a player including
     * armor and shields.
     */
    health: IHealth

    /**
     * A hero constant. Specifies one of the available
     * heroes by name in the game.
     */
    hero: IHero

    /**
     * Converts a hero parameter into a string
     * that shows up as an icon.
     */
    heroIconString: IHeroIconString

    /**
     * The Current Hero of a Player.
     */
    heroOf: IHeroOf

    /**
     * The horizontal angle in degrees corresponding
     * to the specified direction vector.
     */
    horizontalAngleFromDirection: IHorizontalAngleFromDirection
    
    /**
     * The horizontal angle in degrees from a player’s
     * current forward direction to the specified
     * position. The result is positive if the
     * position is on the player’s left, otherwise
     * the result is zero or negative.
     */
    horizontalAngleTowards: IHorizontalAngleTowards

    /**
     * The directional angle in degrees of a player’s
     * current facing relative to the world. This
     * value increases as the player rotates to
     * the left (wrapping around at +/- 180).
     */
    horizontalFacingAngleOf: IHorizontalFacingAngleOf

    /**
     * The current horizontal speed of a player
     * in meters per second. This measurement excludes
     * all vertical motion.
     */
    horizontalSpeedOf: IHorizontalSpeedOf

    /**
     * The index of a value within an array or
     * -1 if no such value can be found.
     */
    indexOfArrayValue: IIndexOfArrayValue

    /**
     * Determines whether a player is alive. Returns
     * a Boolean value.
     */
    isAlive: IIsAlive
    
    /**
     * Whether the match is currently in its assemble heroes phase.
     */
    isAssemblingHeroes: IIsAssemblingHeroes

    /**
     * Whether the match is between rounds.
     */
    isBetweenRounds: IIsBetweenRounds

    /**
     * Whether a player is holding a specific button.
     */
    isButtonHeld: IIsButtonHeld

    /**
     * Whether a player is using a specific communication
     * type (such as emote, using a voice line, etc.).
     */
    isCommunicating: IIsCommunicating

    /**
     * Whether a player is using any communication
     * type (such as emoting, using a voice line, etc.)
     */
    isCommunicatingAny: IIsCommunicatingAny

    /**
     * Whether a player is using a emote.
     */
    isCommunicatingAnyEmote: IIsCommunicatingAnyEmote

    /**
     * Whether a player is using a voice line.
     * (The duration of a voice line is assumed
     * to be 4 seconds.)
     */
    isCommunicatingAnyVoiceLine: IIsCommunicatingAnyVoiceLine

    /**
     * Whether the point is locked in control mode.
     */
    isControlModePointLocked: IIsControlModePointLocked
    
    /**
     * Whether a player is crouching.
     */
    isCrouching: IIsCrouching

    /**
     * Whether the current game of capture the
     * flag is in sudden death.
     */
    isCTFModeInSuddenDeath: IIsCTFModeInSuddenDeath

    /**
     * Whether a player is dead.
     */
    isDead: IIsDead

    /**
     * Whether the specified player’s primary weapon
     * attack is being used.
     */
    isFiringPrimary: IIsFiringPrimary

    /**
     * Whether the specified player’s secondary
     * weapon attack is being used.
     */
    isFiringSecondary: IIsFiringSecondary

    /**
     * Whether a specific team’s flag is at its
     * base in capture the flag.
     */
    isFlagAtBase: IIsFlagAtBase

    /**
     * Whether a specific team's flag is being
     * is being carried by a member of the opposing
     * team in capture the flag.
     */
    isFlagBeingCarried: IIsFlagBeingCarried

    /**
     * Whether the main phase of the match is in
     * progress (during which time combat and scoring are allowed).
     */
    isGameInProgress: IIsGameInProgress

    /**
     * Whether a specific hero is being played
     * (either on a team or in the match).
     */
    isHeroBeingPlayed: IIsHeroBeingPlayed

    /**
     * Whether a player is airborne.
     */
    isInAir: IIsInAir

    /**
     * Whether two positions have line of sight
     * with each other.
     */
    isInLineOfSight: IIsInLineOfSight

    /**
     * Whether the match is currently in its setup phase.
     */
    isInSetup: IIsInSetup

    /**
     * Whether a specific player is in the spawn
     * room (and is thus being healed and able
     * to change heroes).
     */
    isInSpawnRoom: IIsInSpawnRoom

    /**
     * Whether a location is within view of a player.
     */
    isInViewAngle: IIsInViewAngle

    /**
     * Whether the match has finished.
     */
    isMatchComplete: IIsMatchComplete

    /**
     * Whether a specific player is moving (as
     * defined by having a non-zero constant speed).
     */
    isMoving: IIsMoving

    /**
     * Whether the specified objective has been
     * completed Results in false if the game mode
     * is not assault, escort, or assault/escort (hybrid).
     */
    isObjectiveComplete: IIsObjectiveComplete

    /**
     * Whether a player is on the ground (or other
     * walkable surface).
     */
    isOnGround: IIsOnGround

    /**
     * Whether a specific player is currently occupying
     * a payload or capture point.
     */
    isOnObjective: IIsOnObjective

    /**
     * Whether a player is on a wall (climbing or riding).
     */
    isOnWall: IIsOnWall

    /**
     * Whether a specific player’s portrait is on fire.
     */
    isPortraitOnFire: IIsPortraitOnFire

    /**
     * Whether a player is standing (defined as
     * both not moving and not in the air).
     */
    isStanding: IIsStanding

    /**
     * Whether the specified team is currently
     * on defense in a standard match.
     */
    isTeamOnDefense: IIsTeamOnDefense

    /**
     * Whether the specified team is currently
     * on offense in a standard match.
     */
    isTeamOnOffense: IIsTeamOnOffense

    /**
     * Whether the specified condition evaluates
     * to true for every value in the specified array.
     */
    isTrueForAll: IIsTrueForAll

    /**
     * Whether the specified condition evaluates
     * to true for any value in the specified array.
     */
    isTrueForAny: IIsTrueForAny

    /**
     * Whether the specified player is using ability 1.
     */
    isUsingAbility1: IIsUsingAbility1

    /**
     * Whether the specified player is using ability 2.
     */
    isUsingAbility2: IIsUsingAbility2

    /**
     * Whether the specified player is using an
     * ultimate ability.
     */
    isUsingUltimate: IIsUsingUltimate

    /**
     * Whether the match is waiting for players
     * to join before starting.
     */
    isWaitingForPlayers: IIsWaitingForPlayers

    /**
     * A reference to the last effect or icon entity
     * created by the event player (or created
     * at the global level).
     */
    lastCreatedEntity: ILastCreatedEntity

    /**
     * An id representing the most recent start
     * damage modification action that was executed
     * by the event player (or executed at the global level).
     */
    lastDamageModificationId: ILastDamageModificationId

    /**
     * An ID representing the most recent damage
     * over time action that was executed by the
     * event player (or executed at the global level).
     */
    lastDamageOverTimeId: ILastDamageOverTimeId

    /**
     * An ID representing the most recent heal
     * over time action that was executed by the
     * event player (or executed at the global level).
     */
    lastHealOverTimeId: ILastHealOverTimeId

    /**
     * The value at the end of the specified array.
     * Results in a 0 if the specified array is empty.
     */
    lastOf: ILastOf

    /**
     * A reference to the last piece of text created
     * by the event player (or created at the global
     * level) via the create HUD text or create
     * in-world text action.
     */
    lastTextId: ILastTextId

    /**
     * Shorthand for the directional vector(1,
     * 0, 0), which points to the left.
     */
    left: ILeft

    /**
     * The vector in local coordinates corresponding
     * to the provided vector in world coordinates.
     */
    localVectorOf: ILocalVectorOf

    /**
     * The current round of the match, counting
     * up from 1. This will return a numerical value
     */
    matchRound: IMatchRound

    /**
     * The amount of time in seconds remaining
     * in the current game mode phase. This will
     * return a numerical value.
     */
    matchTime: IMatchTime

    /**
     * The greater of the two numbers. This will
     * return a numerical value of two number values compared.
     */
    max: IMax

    /**
     * The max health of a player, including armor and shields.
     */
    maxHealth: IMaxHealth

    /**
     * The lesser of the two numbers. This will
     * return a numerical value of two number values compared.
     */
    min: IMin

    /**
     * The remainder of the left-hand operand divided
     * by the right-hand operand. Any number modulo
     * zero will result in zero. This will return
     * a numerical value of two number values compared.
     * For example 7 divided by 2 will result in
     * 1 for the Modulo.
     */
    modulo: IModulo

    /**
     * The product of two numbers or vectors. A
     * vector multiplied by a number will yield
     * a scaled vector.
     */
    multiply: IMultiply

    /**
     * The position closest to the specified position
     * that can be stood on and is accessible from a spawn point.
     */
    nearestWalkablePosition: INearestWalkablePosition

    /**
     * The unit-length normalization of a vector.
     */
    normalize: INormalize

    /**
     * The current health of a player. including
     * armor and shields, normalized between 0
     * and 1. (for example, 0 is no health, 0.5
     * is half health, 1 is full health, etc.)
     */
    normalizedHealth: INormalizedHealth

    /**
     * Whether the input is false (or the equivalent to false)
     */
    not: INot

    /**
     * The absence of a player, used when no player
     * is desired for a particular input, equivalent
     * to the real number 0 for the purposes of
     * comparison and debugging.
     */
    null: INull

    /**
     * Number - A real number constant. Can use
     * most Number based Value Syntax to provide this value.
     */
    number: INumber

    /**
     * The number of dead players on a team or in the match.
     */
    numberOfDeadPlayers: INumberOfDeadPlayers

    /**
     * The number of deaths a specific player has
     * earned. This value only accumulates while
     * a game is in progress.
     */
    numberOfDeaths: INumberOfDeaths

    /**
     * The number of eliminations a specific player
     * has earned. This value only accumulates
     * while a game is in progress.
     */
    numberOfEliminations: INumberOfEliminations

    /**
     * The number of final blows a specific player
     * has earned. This value only accumulates
     * while a game is in progress.
     */
    numberOfFinalBlows: INumberOfFinalBlows

    /**
     * The number of players playing a specific
     * hero on a team or in the match.
     */
    numberOfHeroes: INumberOfHeroes

    /**
     * The number of living players on a team or in the match.
     */
    numberOfLivingPlayers: INumberOfLivingPlayers

    /**
     * The number of players on a team or in the match.
     */
    numberOfPlayers: INumberOfPlayers

    /**
     * The number of players occupying a payload
     * or a control point (either on a team or in the match).
     */
    numberOfPlayersOnObjective: INumberOfPlayersOnObjective

    /**
     * The control point, payload checkpoint, or
     * payload destination currently active (either
     * 0, 1, or 2). Valid in Assault, Assault/Escort
     * (Hybrid), Escort, and Control.
     */
    objectiveIndex: IObjectiveIndex

    /**
     * The position in the world of the specified
     * objective (either a control point, a payload
     * checkpoint, or a payload destination) Valid
     * in Assault, Assault/Escort (Hybrid), Escort, and Control.
     */
    objectivePosition: IObjectivePosition

    /**
     * The team opposite the specified team.
     */
    oppositeTeamOf: IOppositeTeamOf

    /**
     * Whether either of the two inputs are true
     * (or equivalent to true).
     */
    or: IOr

    /**
     * The position in the world of the active payload.
     */
    payloadPosition: IPayloadPosition

    /**
     * The current progress towards the destination
     * for the active payload (expressed as a percentage).
     */
    payloadProgressPercentage: IPayloadProgressPercentage

    /**
     * The player carrying a particular team’s
     * flag in capture the flag. Results in null
     * if no player is carrying the flag.
     */
    playerCarryingFlag: IPlayerCarryingFlag

    /**
     * The player closest to the reticle of the
     * specified player, optionally restricted by team.
     */
    playerClosestToReticle: IPlayerClosestToReticle

    /**
     * The current value of a player variable,
     * which is a variable that belongs to a specific player.
     */
    playerVariable: IPlayerVariable

    /**
     * The player or array of players who occupy
     * a specific slot in the game.
     */
    playersInSlot: IPlayersInSlot

    /**
     * The players who are within a specific view
     * angle of a specific player’s reticle, optionally
     * restricted by team.
     */
    playersInViewAngle: IPlayersInViewAngle

    /**
     * The array of players playing a specific
     * hero on a team or in the match.
     */
    playersOnHero: IPlayersOnHero

    /**
     * An array containing all players within a
     * certain distance of a position, optionally
     * restricted by team and line of sight.
     */
    playersWithinRadius: IPlayersWithinRadius

    /**
     * The current progress towards capture for
     * the active control point (expressed as a percentage).
     */
    pointCapturePercentage: IPointCapturePercentage

    /**
     * The current position of a player as a vector.
     */
    positionOf: IPositionOf

    /**
     * The left-hand operand raised to the power
     * of the right-hand operand. For example 2 ^ 3 = 8
     */
    raiseToPower: IRaiseToPower

    /**
     * A random integer between the specified min
     * and max, inclusive.
     */
    randomInteger: IRandomInteger

    /**
     * A random real number between the specified min and max.
     */
    randomReal: IRandomReal

    /**
     * A random value from the specified array.
     */
    randomValueInArray: IRandomValueInArray

    /**
     * A copy of the specified array with the values
     * in a random order
     */
    randomizedArray: IRandomizedArray

    /**
     * The surface normal at the ray cast hit position
     * (or from end pos to start pos if no hit occurs).
     */
    rayCastHitNormal: IRayCastHitNormal

    /**
     * The player hit by the ray cast (or null
     * if no player is hit).
     */
    rayCastHitPlayer: IRayCastHitPlayer

    /**
     * The position where the ray cast hits a surface,
     * object, or player (or the end POS if no hit occurs).
     */
    rayCastHitPosition: IRayCastHitPosition

    /**
     * A copy of an array with one or more values
     * removed (if found).
     */
    removeFromArray: IRemoveFromArray

    /**
     * Shorthand for the directional vector (-1,
     * 0, 0), which points to the right.
     */
    right: IRight

    /**
     * The integer to which the specified value rounds.
     */
    roundToInteger: IRoundToInteger

    /**
     * The current score of a player. Results in
     * 0 if the game mode is not free-for-all.
     */
    scoreOf: IScoreOf

    /**
     * Provides a percentage representing the cpu
     * load of the current game instance. as this
     * number approaches or exceeds 100, It becomes
     * increasingly likely that the instance will
     * be shut down because it is consuming too many resources.
     */
    serverLoad: IServerLoad

    /**
     * Provides a percentage representing the average
     * cpu load of the current game instance over
     * the last two seconds. as this number approaches
     * or exceeds 100, It becomes increasingly
     * likely that the instance will be shut down
     * because it is consuming too many resources.
     */
    serverLoadAverage: IServerLoadAverage

    /**
     * Provides a percentage representing the highest
     * cpu load of the current game instance over
     * the last two seconds. as this number approaches
     * or exceeds 100, It becomes increasingly
     * likely that the instance will be shut down
     * because it is consuming too many resources.
     */
    serverLoadPeak: IServerLoadPeak

    /**
     * Sine of the specified angle in degrees.
     * The sine is the ratio of the length of the
     * side that is opposite  that angle to the
     * length of the longest side of the triangle
     * (the hypotenuse).
     */
    sineFromDegrees: ISineFromDegrees

    /**
     * Sine of the specified angle in radians.
     * The sine is the ratio of the length of the
     * side that is opposite  that angle to the
     * length of the longest side of the triangle
     * (the hypotenuse). A radian is a unit of
     * angle, equal to an angle at the center of
     * a circle whose arc is equal in length to the radius.
     */
    sineFromRadians: ISineFromRadians

    /**
     * The slot number of the specified player.
     * In team games, each team has slots 0 through
     * 5. In free-for-all games, slots are numbers 0 through 11.
     */
    slotOf: ISlotOf

    /**
     * A copy of the specified array with the values
     * sorted according to the value rank that
     * is evaluated for each element.
     */
    sortedArray: ISortedArray

    /**
     * The current speed of a player in meters per second.
     */
    speedOf: ISpeedOf

    /**
     * The current speed of a player in a specific
     * direction in meters per second.
     */
    speedOfInDirection: ISpeedOfInDirection

    /**
     * The square root of the specified value.
     * For example the square root of 9 is 3.
     */
    squareRoot: ISquareRoot

    /**
     * Text formed from a selection of strings
     * and specified values.
     */
    string: IString

    /**
     * The difference between two numbers or vectors.
     */
    subtract: ISubtract

    /**
     * Tangent of the specified angle in degrees.
     */
    tangentFromDegrees: ITangentFromDegrees

    /**
     * Tangent of the specified angle in radians.
     */
    tangentFromRadians: ITangentFromRadians

    /**
     * A team constant. The all option represents
     * both teams in a team or all players in a
     * free-for-all game.
     */
    team: ITeam

    /**
     * The team of a player. If the game mode is
     * free-for-all, the team is considered to be all.
     */
    teamOf: ITeamOf

    /**
     * The current score for the specified team.
     * Results in a 0 in free-for-all game modes.
     */
    teamScore: ITeamScore

    /**
     * The directional input of a player, represented
     * by a vector with a horizontal input on the
     * X component (positive to the left) and vertical
     * input on the Z component (positive upward).
     */
    throttleOf: IThrottleOf

    /**
     * The total time seconds that have elapsed
     * since the game instance was created (including
     * setup time and transitions).
     */
    totalTimeElapsed: ITotalTimeElapsed

    /**
     * The Boolean value of true.
     */
    true: ITrue

    /**
     * The current ultimate ability charge percentage of a player.
     */
    ultimateChargePercent: IUltimateChargePercent

    /**
     * Shorthand for the directional vector(0,
     * 1, 0). Which points upward.
     */
    up: IUp

    /**
     * The value found at a specific element of
     * an array. Results in a 0 if the element does not exist.
     */
    valueInArray: IValueInArray

    /**
     * A vector composed of three real numbers
     * (X, Y, Z) where X is left, Y is Up, and
     * Z is forward. Vectors are used for position,
     * direction, and velocity.
     */
    vector: IVector

    /**
     * The displacement vector from one position to another.
     */
    vectorTowards: IVectorTowards

    /**
     * The current velocity of a player as a vector.
     * If the player is on a surface, the Y component
     * of this velocity will be 0m even when traveling
     * up or down a slope.
     */
    velocityOf: IVelocityOf

    /**
     * The vertical angle in degrees corresponding
     * to the specified direction vector.
     */
    verticalAngleFromDirection: IVerticalAngleFromDirection

    /**
     * The vertical angle in degrees from a player’s
     * current forward direction to the specified
     * position. The result is positive if the
     * position is below the player. Otherwise,
     * the result is zero or negative.
     */
    verticalAngleTowards: IVerticalAngleTowards

    /**
     * The vertical angle in degrees, of a player’s
     * current facing relative to the world. This
     * value increases as the player looks down.
     */
    verticalFacingAngleOf: IVerticalFacingAngleOf

    /**
     * The current vertical speed of a player in
     * meters per second. This measurement excludes
     * all horizontal motion, including motion
     * while traveling up and down slopes.
     */
    verticalSpeedOf: IVerticalSpeedOf

    /**
     * The player that received damage for the
     * event currently being processed by this
     * rule. May be the same as the attacker or
     * the event player.
     */
    victim: IVictim

    /**
     * The vector in the world coordinates corresponding
     * to the provided vector in local coordinates.
     */
    worldVectorOf: IWorldVectorOf

    /**
     * The X Component of the specified Vector,
     * usually representing a leftward amount.
     */
    xComponentOf: IXComponentOf
    
    /**
     * The Y Component of the specified Vector,
     * usually representing a upward amount.
     */
    yComponentOf: IYComponentOf

    /**
     * The Z Component of the specified Vector,
     * usually representing a forward amount.
     */
    zComponentOf: IZComponentOf
}