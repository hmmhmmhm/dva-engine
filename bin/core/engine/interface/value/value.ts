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
     * {343}
     */
    absoluteValue: IAbsoluteValue

    /**
     * {344}
     */
    add: IAdd

    /**
     * {345}
     */
    allDeadPlayers: IAllDeadPlayers

    /**
     * {346}
     */
    allHeroes: IAllHeroes

    /**
     * {347}
     */
    allLivingPlayers: IAllLivingPlayers

    /**
     * {348}
     */
    allPlayers: IAllPlayers

    /**
     * {349}
     */
    allPlayersNotOnObjective: IAllPlayersNotOnObjective

    /**
     * {350}
     */
    allPlayersOnObjective: IAllPlayersOnObjective

    /**
     * {351}
     */
    allowedHeroes: IAllowedHeroes

    /**
     * {352}
     */
    altitudeOf: IAltitudeOf

    /**
     * {353}
     */
    and: IAnd

    /**
     * {354}
     */
    angleBetweenVectors: IAngleBetweenVectors

    /**
     * {355}
     */
    angleDifference: IAngleDifference

    /**
     * {356}
     */
    appendToArray: IAppendToArray

    /**
     * {357}
     */
    arccosineInDegrees: IArccosineInDegrees

    /**
     * {358}
     */
    arccosineInRadians: IArccosineInRadians

    /**
     * {359}
     */
    arcsineInDegrees: IArcsineInDegrees

    /**
     * {360}
     */
    arcsineInRadians: IArcsineInRadians

    /**
     * {361}
     */
    arctangentInDegrees: IArctangentInDegrees

    /**
     * {362}
     */
    arctangentInRadians: IArctangentInRadians

    /**
     * {363}
     */
    arrayContains: IArrayContains

    /**
     * {364}
     */
    arraySlice: IArraySlice

    /**
     * {365}
     */
    attacker: IAttacker

    /**
     * {366}
     */
    backward: IBackward

    /**
     * {367}
     */
    closestPlayerTo: IClosestPlayerTo

    /**
     * {368}
     */
    compare: ICompare

    /**
     * {369}
     */
    controlModeScoringPercentage: IControlModeScoringPercentage

    /**
     * {370}
     */
    controlModeScoringTeam: IControlModeScoringTeam

    /**
     * {371}
     */
    cosineFromDegrees: ICosineFromDegrees

    /**
     * {372}
     */
    cosineFromRadians: ICosineFromRadians

    /**
     * {373}
     */
    countOf: ICountOf

    /**
     * {374}
     */
    crossProduct: ICrossProduct

    /**
     * {375}
     */
    currentArrayElement: ICurrentArrayElement

    /**
     * {376}
     */
    directionFromAngles: IDirectionFromAngles

    /**
     * {377}
     */
    directionTowards: IDirectionTowards

    /**
     * {378}
     */
    distanceBetween: IDistanceBetween
    
    /**
     * {379}
     */
    divide: IDivide

    /**
     * {380}
     */
    dotProduct: IDotProduct

    /**
     * {381}
     */
    down: IDown

    /**
     * {382}
     */
    emptyArray: IEmptyArray

    /**
     * {383}
     */
    entityExists: IEntityExists

    /**
     * {384}
     */
    eventDamage: IEventDamage

    /**
     * {385}
     */
    eventPlayer: IEventPlayer

    /**
     * {386}
     */
    eventWasCriticalHit: IEventWasCriticalHit

    /**
     * {387}
     */
    eyePosition: IEyePosition

    /**
     * {388}
     */
    facingDirectionOf: IFacingDirectionOf

    /**
     * {389}
     */
    false: IFalse

    /**
     * {390}
     */
    farthestPlayerFrom: IFarthestPlayerFrom

    /**
     * {391}
     */
    filteredArray: IFilteredArray

    /**
     * {392}
     */
    firstOf: IFirstOf

    /**
     * {393}
     */
    flagPosition: IFlagPosition

    /**
     * {394}
     */
    forward: IForward

    /**
     * {395}
     */
    globalVariable: IGlobalVariable

    /**
     * {396}
     */
    hasSpawned: IHasSpawned

    /**
     * {397}
     */
    hasStatus: IHasStatus

    /**
     * {398}
     */
    health: IHealth

    /**
     * {399}
     */
    hero: IHero

    /**
     * {400}
     */
    heroIconString: IHeroIconString

    /**
     * {401}
     */
    heroOf: IHeroOf

    /**
     * {402}
     */
    horizontalAngleFromDirection: IHorizontalAngleFromDirection
    
    /**
     * {403}
     */
    horizontalAngleTowards: IHorizontalAngleTowards

    /**
     * {404}
     */
    horizontalFacingAngleOf: IHorizontalFacingAngleOf

    /**
     * {405}
     */
    horizontalSpeedOf: IHorizontalSpeedOf

    /**
     * {406}
     */
    indexOfArrayValue: IIndexOfArrayValue

    /**
     * {407}
     */
    isAlive: IIsAlive
    
    /**
     * {408}
     */
    isAssemblingHeroes: IIsAssemblingHeroes

    /**
     * {409}
     */
    isBetweenRounds: IIsBetweenRounds

    /**
     * {410}
     */
    isButtonHeld: IIsButtonHeld

    /**
     * {411}
     */
    isCommunicating: IIsCommunicating

    /**
     * {412}
     */
    isCommunicatingAny: IIsCommunicatingAny

    /**
     * {413}
     */
    isCommunicatingAnyEmote: IIsCommunicatingAnyEmote

    /**
     * {414}
     */
    isCommunicatingAnyVoiceLine: IIsCommunicatingAnyVoiceLine

    /**
     * {415}
     */
    isControlModePointLocked: IIsControlModePointLocked
    
    /**
     * {416}
     */
    isCrouching: IIsCrouching

    /**
     * {417}
     */
    isCTFModeInSuddenDeath: IIsCTFModeInSuddenDeath

    /**
     * {418}
     */
    isDead: IIsDead

    /**
     * {419}
     */
    isFiringPrimary: IIsFiringPrimary

    /**
     * {420}
     */
    isFiringSecondary: IIsFiringSecondary

    /**
     * {421}
     */
    isFlagAtBase: IIsFlagAtBase

    /**
     * {422}
     */
    isFlagBeingCarried: IIsFlagBeingCarried

    /**
     * {423}
     */
    isGameInProgress: IIsGameInProgress

    /**
     * {424}
     */
    isHeroBeingPlayed: IIsHeroBeingPlayed

    /**
     * {425}
     */
    isInAir: IIsInAir

    /**
     * {426}
     */
    isInLineOfSight: IIsInLineOfSight

    /**
     * {427}
     */
    isInSetup: IIsInSetup

    /**
     * {428}
     */
    isInSpawnRoom: IIsInSpawnRoom

    /**
     * {429}
     */
    isInViewAngle: IIsInViewAngle

    /**
     * {430}
     */
    isMatchComplete: IIsMatchComplete

    /**
     * {431}
     */
    isMoving: IIsMoving

    /**
     * {432}
     */
    isObjectiveComplete: IIsObjectiveComplete

    /**
     * {433}
     */
    isOnGround: IIsOnGround

    /**
     * {434}
     */
    isOnObjective: IIsOnObjective

    /**
     * {435}
     */
    isOnWall: IIsOnWall

    /**
     * {436}
     */
    isPortraitOnFire: IIsPortraitOnFire

    /**
     * {437}
     */
    isStanding: IIsStanding

    /**
     * {438}
     */
    isTeamOnDefense: IIsTeamOnDefense

    /**
     * {439}
     */
    isTeamOnOffense: IIsTeamOnOffense

    /**
     * {440}
     */
    isTrueForAll: IIsTrueForAll

    /**
     * {441}
     */
    isTrueForAny: IIsTrueForAny

    /**
     * {442}
     */
    isUsingAbility1: IIsUsingAbility1

    /**
     * {443}
     */
    isUsingAbility2: IIsUsingAbility2

    /**
     * {444}
     */
    isUsingUltimate: IIsUsingUltimate

    /**
     * {445}
     */
    isWaitingForPlayers: IIsWaitingForPlayers

    /**
     * {446}
     */
    lastCreatedEntity: ILastCreatedEntity

    /**
     * {447}
     */
    lastDamageModificationId: ILastDamageModificationId

    /**
     * {448}
     */
    lastDamageOverTimeId: ILastDamageOverTimeId

    /**
     * {449}
     */
    lastHealOverTimeId: ILastHealOverTimeId

    /**
     * {450}
     */
    lastOf: ILastOf

    /**
     * {451}
     */
    lastTextId: ILastTextId

    /**
     * {452}
     */
    left: ILeft

    /**
     * {453}
     */
    localVectorOf: ILocalVectorOf

    /**
     * {454}
     */
    matchRound: IMatchRound

    /**
     * {455}
     */
    matchTime: IMatchTime

    /**
     * {456}
     */
    max: IMax

    /**
     * {457}
     */
    maxHealth: IMaxHealth

    /**
     * {458}
     */
    min: IMin

    /**
     * {459}
     */
    modulo: IModulo

    /**
     * {460}
     */
    multiply: IMultiply

    /**
     * {461}
     */
    nearestWalkablePosition: INearestWalkablePosition

    /**
     * {462}
     */
    normalize: INormalize

    /**
     * {463}
     */
    normalizedHealth: INormalizedHealth

    /**
     * {464}
     */
    not: INot

    /**
     * {465}
     */
    null: INull

    /**
     * {466}
     */
    number: INumber

    /**
     * {467}
     */
    numberOfDeadPlayers: INumberOfDeadPlayers

    /**
     * {468}
     */
    numberOfDeaths: INumberOfDeaths

    /**
     * {469}
     */
    numberOfEliminations: INumberOfEliminations

    /**
     * {470}
     */
    numberOfFinalBlows: INumberOfFinalBlows

    /**
     * {471}
     */
    numberOfHeroes: INumberOfHeroes

    /**
     * {472}
     */
    numberOfLivingPlayers: INumberOfLivingPlayers

    /**
     * {473}
     */
    numberOfPlayers: INumberOfPlayers

    /**
     * {474}
     */
    numberOfPlayersOnObjective: INumberOfPlayersOnObjective

    /**
     * {475}
     */
    objectiveIndex: IObjectiveIndex

    /**
     * {476}
     */
    objectivePosition: IObjectivePosition

    /**
     * {477}
     */
    oppositeTeamOf: IOppositeTeamOf

    /**
     * {478}
     */
    or: IOr

    /**
     * {479}
     */
    payloadPosition: IPayloadPosition

    /**
     * {480}
     */
    payloadProgressPercentage: IPayloadProgressPercentage

    /**
     * {481}
     */
    playerCarryingFlag: IPlayerCarryingFlag

    /**
     * {482}
     */
    playerClosestToReticle: IPlayerClosestToReticle

    /**
     * {483}
     */
    playerVariable: IPlayerVariable

    /**
     * {484}
     */
    playersInSlot: IPlayersInSlot

    /**
     * {485}
     */
    playersInViewAngle: IPlayersInViewAngle

    /**
     * {486}
     */
    playersOnHero: IPlayersOnHero

    /**
     * {487}
     */
    playersWithinRadius: IPlayersWithinRadius

    /**
     * {488}
     */
    pointCapturePercentage: IPointCapturePercentage

    /**
     * {489}
     */
    positionOf: IPositionOf

    /**
     * {490}
     */
    raiseToPower: IRaiseToPower

    /**
     * {491}
     */
    randomInteger: IRandomInteger

    /**
     * {492}
     */
    randomReal: IRandomReal

    /**
     * {493}
     */
    randomValueInArray: IRandomValueInArray

    /**
     * {494}
     */
    randomizedArray: IRandomizedArray

    /**
     * {495}
     */
    rayCastHitNormal: IRayCastHitNormal

    /**
     * {496}
     */
    rayCastHitPlayer: IRayCastHitPlayer

    /**
     * {497}
     */
    rayCastHitPosition: IRayCastHitPosition

    /**
     * {498}
     */
    removeFromArray: IRemoveFromArray

    /**
     * {499}
     */
    right: IRight

    /**
     * {500}
     */
    roundToInteger: IRoundToInteger

    /**
     * {501}
     */
    scoreOf: IScoreOf

    /**
     * {502}
     */
    serverLoad: IServerLoad

    /**
     * {503}
     */
    serverLoadAverage: IServerLoadAverage

    /**
     * {504}
     */
    serverLoadPeak: IServerLoadPeak

    /**
     * {505}
     */
    sineFromDegrees: ISineFromDegrees

    /**
     * {506}
     */
    sineFromRadians: ISineFromRadians

    /**
     * {507}
     */
    slotOf: ISlotOf

    /**
     * {508}
     */
    sortedArray: ISortedArray

    /**
     * {509}
     */
    speedOf: ISpeedOf

    /**
     * {510}
     */
    speedOfInDirection: ISpeedOfInDirection

    /**
     * {511}
     */
    squareRoot: ISquareRoot

    /**
     * {512}
     */
    string: IString

    /**
     * {513}
     */
    subtract: ISubtract

    /**
     * {514}
     */
    tangentFromDegrees: ITangentFromDegrees

    /**
     * {515}
     */
    tangentFromRadians: ITangentFromRadians

    /**
     * {516}
     */
    team: ITeam

    /**
     * {517}
     */
    teamOf: ITeamOf

    /**
     * {518}
     */
    teamScore: ITeamScore

    /**
     * {519}
     */
    throttleOf: IThrottleOf

    /**
     * {520}
     */
    totalTimeElapsed: ITotalTimeElapsed

    /**
     * {521}
     */
    true: ITrue

    /**
     * {522}
     */
    ultimateChargePercent: IUltimateChargePercent

    /**
     * {523}
     */
    up: IUp

    /**
     * {524}
     */
    valueInArray: IValueInArray

    /**
     * {525}
     */
    vector: IVector

    /**
     * {526}
     */
    vectorTowards: IVectorTowards

    /**
     * {527}
     */
    velocityOf: IVelocityOf

    /**
     * {528}
     */
    verticalAngleFromDirection: IVerticalAngleFromDirection

    /**
     * {529}
     */
    verticalAngleTowards: IVerticalAngleTowards

    /**
     * {530}
     */
    verticalFacingAngleOf: IVerticalFacingAngleOf

    /**
     * {531}
     */
    verticalSpeedOf: IVerticalSpeedOf

    /**
     * {532}
     */
    victim: IVictim

    /**
     * {533}
     */
    worldVectorOf: IWorldVectorOf

    /**
     * {534}
     */
    xComponentOf: IXComponentOf
    
    /**
     * {535}
     */
    yComponentOf: IYComponentOf

    /**
     * {536}
     */
    zComponentOf: IZComponentOf
}