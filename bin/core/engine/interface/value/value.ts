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
     * {342}
     */
    absoluteValue: IAbsoluteValue

    /**
     * {343}
     */
    add: IAdd

    /**
     * {344}
     */
    allDeadPlayers: IAllDeadPlayers

    /**
     * {345}
     */
    allHeroes: IAllHeroes

    /**
     * {346}
     */
    allLivingPlayers: IAllLivingPlayers

    /**
     * {347}
     */
    allPlayers: IAllPlayers

    /**
     * {348}
     */
    allPlayersNotOnObjective: IAllPlayersNotOnObjective

    /**
     * {349}
     */
    allPlayersOnObjective: IAllPlayersOnObjective

    /**
     * {350}
     */
    allowedHeroes: IAllowedHeroes

    /**
     * {351}
     */
    altitudeOf: IAltitudeOf

    /**
     * {352}
     */
    and: IAnd

    /**
     * {353}
     */
    angleBetweenVectors: IAngleBetweenVectors

    /**
     * {354}
     */
    angleDifference: IAngleDifference

    /**
     * {355}
     */
    appendToArray: IAppendToArray

    /**
     * {356}
     */
    arccosineInDegrees: IArccosineInDegrees

    /**
     * {357}
     */
    arccosineInRadians: IArccosineInRadians

    /**
     * {358}
     */
    arcsineInDegrees: IArcsineInDegrees

    /**
     * {359}
     */
    arcsineInRadians: IArcsineInRadians

    /**
     * {360}
     */
    arctangentInDegrees: IArctangentInDegrees

    /**
     * {361}
     */
    arctangentInRadians: IArctangentInRadians

    /**
     * {362}
     */
    arrayContains: IArrayContains

    /**
     * {363}
     */
    arraySlice: IArraySlice

    /**
     * {364}
     */
    attacker: IAttacker

    /**
     * {365}
     */
    backward: IBackward

    /**
     * {366}
     */
    closestPlayerTo: IClosestPlayerTo

    /**
     * {367}
     */
    compare: ICompare

    /**
     * {368}
     */
    controlModeScoringPercentage: IControlModeScoringPercentage

    /**
     * {369}
     */
    controlModeScoringTeam: IControlModeScoringTeam

    /**
     * {370}
     */
    cosineFromDegrees: ICosineFromDegrees

    /**
     * {371}
     */
    cosineFromRadians: ICosineFromRadians

    /**
     * {372}
     */
    countOf: ICountOf

    /**
     * {373}
     */
    crossProduct: ICrossProduct

    /**
     * {374}
     */
    currentArrayElement: ICurrentArrayElement

    /**
     * {375}
     */
    directionFromAngles: IDirectionFromAngles

    /**
     * {376}
     */
    directionTowards: IDirectionTowards

    /**
     * {377}
     */
    distanceBetween: IDistanceBetween
    
    /**
     * {378}
     */
    divide: IDivide

    /**
     * {379}
     */
    dotProduct: IDotProduct

    /**
     * {380}
     */
    down: IDown

    /**
     * {381}
     */
    emptyArray: IEmptyArray

    /**
     * {382}
     */
    entityExists: IEntityExists

    /**
     * {383}
     */
    eventDamage: IEventDamage

    /**
     * {384}
     */
    eventPlayer: IEventPlayer

    /**
     * {385}
     */
    eventWasCriticalHit: IEventWasCriticalHit

    /**
     * {386}
     */
    eyePosition: IEyePosition

    /**
     * {387}
     */
    facingDirectionOf: IFacingDirectionOf

    /**
     * {388}
     */
    false: IFalse

    /**
     * {389}
     */
    farthestPlayerFrom: IFarthestPlayerFrom

    /**
     * {390}
     */
    filteredArray: IFilteredArray

    /**
     * {391}
     */
    firstOf: IFirstOf

    /**
     * {392}
     */
    flagPosition: IFlagPosition

    /**
     * {393}
     */
    forward: IForward

    /**
     * {394}
     */
    globalVariable: IGlobalVariable

    /**
     * {395}
     */
    hasSpawned: IHasSpawned

    /**
     * {396}
     */
    hasStatus: IHasStatus

    /**
     * {397}
     */
    health: IHealth

    /**
     * {398}
     */
    hero: IHero

    /**
     * {399}
     */
    heroIconString: IHeroIconString

    /**
     * {400}
     */
    heroOf: IHeroOf

    /**
     * {401}
     */
    horizontalAngleFromDirection: IHorizontalAngleFromDirection
    
    /**
     * {402}
     */
    horizontalAngleTowards: IHorizontalAngleTowards

    /**
     * {403}
     */
    horizontalFacingAngleOf: IHorizontalFacingAngleOf

    /**
     * {404}
     */
    horizontalSpeedOf: IHorizontalSpeedOf

    /**
     * {405}
     */
    indexOfArrayValue: IIndexOfArrayValue

    /**
     * {406}
     */
    isAlive: IIsAlive
    
    /**
     * {407}
     */
    isAssemblingHeroes: IIsAssemblingHeroes

    /**
     * {408}
     */
    isBetweenRounds: IIsBetweenRounds

    /**
     * {409}
     */
    isButtonHeld: IIsButtonHeld

    /**
     * {410}
     */
    isCommunicating: IIsCommunicating

    /**
     * {411}
     */
    isCommunicatingAny: IIsCommunicatingAny

    /**
     * {412}
     */
    isCommunicatingAnyEmote: IIsCommunicatingAnyEmote

    /**
     * {413}
     */
    isCommunicatingAnyVoiceLine: IIsCommunicatingAnyVoiceLine

    /**
     * {414}
     */
    isControlModePointLocked: IIsControlModePointLocked
    
    /**
     * {415}
     */
    isCrouching: IIsCrouching

    /**
     * {416}
     */
    isCTFModeInSuddenDeath: IIsCTFModeInSuddenDeath

    /**
     * {417}
     */
    isDead: IIsDead

    /**
     * {418}
     */
    isFiringPrimary: IIsFiringPrimary

    /**
     * {419}
     */
    isFiringSecondary: IIsFiringSecondary

    /**
     * {420}
     */
    isFlagAtBase: IIsFlagAtBase

    /**
     * {421}
     */
    isFlagBeingCarried: IIsFlagBeingCarried

    /**
     * {422}
     */
    isGameInProgress: IIsGameInProgress

    /**
     * {423}
     */
    isHeroBeingPlayed: IIsHeroBeingPlayed

    /**
     * {424}
     */
    isInAir: IIsInAir

    /**
     * {425}
     */
    isInLineOfSight: IIsInLineOfSight

    /**
     * {426}
     */
    isInSetup: IIsInSetup

    /**
     * {427}
     */
    isInSpawnRoom: IIsInSpawnRoom

    /**
     * {428}
     */
    isInViewAngle: IIsInViewAngle

    /**
     * {429}
     */
    isMatchComplete: IIsMatchComplete

    /**
     * {430}
     */
    isMoving: IIsMoving

    /**
     * {431}
     */
    isObjectiveComplete: IIsObjectiveComplete

    /**
     * {432}
     */
    isOnGround: IIsOnGround

    /**
     * {433}
     */
    isOnObjective: IIsOnObjective

    /**
     * {434}
     */
    isOnWall: IIsOnWall

    /**
     * {435}
     */
    isPortraitOnFire: IIsPortraitOnFire

    /**
     * {436}
     */
    isStanding: IIsStanding

    /**
     * {437}
     */
    isTeamOnDefense: IIsTeamOnDefense

    /**
     * {438}
     */
    isTeamOnOffense: IIsTeamOnOffense

    /**
     * {439}
     */
    isTrueForAll: IIsTrueForAll

    /**
     * {440}
     */
    isTrueForAny: IIsTrueForAny

    /**
     * {441}
     */
    isUsingAbility1: IIsUsingAbility1

    /**
     * {442}
     */
    isUsingAbility2: IIsUsingAbility2

    /**
     * {443}
     */
    isUsingUltimate: IIsUsingUltimate

    /**
     * {444}
     */
    isWaitingForPlayers: IIsWaitingForPlayers

    /**
     * {445}
     */
    lastCreatedEntity: ILastCreatedEntity

    /**
     * {446}
     */
    lastDamageModificationId: ILastDamageModificationId

    /**
     * {447}
     */
    lastDamageOverTimeId: ILastDamageOverTimeId

    /**
     * {448}
     */
    lastHealOverTimeId: ILastHealOverTimeId

    /**
     * {449}
     */
    lastOf: ILastOf

    /**
     * {450}
     */
    lastTextId: ILastTextId

    /**
     * {451}
     */
    left: ILeft

    /**
     * {452}
     */
    localVectorOf: ILocalVectorOf

    /**
     * {453}
     */
    matchRound: IMatchRound

    /**
     * {454}
     */
    matchTime: IMatchTime

    /**
     * {455}
     */
    max: IMax

    /**
     * {456}
     */
    maxHealth: IMaxHealth

    /**
     * {457}
     */
    min: IMin

    /**
     * {458}
     */
    modulo: IModulo

    /**
     * {459}
     */
    multiply: IMultiply

    /**
     * {460}
     */
    nearestWalkablePosition: INearestWalkablePosition

    /**
     * {461}
     */
    normalize: INormalize

    /**
     * {462}
     */
    normalizedHealth: INormalizedHealth

    /**
     * {463}
     */
    not: INot

    /**
     * {464}
     */
    null: INull

    /**
     * {465}
     */
    number: INumber

    /**
     * {466}
     */
    numberOfDeadPlayers: INumberOfDeadPlayers

    /**
     * {467}
     */
    numberOfDeaths: INumberOfDeaths

    /**
     * {468}
     */
    numberOfEliminations: INumberOfEliminations

    /**
     * {469}
     */
    numberOfFinalBlows: INumberOfFinalBlows

    /**
     * {470}
     */
    numberOfHeroes: INumberOfHeroes

    /**
     * {471}
     */
    numberOfLivingPlayers: INumberOfLivingPlayers

    /**
     * {472}
     */
    numberOfPlayers: INumberOfPlayers

    /**
     * {473}
     */
    numberOfPlayersOnObjective: INumberOfPlayersOnObjective

    /**
     * {474}
     */
    objectiveIndex: IObjectiveIndex

    /**
     * {475}
     */
    objectivePosition: IObjectivePosition

    /**
     * {476}
     */
    oppositeTeamOf: IOppositeTeamOf

    /**
     * {477}
     */
    or: IOr

    /**
     * {478}
     */
    payloadPosition: IPayloadPosition

    /**
     * {479}
     */
    payloadProgressPercentage: IPayloadProgressPercentage

    /**
     * {480}
     */
    playerCarryingFlag: IPlayerCarryingFlag

    /**
     * {481}
     */
    playerClosestToReticle: IPlayerClosestToReticle

    /**
     * {482}
     */
    playerVariable: IPlayerVariable

    /**
     * {483}
     */
    playersInSlot: IPlayersInSlot

    /**
     * {484}
     */
    playersInViewAngle: IPlayersInViewAngle

    /**
     * {485}
     */
    playersOnHero: IPlayersOnHero

    /**
     * {486}
     */
    playersWithinRadius: IPlayersWithinRadius

    /**
     * {487}
     */
    pointCapturePercentage: IPointCapturePercentage

    /**
     * {488}
     */
    positionOf: IPositionOf

    /**
     * {489}
     */
    raiseToPower: IRaiseToPower

    /**
     * {490}
     */
    randomInteger: IRandomInteger

    /**
     * {491}
     */
    randomReal: IRandomReal

    /**
     * {492}
     */
    randomValueInArray: IRandomValueInArray

    /**
     * {493}
     */
    randomizedArray: IRandomizedArray

    /**
     * {494}
     */
    rayCastHitNormal: IRayCastHitNormal

    /**
     * {495}
     */
    rayCastHitPlayer: IRayCastHitPlayer

    /**
     * {496}
     */
    rayCastHitPosition: IRayCastHitPosition

    /**
     * {497}
     */
    removeFromArray: IRemoveFromArray

    /**
     * {498}
     */
    right: IRight

    /**
     * {499}
     */
    roundToInteger: IRoundToInteger

    /**
     * {500}
     */
    scoreOf: IScoreOf

    /**
     * {501}
     */
    serverLoad: IServerLoad

    /**
     * {502}
     */
    serverLoadAverage: IServerLoadAverage

    /**
     * {503}
     */
    serverLoadPeak: IServerLoadPeak

    /**
     * {504}
     */
    sineFromDegrees: ISineFromDegrees

    /**
     * {505}
     */
    sineFromRadians: ISineFromRadians

    /**
     * {506}
     */
    slotOf: ISlotOf

    /**
     * {507}
     */
    sortedArray: ISortedArray

    /**
     * {508}
     */
    speedOf: ISpeedOf

    /**
     * {509}
     */
    speedOfInDirection: ISpeedOfInDirection

    /**
     * {510}
     */
    squareRoot: ISquareRoot

    /**
     * {511}
     */
    string: IString

    /**
     * {512}
     */
    subtract: ISubtract

    /**
     * {513}
     */
    tangentFromDegrees: ITangentFromDegrees

    /**
     * {514}
     */
    tangentFromRadians: ITangentFromRadians

    /**
     * {515}
     */
    team: ITeam

    /**
     * {516}
     */
    teamOf: ITeamOf

    /**
     * {517}
     */
    teamScore: ITeamScore

    /**
     * {518}
     */
    throttleOf: IThrottleOf

    /**
     * {519}
     */
    totalTimeElapsed: ITotalTimeElapsed

    /**
     * {520}
     */
    true: ITrue

    /**
     * {521}
     */
    ultimateChargePercent: IUltimateChargePercent

    /**
     * {522}
     */
    up: IUp

    /**
     * {523}
     */
    valueInArray: IValueInArray

    /**
     * {524}
     */
    vector: IVector

    /**
     * {525}
     */
    vectorTowards: IVectorTowards

    /**
     * {526}
     */
    velocityOf: IVelocityOf

    /**
     * {527}
     */
    verticalAngleFromDirection: IVerticalAngleFromDirection

    /**
     * {528}
     */
    verticalAngleTowards: IVerticalAngleTowards

    /**
     * {529}
     */
    verticalFacingAngleOf: IVerticalFacingAngleOf

    /**
     * {530}
     */
    verticalSpeedOf: IVerticalSpeedOf

    /**
     * {531}
     */
    victim: IVictim

    /**
     * {532}
     */
    worldVectorOf: IWorldVectorOf

    /**
     * {533}
     */
    xComponentOf: IXComponentOf
    
    /**
     * {534}
     */
    yComponentOf: IYComponentOf

    /**
     * {535}
     */
    zComponentOf: IZComponentOf
}