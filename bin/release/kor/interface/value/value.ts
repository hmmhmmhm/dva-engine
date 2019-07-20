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
     * 지정된 값의 절대값입니다.
     */
    absoluteValue: IAbsoluteValue

    /**
     * 두 숫자 또는 벡터의 합입니다.
     */
    add: IAdd

    /**
     * 팀 또는 경기 내에서 사망한 모든 플레이어가 있는 배열입니다.
     */
    allDeadPlayers: IAllDeadPlayers

    /**
     * 오버워치의 모든 영웅 배열입니다.
     */
    allHeroes: IAllHeroes

    /**
     * 팀 또는 경기 내에서 생존한 모든 플레이어가 있는 배열입니다.
     */
    allLivingPlayers: IAllLivingPlayers

    /**
     * 팀 또는 경기 내 모든 플레이어가 있는 배열입니다.
     */
    allPlayers: IAllPlayers

    /**
     * 팀 또는 경기 내에서 화물을 확보하지도,
     * 점령 중이지도 않은 모든 플레이어가 있는 배열입니다.
     */
    allPlayersNotOnObjective: IAllPlayersNotOnObjective

    /**
     * 팀 또는 경기 내에서 화물 확보 또는
     * 점령 중인 모든 플레이어가 있는 배열입니다.
     */
    allPlayersOnObjective: IAllPlayersOnObjective

    /**
     * 지정된 플레이어가 선택할 수 있는 영웅 배열입니다.
     */
    allowedHeroes: IAllowedHeroes

    /**
     * 표면으로부터 측정한 플레이어의 높이(미터)입니다.
     * 플레이어가 표면에 있으면 0입니다.
     */
    altitudeOf: IAltitudeOf

    /**
     * 두 입력 정보 모두 TRUE(또는 그에 상응하는 경우)인지 여부입니다.
     */
    and: IAnd

    /**
     * 두 방향 벡터 (정규화 불필요) 사이의 각입니다. (단위: 도)
     */
    angleBetweenVectors: IAngleBetweenVectors

    /**
     * 두 각을 비교한 각도 차이(단위: 도) 입니다. 두 각을 서로 +/- 180
     * 이내에서 펼쳐서 두 번째 각이 첫 번째 각보다 크다면 결과각은 양수입니다.
     * 이외의 경우 0이나 음수가 될 수 있습니다.
     */
    angleDifference: IAngleDifference

    /**
     * 맨 뒤에 하나 이상의 값을 덧붙인 배열의 복사본입니다.
     */
    appendToArray: IAppendToArray

    /**
     * 지정된 각(단위: 도)의 아크코사인 값입니다.
     */
    acrossineInDegrees: IAcrossineInDegrees

    /**
     * 지정된 각(단위: RAD)의 아크코사인 값입니다.
     */
    arccosineInRadians: IArccosineInRadians

    /**
     * 지정된 각(단위: 도)의 아크사인 값입니다.
     */
    arcsineInDegrees: IArcsineInDegrees

    /**
     * 지정된 각(단위: RAD)의 아크사인 값입니다.
     */
    arcsineInRadians: IArcsineInRadians

    /**
     * 지정된 분자와 분모(단위: 도)의 아크탄젠트 값입니다.
     * (흔히 ATAN2 로 불림)
     */
    arctangentInDegrees: IArctangentInDegrees

    /**
     * 지정된 분자와 분모(단위: RAD)의 아크탄젠트 값입니다.
     * (흔히 ATAN2 로 불림)
     */
    arctangentInRadians: IArctangentInRadians

    /**
     * 지정된 배열에 지정된 값이 있는지 여부입니다.
     */
    arrayContains: IArrayContains

    /**
     * 지정된 범위 인덱스의 값만을
     * 포함하고 있는 지정된 배열의 복사본입니다.
     */
    arraySlice: IArraySlice

    /**
     * 이 규칙으로 처리된 이벤트로 인해 피해를 준 플레이어입니다.
     * VICTIM 또는 EVENT PLAYER와 동일할 수 있습니다.
     */
    attacker: IAttacker

    /**
     * 후방을 가리키는 방향 벡터(0, 0, -1)의 약칭입니다.
     */
    backward: IBackward

    /**
     * 한 위치에서 가장 가까운 플레이어입니다.
     * 팀으로 제한할 수 있습니다.
     */
    closestPlayerTo: IClosestPlayerTo

    /**
     * 두 입력 정보의 비교 결과가 TRUE인지 여부입니다.
     */
    compare: ICompare

    /**
     * 쟁탈 전장에서 지정된 팀의 점수 비율입니다.
     */
    controlModeScoringPercentage: IControlModeScoringPercentage

    /**
     * 현재 쟁탈 전장에서 점수를 축적하고 있는 팀입니다.
     * 아무 팀도 점수를 축적하지 못한 경우 결과값은 ALL입니다.
     */
    controlModeScoringTeam: IControlModeScoringTeam

    /**
     * 지정된 각(단위: 도)의 코사인 값입니다.
     */
    cosineFromDegrees: ICosineFromDegrees

    /**
     * 지정된 각(단위: RAD)의 코사인 값입니다.
     */
    cosineFromRadians: ICosineFromRadians

    /** 
     * 지정된 배열 내 요소의 수입니다. 
     */
    countOf: ICountOf

    /**
     * 지정된 값의 가위곱입니다.(왼쪽과 위쪽의 벡터 곱은 전방 방향)
     */
    crossProduct: ICrossProduct

    /**
     * 현재 연산 대상인 배열 요소입니다.
     * FILTERED ARRAY 나 SORTED ARRAY 등의
     * 값을 확인할 때에만 의미가 있습니다.
     */
    currentArrayElement: ICurrentArrayElement

    /**
     * 지정된 각에 대응하는 단위 길이 방향 벡터입니다.
     */
    directionFromAngles: IDirectionFromAngles

    /**
     * 한 위치에서 다른 위치까지의 단위 길이 방향 벡터입니다.
     */
    directionTowards: IDirectionTowards

    /**
     * 두 위치 사이의 거리(미터)입니다.
     */
    distanceBetween: IDistanceBetween
    
    /**
     * 두 숫자 또는 벡터의 비율입니다. 벡터를 숫자로 나누면
     * 비율이 증감된 벡터가 도출됩니다. 0으로 나누면 0이 됩니다.
     */
    divide: IDivide

    /**
     * 지정된 값의 점곱입니다.
     */
    dotProduct: IDotProduct

    /**
     * 아래를 가리키는 방향 벡터(0, -1, 0)의 약칭입니다.
     */
    down: IDown

    /**
     * 요소가 없는 배열입니다.
     */
    emptyArray: IEmptyArray

    /**
     * 특정 플레이어, 아이콘 개체, 효과 개체가 아직 존재하는지 여부입니다.
     * 플레이어가 경기를 나갔는지, 개체가 소멸됐는지 등을 판별할 때 유용합니다.
     */
    entityExists: IEntityExists

    /**
     * 이 규칙에 의해 현재 처리되고 있는
     * 이벤트의 VICTIM이 받는 피해량입니다.
     */
    eventDamage: IEventDamage

    /**
     * 이벤트로 지정된 이 규칙을 실행 중인 플레이어입니다.
     * ATTACKER 또는 VICTIM과 동일할 수 있습니다.
     */
    eventPlayer: IEventPlayer

    /**
     * 이 규칙에 의해 현재 처리되고 있는 이벤트에 대한
     * 피해가 치명타(헤드샷 등)인지 여부입니다.
     */
    eventWasCriticalHit: IEventWasCriticalHit

    /**
     * (조준에 쓰인) 플레이어의 1인칭 시점 위치입니다.
     */
    eyePosition: IEyePosition

    /**
     * 월드에 대해 상대적으로 플레이어가 바라보고 있는
     * 방향의 상대적인 단위 길이 방향 벡터입니다.
     * 이 값에는 종 및 횡 방향이 있습니다.
     */
    facingDirectionOf: IFacingDirectionOf

    /**
     * false 의 부울 값입니다.
     */
    false: IFalse

    /**
     * 지정된 위치로부터 가장 멀리 떨어진 플레이어로, 팀의 제한을 받을 수 있습니다.
     */
    farthestPlayerFrom: IFarthestPlayerFrom

    /**
     * 제거된 지정 조건에 해당하지 않는 값을 가진
     * 지정된 배열의 복사본입니다.
     */
    filteredArray: IFilteredArray

    /**
     * 지정된 배열의 맨 앞에 있는 값입니다.
     * 해당 배열이 비어 있으면 결과 값은 0 입니다.
     */
    firstOf: IFirstOf

    /**
     * 깃발 뺏기에서 지정된 팀의 깃발 위치입니다.
     */
    flagPosition: IFlagPosition

    /**
     * 전방을 가리키는 방향 벡터(0, 0, 1)의 약칭입니다.
     */
    forward: IForward

    /**
     * 게임 자체에 종속된 전역 변수의 현재 값입니다.
     */
    globalVariable: IGlobalVariable

    /**
     * 월드에 개체가 생성되었는지 여부입니다.
     * 플레이어가 영웅을 선택하지 않은 경우
     * 결과값은 FALSE 입니다.
     */
    hasSpawned: IHasSpawned

    /**
     * 지정된 플레이어가 SET STATUS 액션 또는 스크립트 이외의
     * 게임 메카닉을 통해 지정된 상태를 갖게 되었는지 여부입니다.
     */
    hasStatus: IHasStatus

    /**
     * 한 플레이어의 현재 생명력(방어력 및 보호막 포함)입니다.
     */
    health: IHealth

    /**
     * 영웅 상수입니다.
     */
    hero: IHero

    /**
     * HERO 매개변수를 아이콘으로 표시할 문자열로 변환합니다.
     */
    heroIconString: IHeroIconString

    /**
     * 플레이어가 현재 사용하는 영웅입니다.
     */
    heroOf: IHeroOf

    /**
     * 지정된 방향 벡터에 대응하는 횡축각(단위: 도)입니다.
     */
    horizontalAngleFromDirection: IHorizontalAngleFromDirection
    
    /**
     * 플레이어의 전방에서 지정된 위치까지의 횡축각(단위: 도)입니다.
     * 이 값은 해당 위치가 플레이엉 좌측에 있는 경우 양수이며,
     * 그 외의 경우 0이거나 음수입니다.
     */
    horizontalAngleTowards: IHorizontalAngleTowards

    /**
     * 월드에 대해 상대적으로 플레이어가 바라보고 있는
     * 방향의 상대적인 횡축각(단위: 도)입니다.
     * 이 값은 플레이어가 좌측으로 회전 시 증가합니다.
     * (+/- 180도 범위)
     */
    horizontalFacingAngleOf: IHorizontalFacingAngleOf

    /**
     * 플레이어의 현재 횡축 속도(초당 미터)입니다.
     * 여기에는 모든 종축 움직임이 배제됩니다.
     */
    horizontalSpeedOf: IHorizontalSpeedOf

    /**
     * 배열 내에 있는 값의 인덱스입니다.
     * 해당 값을 찾을 수 없는 경우 -1입니다.
     */
    indexOfArrayValue: IIndexOfArrayValue

    /**
     * 플레이어의 생존 여부 입니다.
     */
    isAlive: IIsAlive
    
    /**
     * 경기가 현재 영웅 선택 단계인지 여부입니다.
     */
    isAssemblingHeroes: IIsAssemblingHeroes

    /**
     * 경기 중 라운드 전환 시기인지 여부입니다.
     */
    isBetwwenRounds: IIsBetwwenRounds

    /**
     * 플레이어가 지정된 버튼을 누르고 있는지 여부입니다.
     */
    isButtonHeld: IIsButtonHeld

    /**
     * 플레이어가 지정된 의사소통 유형
     * (감정 표현, 음성 대사 등)을 사용하는지 여부입니다.
     */
    isCommunicating: IIsCommunicating

    /**
     * 플레이어가 아무 것이든 의사소통 유형
     * (감정 표현, 음성 대사 등)을 사용하는지 여부입니다.
     */
    isCommunicatingAny: IIsCommunicatingAny

    /**
     * 플레이어가 감정 표현을 사용하는지 여부입니다.
     */
    isCommunicatingAnyEmote: IIsCommunicatingAnyEmote

    /**
     * 플레이어가 음성 대사를 사용하는지 여부입니다.
     * (음성 대사의 지속 시간은 4초로 추정)
     */
    isCommunicatingVoiceLine: IIsCommunicatingVoiceLine

    /**
     * 쟁탈 전장에서 해당 거점이 잠겨있는지 여부입니다.
     */
    isControlModePointLocked: IIsControlModePointLocked
    
    /**
     * 플레이어가 웅크리고 있는 상태인지 여부입니다.
     */
    isCrouching: IIsCrouching

    /**
     * 현재 깃발 뺏기 게임이 승자 결정전인지 여부입니다.
     */
    isCTFModeInSuddenDeath: IIsCTFModeInSuddenDeath

    /**
     * 플레이어의 사망 여부입니다.
     */
    isDead: IIsDead

    /**
     * 지정된 플레이어의 주무기가 사용 중인지 여부입니다.
     */
    isFiringPrimary: IIsFiringPrimary

    /**
     * 지정된 플레이어의 보조 무기 공격이 사용 중인지 여부입니다.
     */
    isFiringSecondary: IIsFiringSecondary

    /**
     * 깃발 뺏기에서 지정된 팀의 깃발이 해당 팀의 기지에 있는지 여부입니다.
     */
    isFlagAtBase: IIsFlagAtBase

    /**
     * 깃발 뺏기에서 상대 팀이 지정된 팀의 깃발을 점유하고 있는지 여부입니다.
     */
    isFlagBeingCarried: IIsFlagBeingCarried

    /**
     * 경기의 주요 단계(전투 및 점수 산정이 허용되는 시기)가 진행 중인지 여부입니다.
     */
    isGameInProgress: IIsGameInProgress

    /**
     * (팀 또는 경기 내에서) 지정된 영웅이 사용되고 있는지 여부입니다.
     */
    isHeroBeingPlayed: IIsHeroBeingPlayed

    /**
     * 플레이어가 공중에 있는 상태인지 여부입니다.
     */
    isInAir: IIsInAir

    /**
     * 두 위치가 서로 보이는지 여부입니다.
     */
    isInLineOfSight: IIsInLineOfSight

    /**
     * 경기가 현재 준비 단계인지 여부입니다.
     */
    isInSetup: IIsInSetup

    /**
     * 지정된 플레이어가 전투준비실에 있는지
     * (또한 치유되고 영웅을 변경할 수 있는지) 여부 입니다.
     */
    isInSpawnRoom: IIsInSpawnRoom

    /**
     * LOCATION이 플레이어의 시야에 있는지 여부입니다.
     */
    isInViewAngle: IIsInViewAngle

    /**
     * 경기가 완료되었는지 여부입니다.
     */
    isMatchComplete: IIsMatchComplete

    /**
     * 플레이어가 이동하고 있는지
     * 여부(현재 속도가 0인지 여부로 판단)입니다.
     */
    isMoving: IIsMoving

    /**
     * 지정된 목표가 완료되었는지 여부입니다.
     * 게임 모드가 점령, 호위 또는
     * 점령/호위가 아닌 경우
     * 결과값은 FALSE입니다.
     */
    isObjectiveComplete: IIsObjectiveComplete

    /**
     * 플레이어가 착지(또는 걷기가 가능한 표면에 있는) 상태인지 여부입니다.
     */
    isOnGround: IIsOnGround

    /**
     * 지정된 플레이어가 현재 화물 또는 점령 지점을 점유하고 있는지 여부입니다.
     */
    isOnObjective: IIsOnObjective

    /**
     * 플레이어가 벽에 있는 상태(오르거나 타는 상태)인지 여부입니다.
     */
    isOnWall: IIsOnWall

    /**
     * 지정된 플레이어의 초상화가 폭주 상태인지 여부입니다.
     */
    isPortraitOnFire: IIsPortraitOnFire

    /**
     * 플레이어가 서 있는 상태인지 여부
     * (이동하지 않고 공중에 있는
     * 상태가 아닌 경우로 판단)입니다.
     */
    isStanding: IIsStanding

    /**
     * 지정된 팀이 현재 수비 중인지 여부입니다.
     * 게임 모드가 점령, 호위,
     * 또는 점령/호위가 아닌 경우
     * 결과값은 FALSE입니다.
     */
    isTeamOnDefense: IIsTeamOnDefense

    /**
     * 지정된 팀이 현재 공격 중인지 여부입니다.
     * 게임 모드가 점령, 호위,
     * 또는 점령/호위가 아닌 경우
     * 결과값은 FALSE입니다.
     */
    isTeamOnOffense: IIsTeamOnOffense

    /**
     * 지정된 배열의 모든 값이 지정된 조건에 대해 TRUE인지 여부입니다.
     */
    isTrueForAll: IIsTrueForAll

    /**
     * 지정된 배열의 값 중 하나가 지정된 조건에 대해 TRUE인지 여부입니다.
     */
    isTrueForAny: IIsTrueForAny

    /**
     * 지정된 플레이어가 기술 1을 사용하는지 여부입니다.
     */
    isUsingAbility1: IIsUsingAbility1

    /**
     * 지정된 플레이어가 기술 2를 사용하는지 여부입니다.
     */
    isUsingAbility2: IIsUsingAbility2

    /**
     * 플레이어가 궁극기를 사용하는지 여부입니다.
     */
    isUsingUltimate: IIsUsingUltimate

    /**
     * 경기 시작에 앞서 플레이어가 참여하기를
     * 기다리고 있는지 여부입니다.
     */
    isWaitingForPlayers: IIsWaitingForPlayers

    /**
     * EVENT PLAYER 또는 전역 레벨에서 가장 마지막에
     * 생성된 효과 또는 아이콘 개체에 대한 참조입니다.
     */
    lastCreatedEntity: ILastCreatedEntity

    /**
     * EVENT PLAYER 또는 전역 레벨에서 실행된 최근의
     * START DAMGE MODIFICATION 액션의 ID입니다.
     */
    lastDamageModificationId: ILastDamageModificationId

    /**
     * EVENT PLAYER 또는 전역 레벨에서 가장 최근에 실행된
     * DAMAGE OVER TIME 액션의 ID입니다.
     */
    lastDamageOverTimeId: ILastDamageOverTimeId

    /**
     * EVENT PLAYER 또는 전역 레벨에서 가장 최근에 실행된
     * HEAL OVER TIME 액션의 ID입니다.
     */
    lastHealOverTimeId: ILastHealOverTimeId

    /**
     * 지정된 배열의 끝에 있는 값입니다.
     * 해당 배열이 비어있으면 결과값은 0입니다.
     */
    lastOf: ILastOf

    /**
     * EVENT PLAYER 또는 전역 레벨에서
     * CREATE HUD TEXT 액션 또는
     * CREATE IN-WORLD TEXT 액션으로
     * 생성한 텍스트의 마지막 부분에 대한 참조입니다.
     */
    lastTextId: ILastTextId

    /**
     * 좌측을 가리키는 방향 벡터(1, 0,0)의 약칭입니다.
     */
    left: ILeft

    /**
     * 제공된 월드 좌표 벡터에 해당하는 로컬 좌표 벡터입니다.
     */
    localVectorOf: ILocalVectorOf

    /**
     * 경기의 현재 라운드입니다. 1부터 증가합니다.
     */
    matchRound: IMatchRound

    /**
     * 현재 게임 모드 단계의 잔여 시간(초)입니다.
     */
    matchTime: IMatchTime

    /**
     * 두 숫자 중 높은 수입니다.
     */
    max: IMax

    /**
     * 플레이어의 최대 생명력(방어력 및 보호막 포함)입니다.
     */
    maxHealth: IMaxHealth

    /**
     * 두 숫자 중 낮은 수입니다.
     */
    min: IMin

    /**
     * 좌측 피연산자를 우측 피연산자로 나눈 나머지입니다.
     * 어떤 숫자이든 MODULO 0의 결과는 0입니다.
     */
    modulo: IModulo

    /**
     * 두 숫자 또는 벡터의 곱입니다. 벡터에 숫자를
     * 곱하면 비율이 증감된 벡터가 도출됩니다.
     */
    multiply: IMultiply

    /**
     * 서 있을 수 있고 생성 지점에서 접근 가능하며
     * 지정된 위치에서 가장 가까운 위치입니다.
     */
    nearestWalkablePostion: INearestWalkablePostion

    /**
     * 벡터의 단위 길이 정규화입니다.
     */
    normalize: INormalize

    /**
     * 방어력 및 보호막을 포함하여 0과 1사이로 
     * 정규화 된 플레이어의 현재 생명력입니다.
     * (예를 들어, 0은 생명력 없음,
     * 0.5는 생명력 절반, 1은 최대 생명력 등등)
     */
    normalizedHealth: INormalizedHealth

    /**
     * 입력 정보가 FALSE(또는 그에 상응하는 경우)인지 여부입니다.
     */
    not: INot

    /**
     * 플레이어가 없음을 나타냅니다. 지정된 입력 정보에
     * 플레이어를 지정하고 싶지 않을 때 사용할 수 있습니다.
     * 비교 또는 디버그용으로 실수 0을 사용하는 것과 동일합니다.
     */
    null: INull

    /**
     * 실수 형식의 상수입니다.
     */
    number: INumber

    /**
     * 팀 또는 경기 내 사망 플레이어 수입니다.
     */
    numberOfDeadPlayers: INumberOfDeadPlayers

    /**
     * 지정된 플레이어가 기록한 사망 수입니다.
     * 이 값은 게임이 진행 중일때만 누적됩니다.
     */
    numberOfDeaths: INumberOfDeaths

    /**
     * 지정된 플레이어가 기록한 처치 수입니다.
     * 이 값은 게임이 진행 중일 때만 누적됩니다.
     */
    numberOfEliminations: INumberOfEliminations

    /**
     * 지정된 플레이어가 기록한 결정타 개수입니다.
     * 이 값은 게임이 진행 중일 때만 쌓이게 됩니다.
     */
    numberOfFinalBlows: INumberOfFinalBlows

    /**
     * 팀 또는 경기 내에서 지정된 영웅을
     * 플레이하는 플레이어의 수입니다.
     */
    numberOfHeroes: INumberOfHeroes

    /**
     * 팀 또는 경기에서 생존한 플레이어의 수입니다.
     */
    numberOfLivingPlayers: INumberOfLivingPlayers

    /**
     * 팀 또는 경기 내 존재하는 플레이어 수입니다.
     */
    numberOfPlayers: INumberOfPlayers

    /**
     * 팀 또는 경기 내에서 화물 또는
     * 거점을 확보하려는 플레이어 수입니다.
     */
    numberOfPlayersOnObjective: INumberOfPlayersOnObjective

    /**
     * 현재 활성화 중인 거점, 화물 경유지, 화물 목적지입니다.
     * (0, 1, 2 중 하나) 점령, 점령/호위, 호위, 쟁탈 전장에서 유효합니다.
     */
    objectiveIndex: IObjectiveIndex

    /**
     * 지정된 목표가 있는 월드 내의 위치(거점, 화물 경유지, 화물 목적지) 입니다.
     * 점령, 점령/호위, 호위, 쟁탈 전장에서 유효합니다.
     */
    objectivePosition: IObjectivePosition

    /**
     * 지정된 팀의 상대 팀입니다.
     */
    oppositeTeamOf: IOppositeTeamOf

    /**
     * 두 입력 정보 중 하나가 TRUE(또는 그에 상응하는 경우)인지 여부입니다.
     */
    or: IOr

    /**
     * 월드 내의 활성화 된 화물 위치입니다.
     */
    payloadPosition: IPayloadPosition

    /**
     * 해당 활성화 화물의 목적지까지 진행률입니다.(비율로 표시됨)
     */
    payloadProgressPercentage: IPayloadProgressPercentage

    /**
     * 깃발 뺏기에서 지정된 팀의 깃발을 지닌 플레이어입니다.
     * 아무도 깃발을 가지지 않은 경우 결과값은 NULL입니다.
     */
    playerCarryingFlag: IPlayerCarryingFlag

    /**
     * 지정된 플레이어의 조준선에서
     * 가장 가까운 플레이어입니다.
     * 팀으로 제한할 수 있습니다.
     */
    playerClosestToReticle: IPlayerClosestToReticle

    /**
     * 지정된 플레이어가 가진 플레이어 변수의 현재 값입니다.
     */
    playerVariable: IPlayerVariable

    /**
     * 게임 내 지정된 슬롯을 점유하는 플레이어의 배열입니다.
     */
    playersInSlot: IPlayersInSlot

    /**
     * 지정된 플레이어의 조준선을 기준으로
     * 시야각 안에 있는 플레이어입니다.
     * 팀 단위로 제한할 수 있습니다.
     */
    playersInViewAngle: IPlayersInViewAngle

    /**
     * 팀 또는 경기 내에서 지정된 영웅을
     * 플레이하는 플레이어가 있는 배열입니다.
     */
    playersOnHero: IPlayersOnHero

    /**
     * 한 위치의 지정된 거리 내 모든 플레이어를 포함하고 있는 배열입니다.
     * 팀 또는 시야 범위로 제한할 수 있습니다.
     */
    playersWithinRadius: IPlayersWithinRadius

    /**
     * 활성화된 거점에서, 점령 중인 거점의 점령 진척도입니다.(비율로 표시)
     */
    pointCapturePercentage: IPointCapturePercentage

    /**
     * 플레이어의 현재 위치(벡터)입니다.
     */
    positionOf: IPositionOf

    /**
     * 좌측 피연산자를 우측 피연산자만큼 제곱합니다.
     * 좌측 피연산자가 음수이면 결과는 항상 0입니다.
     */
    raiseToPower: IRaiseToPower

    /**
     * 지정한 최대값 이하, 최소값 이상
     * 범위 내에서 무작위 정수값입니다.
     */
    randomInteger: IRandomInteger

    /**
     * 지정된 최대 및 최소값 범위
     * 내에서의 무작위 실수값 하나입니다.
     */
    randomReal: IRandomReal

    /**
     * 지정된 배열의 무작위 값입니다.
     */
    randomValueInArray: IRandomValueInArray

    /**
     * 지정된 배열의 값을
     * 무작위 순서로 나열한 복사본입니다.
     */
    randomizedArray: IRandomizedArray

    /**
     * RAY CAST HIT POSITION에서의 표면 법선
     * (아무것도 맞지 않은 경우 END POS에서 START POS)입니다.
     */
    rayCastHitNormal: IRayCastHitNormal

    /**
     * 레이캐스트로 맞힌 플레이어
     * (맞은 플레이어가 없는 경우 NULL)입니다.
     */
    rayCastHitPlayer: IRayCastHitPlayer

    /**
     * 레이캐스트로 맞힌 표면,
     * 오브젝트, 또는 플레이어의 위치
     * (아무것도 맞지 않는 경우 END POS)입니다.
     */
    rayCastHitPosition: IRayCastHitPosition

    /**
     * 하나 이상의 값(있는 경우)이
     * 제거된 배열의 복사본입니다.
     */
    removeFromArray: IRemoveFromArray

    /**
     * 우측을 가리키는 방향 벡터(-1, 0, 0)의 약칭입니다.
     */
    right: IRight

    /**
     * 지정된 값을 반올림할 대상 정수입니다.
     */
    roundToInteger: IRoundToInteger

    /**
     * 지정된 플레이어의 현재 점수입니다.
     * 게임 모드가 개별 전투가 아닌 경우
     * 결과값은 0이 됩니다.
     */
    scoreOf: IScoreOf

    /**
     * 현재 게임 인스턴스의 CPU 사용률(%)입니다.
     * 이 수치가 100에 가까워지거나
     * 100을 초과하면 과도한 리소스 사용으로
     * 인스턴스가 종료될 가능성이 크게 증가합니다.
     */
    serverLoad: IServerLoad

    /**
     * 최근 2초간 게임 인스턴스의 평균 CPU 사용률(%)입니다.
     * 이 수치가 100에 가까워지거나 100을 초과하면
     * 과도한 리소스 사용으로 인스턴스가
     * 종료될 가능성이 크게 증가합니다.
     */
    serverLoadAverage: IServerLoadAverage

    /**
     * 최근 2초간 게임 인스턴스의 최대 CPU 사용률(%)입니다.
     * 이 수치가 100에 가까워지거나 100을 초과하면
     * 과도한 리소스 사용으로 인스턴스가
     * 종료될 가능성이 크게 증가합니다.
     */
    serverLoadPeak: IServerLoadPeak

    /**
     * 지정된 각(단위: 도)의 사인 값입니다.
     */
    sineFromDegrees: ISineFromDegrees

    /**
     * 지정된 각(단위: RAD)의 사인 값입니다.
     */
    sineFromRadians: ISineFromRadians

    /**
     * 지정된 플레이어의 슬롯 번호입니다.
     * 팀전에서 각 팀은 0에서 5개의 슬롯을 보유하며,
     * 개별 전투 게임에서 슬롯 수는 0에서 11까지입니다.
     */
    slotOf: ISlotOf

    /**
     * 지정된 배열의 각 요소를
     * VALUE RANK에 따라 평가하고
     * 정렬해서 만든 새 배열 복사본입니다.
     */
    sortedArray: ISortedArray

    /**
     * 플레이어의 현재 속도(초당 미터)입니다.
     */
    speedOf: ISpeedOf

    /**
     * 지정된 방향에서 플레이어의
     * 현재 속도(초당 미터)입니다.
     */
    speedOfInDirection: ISpeedOfInDirection

    /**
     * 지정된 값의 제곱근입니다.
     */
    squareRoot: ISquareRoot

    /**
     * 선택한 텍스트와 지정된 값으로 구성된 텍스트입니다.
     */
    string: IString

    /**
     * 두 숫자 또는 벡터의 차이입니다.
     */
    subtract: ISubtract

    /**
     * 지정된 각(단위: 도)의 탄젠트 값입니다.
     */
    tangentFromDegrees: ITangentFromDegrees

    /**
     * 지정된 각(단위: RAD)의 탄젠트 값입니다.
     */
    tangentFromRadians: ITangentFromRadians

    /**
     * 팀 상수입니다. ALL 옵션은 팀전의 양팀,
     * 또는 개별 전투 게임의 모든 플레이어를 뜻합니다.
     */
    team: ITeam

    /**
     * 해당 플레이어의 소속 팀입니다.
     * 게임 모드가 개별 전투인 경우 팀은 ALL로 간주됩니다.
     */
    teamOf: ITeamOf

    /**
     * 지정된 팀의 현재 점수입니다.
     * 개별 전투 모드에서는 결과값이 0입니다.
     */
    teamScore: ITeamScore

    /**
     * 한 플레이어의 방향 입력 정보입니다. 
     * X 구성요소가 횡방향 입력 정보(왼쪽이 양),
     * Z 구성 요소가 종방향 입력 정보(위쪽이 양)인 벡터로 표현됩니다.
     */
    throttleOf: IThrottleOf

    /**
     * 게임 인스턴스 생성 후 경과 시간(단위: 초)입니다.
     * (설정 및 전환 시간 포함)
     */
    totalTimeElapsed: ITotalTimeElapsed

    /**
     * TRUE의 부울 값입니다.
     */
    true: ITrue

    /**
     * 플레이어의 현재 궁극기 충전량 비율입니다.
     */
    ultimateChargePercent: IUltimateChargePercent

    /**
     * 위를 가리키는 방향 벡터(0, 1, 0)의 약칭입니다.
     */
    up: IUp

    /**
     * 한 배열의 지정된 요소에 있는 값입니다.
     * 대상 요소가 없는 경우 결과값은 0입니다.
     */
    valueInArray: IValueInArray

    /**
     * 3개의 실수(X, Y, Z)로 이루어진 벡터입니다.
     * X는 좌측, Y는 위, Z는 전방을 의미합니다.
     * 벡터는 위치, 방향, 속도로 사용됩니다.
     */
    vector: IVector

    /**
     * 한 위치에서 다른 위치까지의 변위 벡터입니다.
     */
    vectorTowards: IVectorTowards

    /**
     * 플레이어의 현재 속도(벡터)입니다.
     * 해당 플레이어가 표면 위에 있는 경우,
     * 경사로를 오르 내린다고 해도 Y 구성요소 속도는 0입니다.
     */
    velocityOf: IVelocityOf

    /**
     * 지정된 방향 벡터의 대응하는 종축각(단위: 도)입니다.
     */
    verticalAngleFromDirection: IVerticalAngleFromDirection

    /**
     * 플레이어의 전방에서 지정된
     * 위치까지의 종축각(단위: 도)입니다.
     * 이 값은 해당 위치가
     * 플레이어 아래에 있는 경우 양수이며,
     * 그 외의 경우 0이거나 음수입니다.
     */
    verticalAngleTowards: IVerticalAngleTowards

    /**
     * 월드에 대해 상대적으로 플레이어가
     * 바라보고 있는 방향의 종축각(단위: 도)입니다.
     * 이 값은 플레이어가 내려다보는 경우 증가합니다.
     */
    verticalFacingAngleOf: IVerticalFacingAngleOf

    /**
     * 플레이어의 현재 종축 속도(초당 미터)입니다.
     * 여기에는 경사로를 오르내리는 등의 움직임 등
     * 모든 횡축 이동이 배제됩니다.
     */
    verticalSpeedOf: IVerticalSpeedOf

    /**
     * 이 규칙으로 처리된 이벤트로 인해 피해를 받은 플레이어입니다.
     * ATTACKER 또는 EVENT PLAYER와 동일할 수 있습니다.
     */
    victim: IVictim

    /**
     * 제공된 로컬 좌표 벡터에 해당하는 월드 좌표 벡터입니다.
     */
    worldVectorOf: IWorldVectorOf

    /**
     * 지정된 벡터의 X 구성요소입니다.
     * 일반적으로 왼쪽 방향의 벡터량입니다.
     */
    xComponentOf: IXComponentOf
    
    /**
     * 지정된 벡터의 Y 구성요소입니다.
     * 일반적으로 왼쪽 방향의 벡터량입니다.
     */
    yComponentOf: IYComponentOf

    /**
     * 지정된 벡터의 Z 구성요소입니다.
     * 일반적으로 왼쪽 방향의 벡터량입니다.
     */
    zComponentOf: IZComponentOf
}