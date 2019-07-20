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
    IAcrossineInDegrees,
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
    INearestWalkablePostion,
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
     * {344}
     */
    absoluteValue: IAbsoluteValue

    /**
     * {345}
     */
    add: IAdd

    /**
     * {346}
     */
    allDeadPlayers: IAllDeadPlayers

    /**
     * {347}
     */
    allHeroes: IAllHeroes

    /**
     * {348}
     */
    allLivingPlayers: IAllLivingPlayers

    /**
     * {349}
     */
    allPlayers: IAllPlayers

    /**
     * {350}
     */
    allPlayersNotOnObjective: IAllPlayersNotOnObjective

    /**
     * {351}
     */
    allPlayersOnObjective: IAllPlayersOnObjective

    /**
     * {352}
     */
    allowedHeroes: IAllowedHeroes

    /**
     * {353}
     */
    altitudeOf: IAltitudeOf

    /**
     * {354}
     */
    and: IAnd

    /**
     * {355}
     */
    angleBetweenVectors: IAngleBetweenVectors

    /**
     * {356}
     */
    angleDifference: IAngleDifference

    /**
     * {357}
     */
    appendToArray: IAppendToArray

    /**
     * {358}
     */
    acrossineInDegrees: IAcrossineInDegrees

    /**
     * {359}
     */
    arccosineInRadians: IArccosineInRadians

    /**
     * {360}
     */
    arcsineInDegrees: IArcsineInDegrees

    /**
     * {361}
     */
    arcsineInRadians: IArcsineInRadians

    /**
     * {362}
     */
    arctangentInDegrees: IArctangentInDegrees

    /**
     * {363}
     */
    arctangentInRadians: IArctangentInRadians

    /**
     * {364}
     */
    arrayContains: IArrayContains

    /**
     * {365}
     */
    arraySlice: IArraySlice

    /**
     * {366}
     */
    attacker: IAttacker

    /**
     * {367}
     */
    backward: IBackward

    /**
     * {368}
     */
    closestPlayerTo: IClosestPlayerTo

    /**
     * {369}
     */
    compare: ICompare

    /**
     * {370}
     */
    controlModeScoringPercentage: IControlModeScoringPercentage

    /**
     * {371}
     */
    controlModeScoringTeam: IControlModeScoringTeam

    /**
     * {372}
     */
    cosineFromDegrees: ICosineFromDegrees

    /**
     * {373}
     */
    cosineFromRadians: ICosineFromRadians

    /** 
     * 지정된 배열 내 요소의 수입니다. 
     */
    countOf: ICountOf

    /**
     * {375}
     */
    crossProduct: ICrossProduct

    /**
     * {376}
     */
    currentArrayElement: ICurrentArrayElement

    /**
     * {377}
     */
    directionFromAngles: IDirectionFromAngles

    /**
     * {378}
     */
    directionTowards: IDirectionTowards

    /**
     * {379}
     */
    distanceBetween: IDistanceBetween
    
    /**
     * {380}
     */
    divide: IDivide

    /**
     * {381}
     */
    dotProduct: IDotProduct

    /**
     * {382}
     */
    down: IDown

    /**
     * {383}
     */
    emptyArray: IEmptyArray

    /**
     * {384}
     */
    entityExists: IEntityExists

    /**
     * {385}
     */
    eventDamage: IEventDamage

    /**
     * {386}
     */
    eventPlayer: IEventPlayer

    /**
     * {387}
     */
    eventWasCriticalHit: IEventWasCriticalHit

    /**
     * {388}
     */
    eyePosition: IEyePosition

    /**
     * {389}
     */
    facingDirectionOf: IFacingDirectionOf

    /**
     * {390}
     */
    false: IFalse

    /**
     * {391}
     */
    farthestPlayerFrom: IFarthestPlayerFrom

    /**
     * {392}
     */
    filteredArray: IFilteredArray

    /**
     * {393}
     */
    firstOf: IFirstOf

    /**
     * {394}
     */
    flagPosition: IFlagPosition

    /**
     * {395}
     */
    forward: IForward

    /**
     * {396}
     */
    globalVariable: IGlobalVariable

    /**
     * {397}
     */
    hasSpawned: IHasSpawned

    /**
     * {398}
     */
    hasStatus: IHasStatus

    /**
     * {399}
     */
    health: IHealth

    /**
     * {400}
     */
    hero: IHero

    /**
     * {401}
     */
    heroIconString: IHeroIconString

    /**
     * {402}
     */
    heroOf: IHeroOf

    /**
     * {403}
     */
    horizontalAngleFromDirection: IHorizontalAngleFromDirection
    
    /**
     * {404}
     */
    horizontalAngleTowards: IHorizontalAngleTowards

    /**
     * {405}
     */
    horizontalFacingAngleOf: IHorizontalFacingAngleOf

    /**
     * {406}
     */
    horizontalSpeedOf: IHorizontalSpeedOf

    /**
     * {407}
     */
    indexOfArrayValue: IIndexOfArrayValue

    /**
     * {408}
     */
    isAlive: IIsAlive
    
    /**
     * {409}
     */
    isAssemblingHeroes: IIsAssemblingHeroes

    /**
     * {410}
     */
    isBetwwenRounds: IIsBetwwenRounds

    /**
     * {411}
     */
    isButtonHeld: IIsButtonHeld

    /**
     * {412}
     */
    isCommunicating: IIsCommunicating

    /**
     * {413}
     */
    isCommunicatingAny: IIsCommunicatingAny

    /**
     * {414}
     */
    isCommunicatingAnyEmote: IIsCommunicatingAnyEmote

    /**
     * {415}
     */
    isCommunicatingVoiceLine: IIsCommunicatingVoiceLine

    /**
     * {416}
     */
    isControlModePointLocked: IIsControlModePointLocked
    
    /**
     * {417}
     */
    isCrouching: IIsCrouching

    /**
     * {418}
     */
    isCTFModeInSuddenDeath: IIsCTFModeInSuddenDeath

    /**
     * {419}
     */
    isDead: IIsDead

    /**
     * {420}
     */
    isFiringPrimary: IIsFiringPrimary

    /**
     * {421}
     */
    isFiringSecondary: IIsFiringSecondary

    /**
     * {422}
     */
    isFlagAtBase: IIsFlagAtBase

    /**
     * {423}
     */
    isFlagBeingCarried: IIsFlagBeingCarried

    /**
     * {424}
     */
    isGameInProgress: IIsGameInProgress

    /**
     * {425}
     */
    isHeroBeingPlayed: IIsHeroBeingPlayed

    /**
     * {426}
     */
    isInAir: IIsInAir

    /**
     * {427}
     */
    isInLineOfSight: IIsInLineOfSight

    /**
     * {428}
     */
    isInSetup: IIsInSetup

    /**
     * {429}
     */
    isInSpawnRoom: IIsInSpawnRoom

    /**
     * {430}
     */
    isInViewAngle: IIsInViewAngle

    /**
     * {431}
     */
    isMatchComplete: IIsMatchComplete

    /**
     * {432}
     */
    isMoving: IIsMoving

    /**
     * {433}
     */
    isObjectiveComplete: IIsObjectiveComplete

    /**
     * {434}
     */
    isOnGround: IIsOnGround

    /**
     * {435}
     */
    isOnObjective: IIsOnObjective

    /**
     * {436}
     */
    isOnWall: IIsOnWall

    /**
     * {437}
     */
    isPortraitOnFire: IIsPortraitOnFire

    /**
     * {438}
     */
    isStanding: IIsStanding

    /**
     * {439}
     */
    isTeamOnDefense: IIsTeamOnDefense

    /**
     * {440}
     */
    isTeamOnOffense: IIsTeamOnOffense

    /**
     * {441}
     */
    isTrueForAll: IIsTrueForAll

    /**
     * {442}
     */
    isTrueForAny: IIsTrueForAny

    /**
     * {443}
     */
    isUsingAbility1: IIsUsingAbility1

    /**
     * {444}
     */
    isUsingAbility2: IIsUsingAbility2

    /**
     * {445}
     */
    isUsingUltimate: IIsUsingUltimate

    /**
     * {446}
     */
    isWaitingForPlayers: IIsWaitingForPlayers

    /**
     * {447}
     */
    lastCreatedEntity: ILastCreatedEntity

    /**
     * {448}
     */
    lastDamageModificationId: ILastDamageModificationId

    /**
     * {449}
     */
    lastDamageOverTimeId: ILastDamageOverTimeId

    /**
     * {450}
     */
    lastHealOverTimeId: ILastHealOverTimeId

    /**
     * {451}
     */
    lastOf: ILastOf

    /**
     * {452}
     */
    lastTextId: ILastTextId

    /**
     * {453}
     */
    left: ILeft

    /**
     * {454}
     */
    localVectorOf: ILocalVectorOf

    /**
     * {455}
     */
    matchRound: IMatchRound

    /**
     * {456}
     */
    matchTime: IMatchTime

    /**
     * {457}
     */
    max: IMax

    /**
     * {458}
     */
    maxHealth: IMaxHealth

    /**
     * {459}
     */
    min: IMin

    /**
     * {460}
     */
    modulo: IModulo

    /**
     * {461}
     */
    multiply: IMultiply

    /**
     * {462}
     */
    nearestWalkablePostion: INearestWalkablePostion

    /**
     * {463}
     */
    normalize: INormalize

    /**
     * {464}
     */
    normalizedHealth: INormalizedHealth

    /**
     * {465}
     */
    not: INot

    /**
     * {466}
     */
    null: INull

    /**
     * {467}
     */
    number: INumber

    /**
     * {468}
     */
    numberOfDeadPlayers: INumberOfDeadPlayers

    /**
     * {469}
     */
    numberOfDeaths: INumberOfDeaths

    /**
     * {470}
     */
    numberOfEliminations: INumberOfEliminations

    /**
     * {471}
     */
    numberOfFinalBlows: INumberOfFinalBlows

    /**
     * {472}
     */
    numberOfHeroes: INumberOfHeroes

    /**
     * {473}
     */
    numberOfLivingPlayers: INumberOfLivingPlayers

    /**
     * {474}
     */
    numberOfPlayers: INumberOfPlayers

    /**
     * {475}
     */
    numberOfPlayersOnObjective: INumberOfPlayersOnObjective

    /**
     * {476}
     */
    objectiveIndex: IObjectiveIndex

    /**
     * {477}
     */
    objectivePosition: IObjectivePosition

    /**
     * {478}
     */
    oppositeTeamOf: IOppositeTeamOf

    /**
     * {479}
     */
    or: IOr

    /**
     * {480}
     */
    payloadPosition: IPayloadPosition

    /**
     * {481}
     */
    payloadProgressPercentage: IPayloadProgressPercentage

    /**
     * {482}
     */
    playerCarryingFlag: IPlayerCarryingFlag

    /**
     * {483}
     */
    playerClosestToReticle: IPlayerClosestToReticle

    /**
     * {484}
     */
    playerVariable: IPlayerVariable

    /**
     * {485}
     */
    playersInSlot: IPlayersInSlot

    /**
     * {486}
     */
    playersInViewAngle: IPlayersInViewAngle

    /**
     * {487}
     */
    playersOnHero: IPlayersOnHero

    /**
     * {488}
     */
    playersWithinRadius: IPlayersWithinRadius

    /**
     * {489}
     */
    pointCapturePercentage: IPointCapturePercentage

    /**
     * {490}
     */
    positionOf: IPositionOf

    /**
     * {491}
     */
    raiseToPower: IRaiseToPower

    /**
     * {492}
     */
    randomInteger: IRandomInteger

    /**
     * {493}
     */
    randomReal: IRandomReal

    /**
     * {494}
     */
    randomValueInArray: IRandomValueInArray

    /**
     * {495}
     */
    randomizedArray: IRandomizedArray

    /**
     * {496}
     */
    rayCastHitNormal: IRayCastHitNormal

    /**
     * {497}
     */
    rayCastHitPlayer: IRayCastHitPlayer

    /**
     * {498}
     */
    rayCastHitPosition: IRayCastHitPosition

    /**
     * {499}
     */
    removeFromArray: IRemoveFromArray

    /**
     * {500}
     */
    right: IRight

    /**
     * {501}
     */
    roundToInteger: IRoundToInteger

    /**
     * {502}
     */
    scoreOf: IScoreOf

    /**
     * {503}
     */
    serverLoad: IServerLoad

    /**
     * {504}
     */
    serverLoadAverage: IServerLoadAverage

    /**
     * {505}
     */
    serverLoadPeak: IServerLoadPeak

    /**
     * {506}
     */
    sineFromDegrees: ISineFromDegrees

    /**
     * {507}
     */
    sineFromRadians: ISineFromRadians

    /**
     * {508}
     */
    slotOf: ISlotOf

    /**
     * {509}
     */
    sortedArray: ISortedArray

    /**
     * {510}
     */
    speedOf: ISpeedOf

    /**
     * {511}
     */
    speedOfInDirection: ISpeedOfInDirection

    /**
     * {512}
     */
    squareRoot: ISquareRoot

    /**
     * {513}
     */
    string: IString

    /**
     * {514}
     */
    subtract: ISubtract

    /**
     * {515}
     */
    tangentFromDegrees: ITangentFromDegrees

    /**
     * {516}
     */
    tangentFromRadians: ITangentFromRadians

    /**
     * {517}
     */
    team: ITeam

    /**
     * {518}
     */
    teamOf: ITeamOf

    /**
     * {519}
     */
    teamScore: ITeamScore

    /**
     * {520}
     */
    throttleOf: IThrottleOf

    /**
     * {521}
     */
    totalTimeElapsed: ITotalTimeElapsed

    /**
     * {522}
     */
    true: ITrue

    /**
     * {523}
     */
    ultimateChargePercent: IUltimateChargePercent

    /**
     * {524}
     */
    up: IUp

    /**
     * {525}
     */
    valueInArray: IValueInArray

    /**
     * {526}
     */
    vector: IVector

    /**
     * {527}
     */
    vectorTowards: IVectorTowards

    /**
     * {528}
     */
    velocityOf: IVelocityOf

    /**
     * {529}
     */
    verticalAngleFromDirection: IVerticalAngleFromDirection

    /**
     * {530}
     */
    verticalAngleTowards: IVerticalAngleTowards

    /**
     * {531}
     */
    verticalFacingAngleOf: IVerticalFacingAngleOf

    /**
     * {532}
     */
    verticalSpeedOf: IVerticalSpeedOf

    /**
     * {533}
     */
    victim: IVictim

    /**
     * {534}
     */
    worldVectorOf: IWorldVectorOf

    /**
     * {535}
     */
    xComponentOf: IXComponentOf
    
    /**
     * {536}
     */
    yComponentOf: IYComponentOf

    /**
     * {537}
     */
    zComponentOf: IZComponentOf
}