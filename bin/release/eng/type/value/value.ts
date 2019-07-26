import {
    IAbsoluteValue,
    IAdd,
    IAllDeadPlayers,
    IAllHeroes,
    IAllLivingPlayers,
    IAllPlayers,
    IAllPlayersNotOnObjective,
    IAllPlayersOnObjective,
    IAllowedHeroes,
    IAltitudeOf,
    IAnd,
    IAngleBetweenVectors,
    IAngleDifference,
    IAppendToArray,
    IArccosineInDegrees,
    IArccosineInRadians,
    IArcsineInDegrees,
    IArcsineInRadians,
    IArctangentInDegrees,
    IArctangentInRadians,
    IArrayContains,
    IArraySlice,
    IAttacker,
    IBackward,
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
    IDivide,
    IDotProduct,
    IDown,
    IEmptyArray,
    IEntityExists,
    IEventDamage,
    IEventPlayer,
    IEventWasCriticalHit,
    IEyePosition,
    IFacingDirectionOf,
    IFalse,
    IFarthestPlayerFrom,
    IFilteredArray,
    IFirstOf,
    IFlagPosition,
    IForward,
    IGlobalVariable,
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
    IIsFiringSecondary,
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
    ILocalVectorOf,
    IMatchRound,
    IMatchTime,
    IMax,
    IMaxHealth,
    IMin,
    IModulo,
    IMultiply,
    INearestWalkablePosition,
    INormalize,
    INormalizedHealth,
    INot,
    INull,
    INumber,
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
    IPayloadPosition,
    IPayloadProgressPercentage,
    IOr,
    IPlayerCarryingFlag,
    IPlayerClosestToReticle,
    IPlayerVariable,
    IPlayersInSlot,
    IPlayersInViewAngle,
    IPlayersOnHero,
    IPlayersWithinRadius,
    IPointCapturePercentage,
    IPositionOf,
    IRandomInteger,
    IRaiseToPower,
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
    ITangentFromDegrees,
    ITangentFromRadians,
    ITeam,
    ITeamOf,
    ITeamScore,
    IThrottleOf,
    ITotalTimeElapsed,
    ITrue,
    IUltimateChargePercent,
    IUp,
    IValueInArray,
    IVector,
    IVectorTowards,
    IVelocityOf,
    IVerticalAngleFromDirection,
    IVerticalAngleTowards,
    IVerticalFacingAngleOf,
    IVerticalSpeedOf,
    IVictim,
    IWorldVectorOf,
    IXComponentOf,
    IYComponentOf,
    IZComponentOf,
} from '../../interface/value/child'

/**
 * Lists the available value interface .
 */
export type ValueType
    = IAbsoluteValue
    | IAdd
    | IAllDeadPlayers
    | IAllHeroes
    | IAllLivingPlayers
    | IAllPlayers
    | IAllPlayersNotOnObjective
    | IAllPlayersOnObjective
    | IAllowedHeroes
    | IAltitudeOf
    | IAnd
    | IAngleBetweenVectors
    | IAngleDifference
    | IAppendToArray
    | IArccosineInDegrees
    | IArccosineInRadians
    | IArcsineInDegrees
    | IArcsineInRadians
    | IArctangentInDegrees
    | IArctangentInRadians
    | IArrayContains
    | IArraySlice
    | IAttacker
    | IBackward
    | IClosestPlayerTo
    | ICompare
    | IControlModeScoringPercentage
    | IControlModeScoringTeam
    | ICosineFromDegrees
    | ICosineFromRadians
    | ICountOf
    | ICrossProduct
    | ICurrentArrayElement
    | IDirectionFromAngles
    | IDirectionTowards
    | IDistanceBetween
    | IDivide
    | IDotProduct
    | IDown
    | IEmptyArray
    | IEntityExists
    | IEventDamage
    | IEventPlayer
    | IEventWasCriticalHit
    | IEyePosition
    | IFacingDirectionOf
    | IFalse
    | IFarthestPlayerFrom
    | IFilteredArray
    | IFirstOf
    | IFlagPosition
    | IForward
    | IGlobalVariable
    | IHasSpawned
    | IHasStatus
    | IHealth
    | IHero
    | IHeroIconString
    | IHeroOf
    | IHorizontalAngleFromDirection
    | IHorizontalAngleTowards
    | IHorizontalFacingAngleOf
    | IHorizontalSpeedOf
    | IIndexOfArrayValue
    | IIsAlive
    | IIsAssemblingHeroes
    | IIsBetweenRounds
    | IIsButtonHeld
    | IIsCommunicating
    | IIsCommunicatingAny
    | IIsCommunicatingAnyEmote
    | IIsCommunicatingAnyVoiceLine
    | IIsControlModePointLocked
    | IIsCrouching
    | IIsCTFModeInSuddenDeath
    | IIsDead
    | IIsFiringPrimary
    | IIsFiringSecondary
    | IIsFlagAtBase
    | IIsFlagBeingCarried
    | IIsGameInProgress
    | IIsHeroBeingPlayed
    | IIsInAir
    | IIsInLineOfSight
    | IIsInSetup
    | IIsInSpawnRoom
    | IIsInViewAngle
    | IIsMatchComplete
    | IIsMoving
    | IIsObjectiveComplete
    | IIsOnGround
    | IIsOnObjective
    | IIsOnWall
    | IIsPortraitOnFire
    | IIsStanding
    | IIsTeamOnDefense
    | IIsTeamOnOffense
    | IIsTrueForAll
    | IIsTrueForAny
    | IIsUsingAbility1
    | IIsUsingAbility2
    | IIsUsingUltimate
    | IIsWaitingForPlayers
    | ILastCreatedEntity
    | ILastDamageModificationId
    | ILastDamageOverTimeId
    | ILastHealOverTimeId
    | ILastOf
    | ILastTextId
    | ILeft
    | ILocalVectorOf
    | IMatchRound
    | IMatchTime
    | IMax
    | IMaxHealth
    | IMin
    | IModulo
    | IMultiply
    | INearestWalkablePosition
    | INormalize
    | INormalizedHealth
    | INot
    | INull
    | INumber
    | INumberOfDeadPlayers
    | INumberOfDeaths
    | INumberOfEliminations
    | INumberOfFinalBlows
    | INumberOfHeroes
    | INumberOfLivingPlayers
    | INumberOfPlayers
    | INumberOfPlayersOnObjective
    | IObjectiveIndex
    | IObjectivePosition
    | IOppositeTeamOf
    | IOr
    | IPayloadPosition
    | IPayloadProgressPercentage
    | IPlayerCarryingFlag
    | IPlayerClosestToReticle
    | IPlayerVariable
    | IPlayersInSlot
    | IPlayersInViewAngle
    | IPlayersOnHero
    | IPlayersWithinRadius
    | IPointCapturePercentage
    | IPositionOf
    | IRaiseToPower
    | IRandomInteger
    | IRandomReal
    | IRandomValueInArray
    | IRandomizedArray
    | IRayCastHitNormal
    | IRayCastHitPlayer
    | IRayCastHitPosition
    | IRemoveFromArray
    | IRight
    | IRoundToInteger
    | IScoreOf
    | ISineFromDegrees
    | ISineFromRadians
    | ISlotOf
    | ISortedArray
    | ISpeedOf
    | ISpeedOfInDirection
    | ISquareRoot
    | IString
    | ISubtract
    | ITangentFromDegrees
    | ITangentFromRadians
    | ITeam
    | ITeamOf
    | ITeamScore
    | IThrottleOf
    | ITotalTimeElapsed
    | ITrue
    | IUltimateChargePercent
    | IUp
    | IValueInArray
    | IVector
    | IVectorTowards
    | IVelocityOf
    | IVerticalAngleFromDirection
    | IVerticalAngleTowards
    | IVerticalFacingAngleOf
    | IVerticalSpeedOf
    | IVictim
    | IWorldVectorOf
    | IXComponentOf
    | IYComponentOf
    | IZComponentOf