import {
    IArrayContains,
    IEntityExists,
    IEventWasCriticalHit,
    IFalse,
    ICompare,
    IHasSpawned,
    IHasStatus,
    IIsAlive,
    IIsAssemblingHeroes,
    IIsBetwwenRounds,
    IIsButtonHeld,
    IIsCommunicating,
    IIsCommunicatingAny,
    IIsCommunicatingAnyEmote,
    IIsCommunicatingVoiceLine,
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
    INot,
} from '../../interface/value'

export type ValueBoolType
    = IArrayContains
    | ICompare
    | IEntityExists
    | IEventWasCriticalHit
    | IFalse
    | IHasSpawned
    | IHasStatus
    | IIsAlive

    | IIsAssemblingHeroes
    | IIsBetwwenRounds
    | IIsButtonHeld
    | IIsCommunicating
    | IIsCommunicatingAny
    | IIsCommunicatingAnyEmote
    | IIsCommunicatingVoiceLine
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
    | IIsFiringSecondary
    | IIsTeamOnDefense
    | IIsTeamOnOffense
    | IIsTrueForAll
    | IIsTrueForAny
    | IIsUsingAbility1
    | IIsUsingAbility2
    | IIsUsingUltimate
    | IIsWaitingForPlayers
    | INot