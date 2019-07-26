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
    INot,
    IOr,
    ITrue,
    IAnd,
} from '../../interface/value'

export type ValueBoolType
    = IFalse
    | ITrue

    | INot
    | IOr
    | IAnd

    | IArrayContains
    | ICompare
    | IEntityExists
    | IEventWasCriticalHit
    | IHasSpawned
    | IHasStatus
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
    | IIsFiringSecondary
    | IIsTeamOnDefense
    | IIsTeamOnOffense
    | IIsTrueForAll
    | IIsTrueForAny
    | IIsUsingAbility1
    | IIsUsingAbility2
    | IIsUsingUltimate
    | IIsWaitingForPlayers