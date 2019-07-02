interface IHeroList {
    genji
    doomfist
    reaper
    mcCree
    mei
    bastion
    soldier76
    sombra
    symmetra
    ashe
    widowmaker
    junkrat
    torbjorn
    tracer
    pharah
    hanzo
    dva
    reinhardt
    wreckingBall
    roadhog
    orisa
    winston
    zarya
    lucio
    mercy
    moira
    baptiste
    brigitte
    ana
    zenyatta
}

interface IEventPlayerType extends IHeroList {
    /**
     * Event가 모든 플레이어에게 적용됩니다.
     */
    all

    /**
     * Event가 특정 슬롯에 있는 플레이어에게만 적용됩니다.
     * 팀전에서는 플레이어 두 명이 하나의 슬롯 (각 팀 당 하나)을 차지하고 있을 수 있습니다.
     */
    slot0

    /**
     * Event가 특정 슬롯에 있는 플레이어에게만 적용됩니다.
     * 팀전에서는 플레이어 두 명이 하나의 슬롯 (각 팀 당 하나)을 차지하고 있을 수 있습니다.
     */
    slot1

    /**
     * Event가 특정 슬롯에 있는 플레이어에게만 적용됩니다.
     * 팀전에서는 플레이어 두 명이 하나의 슬롯 (각 팀 당 하나)을 차지하고 있을 수 있습니다.
     */
    slot2
    
    /**
     * Event가 특정 슬롯에 있는 플레이어에게만 적용됩니다.
     * 팀전에서는 플레이어 두 명이 하나의 슬롯 (각 팀 당 하나)을 차지하고 있을 수 있습니다.
     */
    slot3
    
    /**
     * Event가 특정 슬롯에 있는 플레이어에게만 적용됩니다.
     * 팀전에서는 플레이어 두 명이 하나의 슬롯 (각 팀 당 하나)을 차지하고 있을 수 있습니다.
     */
    slot4
    
    /**
     * Event가 특정 슬롯에 있는 플레이어에게만 적용됩니다.
     * 팀전에서는 플레이어 두 명이 하나의 슬롯 (각 팀 당 하나)을 차지하고 있을 수 있습니다.
     */
    slot5
    
    /**
     * Event가 특정 슬롯에 있는 플레이어에게만 적용됩니다. 개별 전투 모드에서만 해당됩니다.
     */
    slot6
    
    /**
     * Event가 특정 슬롯에 있는 플레이어에게만 적용됩니다. 개별 전투 모드에서만 해당됩니다.
     */
    slot7
    
    /**
     * Event가 특정 슬롯에 있는 플레이어에게만 적용됩니다. 개별 전투 모드에서만 해당됩니다.
     */
    slot8
    
    /**
     * Event가 특정 슬롯에 있는 플레이어에게만 적용됩니다. 개별 전투 모드에서만 해당됩니다.
     */
    slot9
    
    /**
     * Event가 특정 슬롯에 있는 플레이어에게만 적용됩니다. 개별 전투 모드에서만 해당됩니다.
     */
    slot10
    
    /**
     * Event가 특정 슬롯에 있는 플레이어에게만 적용됩니다. 개별 전투 모드에서만 해당됩니다.
     */
    slot11
}

interface IEvent {
    /**
     * 게임 시작 시 이 Rule의 개별 인스턴스 하나를 생성합니다.
     * 이 인스턴스는 게임이 지속되는 동안 활성화되어 있습니다.
     * 
     * - 이 인스턴스는 게임이 지속되는 동안 활성화되어 있으므로
     *   Condition 을 만족하거나 만족하지 않을 수 있습니다.
     *   Condition을 처음 만족할 때 Action을 실행 합니다.
     * 
     * - Condition 목록을 만족하지 못했다가 만족한다면,
     *   Action을 다시 실행하려 할 것입니다.
     */
    ongoingGlobal: IOngoingGlobal

    /**
     * 플레이어가 게임에 참여하면각 플레이어마다 이 Rule의 인스턴스가 생성됩니다.
     * 이 인스턴스는 해당 플레이어가 게임을 떠나거나, 게임이 끝날 때까지 활성화되어 있습니다.
     * 각 인스턴스는 개별적으로 Condition과 Action을 추적하고 실행합니다.
     * 
     * - 플레이어가 게임에 남아있는 한 인스턴스가 지속되므로
     *   Condition을 만족할 수도, 그렇지 않을 수도 있습니다.
     *   Condition을 처음 만족하면Action을 실행합니다.
     * 
     * - Condition 목록을 만족하지 못했다가 만족한다면,
     *   Action을 다시 실행하려 할 것입니다.
     */
    ongoingEachPlayer: IOngoingEachPlayer

    /**
     * 플레이어 한 명이 처치를 달성할 때마다 Rule을 실행합니다.
     * 이 Rule은 특정 플레이어를 대상으로 한 번에 하나의 인스턴스만 활성화합니다.
     * 
     * - 플레이어 한 명이 누군가를 처치하면 Condition을 확인합니다.
     *   모든 Condition을 만족하면 Action이 실행되지만, 
     *   하나라도 만족하지 않으면 실행되지 않습니다.
     */
    playerEarnedElimination: IPlayerEarnedElimination
    
    /**
     * 플레이어 한 명이 결정타를 날릴 때마다 Rule을 실행합니다.
     * 이 Rule은 특정 플레이어를 대상으로 한 번에 하나의 인스턴스만 활성화합니다.
     * 
     * - 플레이어가 결정타로 피해를 입히면 Condition을 확인합니다.
     *   모든 Condition을 만족하면 Action이 실행되지만,
     *   하나라도 만족하지 않으면 실행되지 않습니다.
     */
    playerDealtFinalBlow: IPlayerDealtFinalBlow

    /**
     * 플레이어 한 명이 피해를 받을 때마다 Rule을 실행합니다.
     * 이 Rule은 특정 플레이어를 대상으로 한 번에 하나의 인스턴스만 활성화합니다.
     * 
     * - 플레이어가 적에게서 피해를 받으면 Condition을 확인합니다.
     *   모든 Condition을 만족하면Action이 실행되지만,
     *   하나라도 만족하지 않으면 실행되지 않습니다.
     */
    playerTookDamage: IPlayerTookDamage

    /**
     * 플레이어 한 명이 사망할 때마다 Rule을 실행합니다.
     * 이 Rule은 특정 플레이어를 대상으로 한 번에 하나의 인스턴스만 활성화합니다.
     * 
     * - 플레이어가 사망하면 Condition을 확인합니다.
     *   모든 Condition을 만족할 때 Action이 실행되지만,
     *   하나라도 만족하지 않으면 Action이 실행되지 않습니다.
     */
    playerDied: IPlayerDied
}

interface IValueType {
    /**
     * 지정된 값의 절대값입니다.
     */
    absoluteValue

    /**
     * 두 숫자 또는 벡터의 합입니다.
     */
    add

    /**
     * 팀 또는 경기 내에서 사망한 모든 플레이어가 있는 배열입니다.
     */
    allDeadPlayers

    /**
     * 오버워치의 모든 영웅 배열입니다.
     */
    allHeroes

    /**
     * 팀 또는 경기 내에서 생존한 모든 플레이어가 있는 배열입니다.
     */
    allLivingPlayers

    /**
     * 팀 또는 경기 내 모든 플레이어가 있는 배열입니다.
     */
    allPlayers

    /**
     * 팀 또는 경기 내에서 화물을 확보하지도,
     * 점령 중이지도 않은 모든 플레이어가 있는 배열입니다.
     */
    allPlayersNotOnObjective

    /**
     * 팀 또는 경기 내에서 화물 확보 또는
     * 점령 중인 모든 플레이어가 있는 배열입니다.
     */
    allPlayersOnObjective

    /**
     * 지정된 플레이어가 선택할 수 있는 영웅 배열입니다.
     */
    allowedHeroes

    /**
     * 표면으로부터 측정한 플레이어의 높이(미터)입니다.
     * 플레이어가 표면에 있으면 0입니다.
     */
    altitudeOf

    /**
     * 두 입력 정보 모두 TRUE(또는 그에 상응하는 경우)인지 여부입니다.
     */
    and

    /**
     * 두 방향 벡터 (정규화 불필요) 사이의 각입니다. (단위: 도)
     */
    angleBetweenVectors

    /**
     * 두 각을 비교한 각도 차이(단위: 도) 입니다. 두 각을 서로 +/- 180
     * 이내에서 펼쳐서 두 번째 각이 첫 번째 각보다 크다면 결과각은 양수입니다.
     * 이외의 경우 0이나 음수가 될 수 있습니다.
     */
    angleDifference

    /**
     * 맨 뒤에 하나 이상의 값을 덧붙인 배열의 복사본입니다.
     */
    appendToArray

    /**
     * 지정된 각(단위: 도)의 아크코사인 값입니다.
     */
    acrossineInDegrees

    /**
     * 지정된 각(단위: RAD)의 아크코사인 값입니다.
     */
    arccosineInRadians

    /**
     * 지정된 각(단위: 도)의 아크사인 값입니다.
     */
    arcsineInDegrees

    /**
     * 지정된 각(단위: RAD)의 아크사인 값입니다.
     */
    arcsineInRadians

    /**
     * 지정된 분자와 분모(단위: 도)의 아크탄젠트 값입니다.
     * (흔히 ATAN2 로 불림)
     */
    arctangentInDegrees

    /**
     * 지정된 분자와 분모(단위: RAD)의 아크탄젠트 값입니다.
     * (흔히 ATAN2 로 불림)
     */
    arctangentInRadians

    /**
     * 지정된 배열에 지정된 값이 있는지 여부입니다.
     */
    arrayContains

    /**
     * 지정된 범위 인덱스의 값만을
     * 포함하고 있는 지정된 배열의 복사본입니다.
     */
    arraySlice

    /**
     * 이 규칙으로 처리된 이벤트로 인해 피해를 준 플레이어입니다.
     * VICTIM 또는 EVENT PLAYER와 동일할 수 있습니다.
     */
    attacker

    /**
     * 후방을 가리키는 방향 벡터(0, 0, -1)의 약칭입니다.
     */
    backward

    /**
     * 한 위치에서 가장 가까운 플레이어입니다.
     * 팀으로 제한할 수 있습니다.
     */
    closestPlayerTo

    /**
     * 두 입력 정보의 비교 결과가 TRUE인지 여부입니다.
     */
    compare

    /**
     * 쟁탈 전장에서 지정된 팀의 점수 비율입니다.
     */
    controlModeScoringPercentage

    /**
     * 현재 쟁탈 전장에서 점수를 축적하고 있는 팀입니다.
     * 아무 팀도 점수를 축적하지 못한 경우 결과값은 ALL입니다.
     */
    controlModeScoringTeam

    /**
     * 지정된 각(단위: 도)의 코사인 값입니다.
     */
    cosineFromDegrees

    /**
     * 지정된 각(단위: RAD)의 코사인 값입니다.
     */
    cosineFromRadians

    /** 
     * 지정된 배열 내 요소의 수입니다. 
     */
    countOf

    /**
     * 지정된 값의 가위곱입니다.(왼쪽과 위쪽의 벡터 곱은 전방 방향)
     */
    crossProduct

    /**
     * 현재 연산 대상인 배열 요소입니다.
     * FILTERED ARRAY 나 SORTED ARRAY 등의
     * 값을 확인할 때에만 의미가 있습니다.
     */
    currentArrayElement

    /**
     * 지정된 각에 대응하는 단위 길이 방향 벡터입니다.
     */
    directionFromAngles

    /**
     * 한 위치에서 다른 위치까지의 단위 길이 방향 벡터입니다.
     */
    directionTowards

    /**
     * 두 위치 사이의 거리(미터)입니다.
     */
    distanceBetween
    
    /**
     * 두 숫자 또는 벡터의 비율입니다. 벡터를 숫자로 나누면
     * 비율이 증감된 벡터가 도출됩니다. 0으로 나누면 0이 됩니다.
     */
    divide

    /**
     * 지정된 값의 점곱입니다.
     */
    dotProduct

    /**
     * 아래를 가리키는 방향 벡터(0, -1, 0)의 약칭입니다.
     */
    down

    /**
     * 요소가 없는 배열입니다.
     */
    emptyArray

    /**
     * 특정 플레이어, 아이콘 개체, 효과 개체가 아직 존재하는지 여부입니다.
     * 플레이어가 경기를 나갔는지, 개체가 소멸됐는지 등을 판별할 때 유용합니다.
     */
    entityExists

    /**
     * 이 규칙에 의해 현재 처리되고 있는
     * 이벤트의 VICTIM이 받는 피해량입니다.
     */
    eventDamage

    /**
     * 이벤트로 지정된 이 규칙을 실행 중인 플레이어입니다.
     * ATTACKER 또는 VICTIM과 동일할 수 있습니다.
     */
    eventPlayer

    /**
     * 이 규칙에 의해 현재 처리되고 있는 이벤트에 대한
     * 피해가 치명타(헤드샷 등)인지 여부입니다.
     */
    eventWasCriticalHit

    /**
     * (조준에 쓰인) 플레이어의 1인칭 시점 위치입니다.
     */
    eyePosition

    /**
     * 월드에 대해 상대적으로 플레이어가 바라보고 있는
     * 방향의 상대적인 단위 길이 방향 벡터입니다.
     * 이 값에는 종 및 횡 방향이 있습니다.
     */
    facingDirectionOf

    /**
     * false 의 부울 값입니다.
     */
    false

    /**
     * 지정된 위치로부터 가장 멀리 떨어진 플레이어로, 팀의 제한을 받을 수 있습니다.
     */
    farthestPlayerFrom

    /**
     * 제거된 지정 조건에 해당하지 않는 값을 가진
     * 지정된 배열의 복사본입니다.
     */
    filteredArray

    /**
     * 지정된 배열의 맨 앞에 있는 값입니다.
     * 해당 배열이 비어 있으면 결과 값은 0 입니다.
     */
    firstOf

    /**
     * 깃발 뺏기에서 지정된 팀의 깃발 위치입니다.
     */
    flagPosition

    /**
     * 전방을 가리키는 방향 벡터(0, 0, 1)의 약칭입니다.
     */
    forward

    /**
     * 게임 자체에 종속된 전역 변수의 현재 값입니다.
     */
    globalVariable

    /**
     * 월드에 개체가 생성되었는지 여부입니다.
     * 플레이어가 영웅을 선택하지 않은 경우
     * 결과값은 FALSE 입니다.
     */
    hasSpawned

    /**
     * 지정된 플레이어가 SET STATUS 액션 또는 스크립트 이외의
     * 게임 메카닉을 통해 지정된 상태를 갖게 되었는지 여부입니다.
     */
    hasStatus

    /**
     * 한 플레이어의 현재 생명력(방어력 및 보호막 포함)입니다.
     */
    health

    /**
     * 영웅 상수입니다.
     */
    hero: IHeroList

    /**
     * HERO 매개변수를 아이콘으로 표시할 문자열로 변환합니다.
     */
    heroIconString

    /**
     * 플레이어가 현재 사용하는 영웅입니다.
     */
    heroOf

    /**
     * 지정된 방향 벡터에 대응하는 횡축각(단위: 도)입니다.
     */
    horizontalAngleFromDirection

    
    /**
     * 플레이어의 전방에서 지정된 위치까지의 횡축각(단위: 도)입니다.
     * 이 값은 해당 위치가 플레이엉 좌측에 있는 경우 양수이며,
     * 그 외의 경우 0이거나 음수입니다.
     */
    horizontalAngleTowards

    /**
     * 월드에 대해 상대적으로 플레이어가 바라보고 있는
     * 방향의 상대적인 횡축각(단위: 도)입니다.
     * 이 값은 플레이어가 좌측으로 회전 시 증가합니다.
     * (+/- 180도 범위)
     */
    horizontalFacingAngleOf

    /**
     * 플레이어의 현재 횡축 속도(초당 미터)입니다. 여기에는 모든 종축 움직임이 배제됩니다.
     */
    horizontalSpeedOf

    /**
     * 배열 내에 있는 값의 인덱스입니다. 해당 값을 찾을 수 없는 경우 -1입니다.
     */
    indexOfArrayValue

    /**
     * 플레이어의 생존 여부 입니다.
     */
    isAlive
    
    /**
     * 경기가 현재 영웅 선택 단계인지 여부입니다.
     */
    isAssemblingHeroes

    /**
     * 경기 중 라운드 전환 시기인지 여부입니다.
     */
    isBetwwenRounds

    /**
     * 플레이어가 지정된 버튼을 누르고 있는지 여부입니다.
     */
    isButtonHeld

    /**
     * 플레이어가 지정된 의사소통 유형
     * (감정 표현, 음성 대사 등)을 사용하는지 여부입니다.
     */
    isCommunicating

    /**
     * 플레이어가 아무 것이든 의사소통 유형
     * (감정 표현, 음성 대사 등)을 사용하는지 여부입니다.
     */
    isCommunicatingAny

    /**
     * 플레이어가 감정 표현을 사용하는지 여부입니다.
     */
    isCommunicatingAnyEmote

    /**
     * 플레이어가 음성 대사를 사용하는지 여부입니다.
     * (음성 대사의 지속 시간은 4초로 추정)
     */
    isCommunicatingVoiceLine

    /**
     * 쟁탈 전장에서 해당 거점이 잠겨있는지 여부입니다.
     */
    isControlModePointLocked
    
    /**
     * 플레이어가 웅크리고 있는 상태인지 여부입니다.
     */
    isCrouching

    /**
     * 현재 깃발 뺏기 게임이 승자 결정전인지 여부입니다.
     */
    isCTFModeInSuddenDeath

    /**
     * 플레이어의 사망 여부입니다.
     */
    isDead

    /**
     * 지정된 플레이어의 주무기가 사용 중인지 여부입니다.
     */
    isFiringPrimary

    /**
     * 지정된 플레이어의 보조 무기 공격이 사용 중인지 여부입니다.
     */
    isFiringSecondary

    /**
     * 깃발 뺏기에서 지정된 팀의 깃발이 해당 팀의 기지에 있는지 여부입니다.
     */
    isFlagAtBase

    /**
     * 깃발 뺏기에서 상대 팀이 지정된 팀의 깃발을 점유하고 있는지 여부입니다.
     */
    isFlagBeingCarried

    /**
     * 경기의 주요 단계(전투 및 점수 산정이 허용되는 시기)가 진행 중인지 여부입니다.
     */
    isGameInProgress

    /**
     * (팀 또는 경기 내에서) 지정된 영웅이 사용되고 있는지 여부입니다.
     */
    isHeroBeingPlayed

    /**
     * 플레이어가 공중에 있는 상태인지 여부입니다.
     */
    isInAir

    /**
     * 두 위치가 서로 보이는지 여부입니다.
     */
    isInLineOfSight

    /**
     * 경기가 현재 준비 단계인지 여부입니다.
     */
    isInSetup

    /**
     * 지정된 플레이어가 전투준비실에 있는지
     * (또한 치유되고 영웅을 변경할 수 있는지) 여부 입니다.
     */
    isInSpawnRoom

    /**
     * LOCATION이 플레이어의 시야에 있는지 여부입니다.
     */
    isInViewAngle

    /**
     * 경기가 완료되었는지 여부입니다.
     */
    isMatchComplete

    /**
     * 플레이어가 이동하고 있는지 여부(현재 속도가 0인지 여부로 판단)입니다.
     */
    isMoving

    /**
     * 지정된 목표가 완료되었는지 여부입니다. 게임 모드가 점령, 호위 또는
     * 점령/호위가 아닌 경우 결과값은 FALSE입니다.
     */
    isObjectiveComplete

    /**
     * 플레이어가 착지(또는 걷기가 가능한 표면에 있는) 상태인지 여부입니다.
     */
    isOnGround

    /**
     * 지정된 플레이어가 현재 화물 또는 점령 지점을 점유하고 있는지 여부입니다.
     */
    isOnObjective

    /**
     * 플레이어가 벽에 있는 상태(오르거나 타는 상태)인지 여부입니다.
     */
    isOnWall

    /**
     * 지정된 플레이어의 초상화가 폭주 상태인지 여부입니다.
     */
    isPortraitOnFire

    /**
     * 플레이어가 서 있는 상태인지 여부
     * (이동하지 않고 공중에 있는 상태가 아닌 경우로 판단)입니다.
     */
    isStanding

    /**
     * 지정된 팀이 현재 수비 중인지 여부입니다. 게임 모드가 점령, 호위,
     * 또는 점령/호위가 아닌 경우 결과값은 FALSE입니다.
     */
    isTeamOnDefense

    /**
     * 지정된 팀이 현재 공격 중인지 여부입니다. 게임 모드가 점령, 호위,
     * 또는 점령/호위가 아닌 경우 결과값은 FALSE입니다.
     */
    isTeamOnOffense

    /**
     * 지정된 배열의 모든 값이 지정된 조건에 대해 TRUE인지 여부입니다.
     */
    isTrueForAll

    /**
     * 지정된 배열의 값 중 하나가 지정된 조건에 대해 TRUE인지 여부입니다.
     */
    isTrueForAny

    /**
     * 지정된 플레이어가 기술 1을 사용하는지 여부입니다.
     */
    isUsingAbility1

    /**
     * 지정된 플레이어가 기술 2를 사용하는지 여부입니다.
     */
    isUsingAbility2

    /**
     * 플레이어가 궁극기를 사용하는지 여부입니다.
     */
    isUsingUltimate

    /**
     * 경기 시작에 앞서 플레이어가 참여하기를
     * 기다리고 있는지 여부입니다.
     */
    isWaitingForPlayers

    /**
     * EVENT PLAYER 또는 전역 레벨에서 가장 마지막에
     * 생성된 효과 또는 아이콘 개체에 대한 참조입니다.
     */
    lastCreatedEntity

    /**
     * EVENT PLAYER 또는 전역 레벨에서 실행된 최근의
     * START DAMGE MODIFICATION 액션의 ID입니다.
     */
    lastDamageModificationId

    /**
     * EVENT PLAYER 또는 전역 레벨에서 가장 최근에 실행된
     * DAMAGE OVER TIME 액션의 ID입니다.
     */
    lastDamageOverTimeId

    /**
     * EVENT PLAYER 또는 전역 레벨에서 가장 최근에 실행된
     * HEAL OVER TIME 액션의 ID입니다.
     */
    lastHealOverTimeId

    /**
     * 지정된 배열의 끝에 있는 값입니다.
     * 해당 배열이 비어있으면 결과값은 0입니다.
     */
    lastOf

    /**
     * EVENT PLAYER 또는 전역 레벨에서
     * CREATE HUD TEXT 액션 또는
     * CREATE IN-WORLD TEXT 액션으로
     * 생성한 텍스트의 마지막 부분에 대한 참조입니다.
     */
    lastTextId

    /**
     * 좌측을 가리키는 방향 벡터(1, 0,0)의 약칭입니다.
     */
    left

    /**
     * 제공된 월드 좌표 벡터에 해당하는 로컬 좌표 벡터입니다.
     */
    localVectorOf

    /**
     * 경기의 현재 라운드입니다. 1부터 증가합니다.
     */
    matchRound

    /**
     * 현재 게임 모드 단계의 잔여 시간(초)입니다.
     */
    matchTime

    /**
     * 두 숫자 중 높은 수입니다.
     */
    max

    /**
     * 플레이어의 최대 생명력(방어력 및 보호막 포함)입니다.
     */
    maxHealth

    /**
     * 두 숫자 중 낮은 수입니다.
     */
    min

    /**
     * 좌측 피연산자를 우측 피연산자로 나눈 나머지입니다.
     * 어떤 숫자이든 MODULO 0의 결과는 0입니다.
     */
    modulo

    /**
     * 두 숫자 또는 벡터의 곱입니다. 벡터에 숫자를
     * 곱하면 비율이 증감된 벡터가 도출됩니다.
     */
    multiply

    /**
     * 서 있을 수 있고 생성 지점에서 접근 가능하며
     * 지정된 위치에서 가장 가까운 위치입니다.
     */
    nearestWalkablePostion

    /**
     * 벡터의 단위 길이 정규화입니다.
     */
    normalize

    /**
     * 방어력 및 보호막을 포함하여 0과 1사이로 
     * 정규화 된 플레이어의 현재 생명력입니다.
     * (예를 들어, 0은 생명력 없음,
     * 0.5는 생명력 절반, 1은 최대 생명력 등등)
     */
    normalizedHealth

    /**
     * 입력 정보가 FALSE(또는 그에 상응하는 경우)인지 여부입니다.
     */
    not

    /**
     * 플레이어가 없음을 나타냅니다. 지정된 입력 정보에
     * 플레이어를 지정하고 싶지 않을 때 사용할 수 있습니다.
     * 비교 또는 디버그용으로 실수 0을 사용하는 것과 동일합니다.
     */
    null

    /**
     * 실수 형식의 상수입니다.
     */
    number

    /**
     * 팀 또는 경기 내 사망 플레이어 수입니다.
     */
    numberOfDeadPlayers

    /**
     * 지정된 플레이어가 기록한 사망 수입니다.
     * 이 값은 게임이 진행 중일때만 누적됩니다.
     */
    numberOfDeaths

    /**
     * 지정된 플레이어가 기록한 처치 수입니다.
     * 이 값은 게임이 진행 중일 때만 누적됩니다.
     */
    numberOfEliminations

    /**
     * 지정된 플레이어가 기록한 결정타 개수입니다.
     * 이 값은 게임이 진행 중일 때만 쌓이게 됩니다.
     */
    numberOfFinalBlows

    /**
     * 팀 또는 경기 내에서 지정된 영웅을
     * 플레이하는 플레이어의 수입니다.
     */
    numberOfHeroes

    /**
     * 팀 또는 경기에서 생존한 플레이어의 수입니다.
     */
    numberOfLivingPlayers

    /**
     * 팀 또는 경기 내 존재하는 플레이어 수입니다.
     */
    numberOfPlayers

    /**
     * 팀 또는 경기 내에서 화물 또는 거점을 확보하려는 플레이어 수입니다.
     */
    numberOfPlayersOnObjective

    /**
     * 현재 활성화 중인 거점, 화물 경유지, 화물 목적지입니다.
     * (0, 1, 2 중 하나) 점령, 점령/호위, 호위, 쟁탈 전장에서 유효합니다.
     */
    objectiveIndex

    /**
     * 지정된 목표가 있는 월드 내의 위치(거점, 화물 경유지, 화물 목적지) 입니다.
     * 점령, 점령/호위, 호위, 쟁탈 전장에서 유효합니다.
     */
    objectivePosition

    /**
     * 지정된 팀의 상대 팀입니다.
     */
    oppositeTeamOf

    /**
     * 두 입력 정보 중 하나가 TRUE(또는 그에 상응하는 경우)인지 여부입니다.
     */
    or

    /**
     * 월드 내의 활성화 된 화물 위치입니다.
     */
    payloadPosition

    /**
     * 해당 활성화 화물의 목적지까지 진행률입니다.(비율로 표시됨)
     */
    payloadProgressPercentage

    /**
     * 깃발 뺏기에서 지정된 팀의 깃발을 지닌 플레이어입니다.
     * 아무도 깃발을 가지지 않은 경우 결과값은 NULL입니다.
     */
    playerCarryingFlag

    /**
     * 지정된 플레이어의 조준선에서 가장 가까운 플레이어입니다.
     * 팀으로 제한할 수 있습니다.
     */
    playerClosestToReticle

    /**
     * 지정된 플레이어가 가진 플레이어 변수의 현재 값입니다.
     */
    playerVariable

    /**
     * 게임 내 지정된 슬롯을 점유하는 플레이어의 배열입니다.
     */
    playersInSlot

    /**
     * 지정된 플레이어의 조준선을 기준으로
     * 시야각 안에 있는 플레이어입니다.
     * 팀 단위로 제한할 수 있습니다.
     */
    playersInViewAngle

    /**
     * 팀 또는 경기 내에서 지정된 영웅을 플레이하는 플레이어가 있는 배열입니다.
     */
    playersOnHero

    /**
     * 한 위치의 지정된 거리 내 모든 플레이어를 포함하고 있는 배열입니다.
     * 팀 또는 시야 범위로 제한할 수 있습니다.
     */
    playersWithinRadius

    /**
     * 활성화된 거점에서, 점령 중인 거점의 점령 진척도입니다.(비율로 표시)
     */
    pointCapturePercentage

    /**
     * 플레이어의 현재 위치(벡터)입니다.
     */
    positionOf

    /**
     * 좌측 피연산자를 우측 피연산자만큼 제곱합니다.
     * 좌측 피연산자가 음수이면 결과는 항상 0입니다.
     */
    raiseToPower

    /**
     * 지정한 최대값 이하, 최소값 이상 범위 내에서 무작위 정수값입니다.
     */
    randomInteger

    /**
     * 지정된 최대 및 최소값 범위 내에서의 무작위 실수값 하나입니다.
     */
    randomReal

    /**
     * 지정된 배열의 무작위 값입니다.
     */
    randomValueInArray

    /**
     * 지정된 배열의 값을 무작위 순서로 나열한 복사본입니다.
     */
    randomizedArray

    /**
     * RAY CAST HIT POSITION에서의 표면 법선
     * (아무것도 맞지 않은 경우 END POS에서 START POS)입니다.
     */
    rayCastHitNormal

    /**
     * 레이캐스트로 맞힌 플레이어(맞은 플레이어가 없는 경우 NULL)입니다.
     */
    rayCastHitPlayer

    /**
     * 레이캐스트로 맞힌 표면, 오브젝트, 또는 플레이어의 위치
     * (아무것도 맞지 않는 경우 END POS)입니다.
     */
    rayCastHitPosition

    /**
     * 하나 이상의 값(있는 경우)이 제거된 배열의 복사본입니다.
     */
    removeFromArray

    /**
     * 우측을 가리키는 방향 벡터(-1, 0, 0)의 약칭입니다.
     */
    right

    /**
     * 지정된 값을 반올림할 대상 정수입니다.
     */
    roundToInteger

    /**
     * 지정된 플레이어의 현재 점수입니다.
     * 게임 모드가 개별 전투가 아닌 경우
     * 결과값은 0이 됩니다.
     */
    scoreOf

    /**
     * 지정된 각(단위: 도)의 사인 값입니다.
     */
    sineFromDegrees

    /**
     * 지정된 각(단위: RAD)의 사인 값입니다.
     */
    sineFromRadians

    /**
     * 지정된 플레이어의 슬롯 번호입니다.
     * 팀전에서 각 팀은 0에서 5개의 슬롯을 보유하며,
     * 개별 전투 게임에서 슬롯 수는 0에서 11까지입니다.
     */
    slotOf

    /**
     * 지정된 배열의 각 요소를 VALUE RANK에 따라 평가하고
     * 정렬해서 만든 새 배열 복사본입니다.
     */
    sortedArray

    /**
     * 플레이어의 현재 속도(초당 미터)입니다.
     */
    speedOf

    /**
     * 지정된 방향에서 플레이어의 현재 속도(초당 미터)입니다.
     */
    speedOfInDirection

    /**
     * 지정된 값의 제곱근입니다.
     */
    squareRoot

    /**
     * 선택한 텍스트와 지정된 값으로 구성된 텍스트입니다.
     */
    string

    /**
     * 두 숫자 또는 벡터의 차이입니다.
     */
    subtract

    /**
     * 지정된 각(단위: 도)의 탄젠트 값입니다.
     */
    tangentFromDegrees


    /**
     * 지정된 각(단위: RAD)의 탄젠트 값입니다.
     */
    tangentFromRadians

    /**
     * 팀 상수입니다. ALL 옵션은 팀전의 양팀,
     * 또는 개별 전투 게임의 모든 플레이어를 뜻합니다.
     */
    team

    /**
     * 해당 플레이어의 소속 팀입니다.
     * 게임 모드가 개별 전투인 경우 팀은 ALL로 간주됩니다.
     */
    teamOf

    /**
     * 지정된 팀의 현재 점수입니다.
     * 개별 전투 모드에서는 결과값이 0입니다.
     */
    teamScore

    /**
     * 한 플레이어의 방향 입력 정보입니다. 
     * X 구성요소가 횡방향 입력 정보(왼쪽이 양),
     * Z 구성 요소가 종방향 입력 정보(위쪽이 양)인 벡터로 표현됩니다.
     */
    throttleOf

    /**
     * 게임 인스턴스 생성 후 경과 시간(단위: 초)입니다.
     * (설정 및 전환 시간 포함)
     */
    totalTimeElapsed

    /**
     * TRUE의 부울 값입니다.
     */
    true

    /**
     * 플레이어의 현재 궁극기 충전량 비율입니다.
     */
    ultimateChargePercent

    /**
     * 위를 가리키는 방향 벡터(0, 1, 0)의 약칭입니다.
     */
    up

    /**
     * 한 배열의 지정된 요소에 있는 값입니다.
     * 대상 요소가 없는 경우 결과값은 0입니다.
     */
    valueInArray

    /**
     * 3개의 실수(X, Y, Z)로 이루어진 벡터입니다.
     * X는 좌측, Y는 위, Z는 전방을 의미합니다.
     * 벡터는 위치, 방향, 속도로 사용됩니다.
     */
    vector

    /**
     * 한 위치에서 다른 위치까지의 변위 벡터입니다.
     */
    vectorTowards

    /**
     * 플레이어의 현재 속도(벡터)입니다.
     * 해당 플레이어가 표면 위에 있는 경우,
     * 경사로를 오르 내린다고 해도 Y 구성요소 속도는 0입니다.
     */
    velocityOf

    /**
     * 지정된 방향 벡터의 대응하는 종축각(단위: 도)입니다.
     */
    verticalAngleFromDirection

    /**
     * 플레이어의 전방에서 지정된 위치까지의 종축각(단위: 도)입니다.
     * 이 값은 해당 위치가 플레이어 아래에 있는 경우 양수이며,
     * 그 외의 경우 0이거나 음수입니다.
     */
    verticalAngleTowards

    /**
     * 월드에 대해 상대적으로 플레이어가
     * 바라보고 있는 방향의 종축각(단위: 도)입니다.
     * 이 값은 플레이어가 내려다보는 경우 증가합니다.
     */
    verticalFacingAngleOf

    /**
     * 플레이어의 현재 종축 속도(초당 미터)입니다.
     * 여기에는 경사로를 오르내리는 등의 움직임 등
     * 모든 횡축 이동이 배제됩니다.
     */
    verticalSpeedOf

    /**
     * 이 규칙으로 처리된 이벤트로 인해 피해를 받은 플레이어입니다.
     * ATTACKER 또는 EVENT PLAYER와 동일할 수 있습니다.
     */
    victim

    /**
     * 제공된 로컬 좌표 벡터에 해당하는 월드 좌표 벡터입니다.
     */
    worldVectorOf

    /**
     * 지정된 벡터의 X 구성요소입니다.
     * 일반적으로 왼쪽 방향의 벡터량입니다.
     */
    xComponentOf
    
    /**
     * 지정된 벡터의 Y 구성요소입니다.
     * 일반적으로 왼쪽 방향의 벡터량입니다.
     */
    yComponentOf

    /**
     * 지정된 벡터의 Z 구성요소입니다.
     * 일반적으로 왼쪽 방향의 벡터량입니다.
     */
    zComponentOf

    
}

interface IActionType {
    /**
     * 액션 목록 실행을 중지합니다.
     */
    abort

    /**
     * 이 액션 조건이 TRUE일 때 액션 목록 실행을 중지합니다.
     * 그 외에 경우 다음 액션을 진행합니다.
     */
    abortIf

    /**
     * 조건 목록에 있는 조건 중
     * 하나 이상이 FALSE인 경우 액션 목록의 실행을 중지합니다.
     * 모든 조건이 TRUE인 경우 다음 액션을 진행합니다.
     */
    abortIfConditionsIsFalse
    
    /**
     * 조건 목록에 있는 조건 중
     * 하나 이상이 TRUE인 경우 액션 목록의 실행을 중지합니다.
     * 모든 조건이 FALSE인 경우 다음 액션을 진행합니다.
     */
    abortIfConditionsIsTrue

    /**
     * 플레이어에 대해 DISALLOW BUTTON 액션의 효과를 취소합니다.
     */
    allowButton

    /**
     * 플레이어의 움직임에 즉각적인 속도 변화를 줍니다.
     */
    applyImpulse
    
    /**
     * 지정된 플레이엉에게 보이도록 큰 메시지를 조준선 위쪽에 표시합니다.
     */
    bigMessage

    /**
     * 전역 변수 값을 지정된 비율로 점진적으로 수정합니다.
     * (전역 변수(GLOBAL VARIABLE)는 게임 자체에 종속된 변수입니다.)
     */
    chaseGlobalVariableAtRate
    
    /**
     * 전역 변수 값을 시간이 지남에 따라 점진적으로 수정합니다.
     * (전역 변수(GLOBAL VARIABLE)는 게임 자체에 종속된 변수입니다.)
     */
    chaseGlobalVariableOverTime

    /**
     * 플레이어 변수 값을 지정된 비율로 점진적으로 수정합니다.
     * (플레이어 변수(PLAYER VARIABLE)는 게임 자체에 종속된 변수입니다.)
     */
    chasePlayerVariableAtRate

    /**
     * 플레이어 변수 값을 시간의 경과에 따라 점진적으로 수정합니다.
     * (플레이어 변수(PLAYER VARIABLE)는 게임 자체에 종속된 변수입니다.)
     */
    chasePlayerVariableOverTime

    /**
     * SET STATUS 액션을 통해 플레이어에게 적용된 상태 하나를 제거합니다.
     */
    clearStatus

    /**
     * 플레이어가 감정 표현, 음성 대사,
     * 또는 기타 장착한 의사소통 수단을 사용하도록 합니다.
     */
    communicate

    /**
     * 월드 내에 효과 개체를 생성합니다.
     * 이 효과 개체는 제거하기 전까지 지속됩니다.
     * 이 효과를 참조하려면 LAST CREATED ENTITY 값을 사용하면 됩니다.
     * 개체가 너무 많이 생성될 경우 이 액션이 실패할 수 있습니다.
     */
    createEffect

    /**
     * 지정된 플레이어 화면의 지정된 위치에
     * 표시할 HUD 텍스트를 생성합니다.
     * 이 텍스트는 제거하기 전까지 지속됩니다.
     * 이 텍스트를 참조하려면
     * LAST TEXT ID 값을 사용하면 됩니다.
     * 텍스트 요소가 너무 많이 생성될 경우
     * 이 액션이 실패할 수 있습니다.
     */
    createHudText

    /**
     * 월드 내에 아이콘 개체를 생성합니다.
     * 이 아이콘 개체는 제거하기 전까지 지속됩니다.
     * 이 개체를 참조하려면
     * LAST CREATED ENTITY 값을 사용하면 됩니다.
     * 개체가 너무 많이 생성될 경우 이 액션이 실패할 수 있습니다.
     */
    createIcon

    /**
     * 월드의 지정된 위치에서 지정된 플레이어에게
     * 표시할 월드 내 텍스트를 생성합니다.
     * 이 텍스트는 제거하기 전까지 지속됩니다.
     * 이 텍스트를 참조하려면
     * LAST TEXT ID 값을 사용하면 됩니다.
     * 텍스트 요소가 너무 많이 생성된 경우 이 액션은 실패할 수 있습니다.
     */
    createInWorldtext

    /**
     * 플레이어에게 즉시 피해를 적용하며, 피해를 받은 대상이 죽을 수 있습니다.
     */
    damage

    /**
     * 경기를 즉시 무승부로 종료합니다.
     * 이 액션은 개별 전투 모드에서는 효과가 없습니다.
     */
    declareMatchDraw

    /**
     * 지정된 플레이어를 승자로 하여 경기를 즉시 종료합니다.
     * 이 액션은 개별 전투 모드에서만 효과가 있습니다.
     */
    declarePlayerVictory

    /**
     * 팀 하나를 현재 라운드의 승자로 설정합니다.
     * 쟁탈 및 섬멸전 게임 모드에서만 작동합니다.
     */
    declareRoundVictory

    /**
     * 지정된 팀을 승자로 하여 경기를 즉시 종료합니다.
     * 이 액션은 개별 전투 모드에서는 효과가 없습니다.
     */
    declareTeamVictory

    /**
     * CREATE EFFECT에 의해 생성된 모든 효과 개체를 제거합니다.
     */
    destoryAllEffects

    /**
     * CREATE HUD TEXT 액션에 의해 생성된 모든 HUD 텍스트를 제거합니다.
     */
    destoryAllHudText

    /**
     * CREATE ICON에 의해 생성된 모든 아이콘 개체를 제거합니다.
     */
    destroyAllIcons

    /**
     * CREATE IN-WORLD TEXT에 의해 생성된 월드 내 텍스트를 모두 제거합니다.
     */
    destroyAllInWorldText

    /**
     * CREATE EFFECT에 의해 생성된 효과 개체 하나를 제거합니다.
     */
    destroyEffect

    /**
     * CREATE HUD TEXT 액션에 의해 생성된 HUD 텍스트를 제거합니다.
     */
    destroyHudText

    /**
     * CREATE ICON에 의해 생성된 아이콘 개체를 제거합니다.
     */
    destroyIcon

    /**
     * CREATE IN-WORD TEXT에 의해 생성된 월드 내 텍스트를 제거합니다.
     */
    destroyInWorldText

    /**
     * 다시 사용하거나 경기가 종료될 때까지 아나운서의
     * 게임 모드 안내 음성을 사용하지 않도록 합니다.
     */
    disableBuiltInGameModeAnnouncer

    /**
     * 게임 모드 자체에서 경기 종료가 되지 않도록 합니다.
     * 스크립트 명령어로만 경기를 마칠 수 있도록 허용합니다.
     */
    disableBuiltInGameModeCompletion

    /**
     * 다시 사용하거나 경기가 종료될 때까지
     * 모든 게임 모드 음악을 사용하지 않도록 합니다.
     */
    disableBuiltInGameModeMusic

    /**
     * 플레이어에 대해 자동 부활 기능을 비활성화하고,
     * 스크립트 명령어를 통한 부활만 허용합니다.
     */
    disableBuiltInGameModeRespawning

    /**
     * 게임 모드 자체에서 플레이어 점수와 팀 점수를
     * 변경하지 못하도록 하며,
     * 스크립트 명령어로만 점수 변경이 가능하도록 합니다.
     */
    disableBuiltInGameModeScoring

    /**
     * 플레이어에 대한 ENABLE DEATH SPECTATE ALL PLAYERS
     * 액션의 효과를 취소합니다.
     */
    disableDeathSpectateAllPlayers

    /**
     * 플레이어를 대상으로 ENABLE DEATH SPECTATE TARGET HUD
     * 액션의 효과를 취소합니다.
     */
    disableDeathSpectateTargetHud

    /**
     * 플레이어가 논리적 버튼을 사용 못 하게 하여
     * 눌러도 아무 효과 없도록 합니다.
     */
    disallowButton

    /**
     * DISABLE BUILT-IN GAME MODE ANNOUNCER
     * 액션의 효과를 취소합니다.
     */
    enableBuiltInGameModeAnnouncer

    /**
     * DISABLE BUILT-IN GAME MODE COMPLETION
     * 액션의 효과를 취소합니다.
     */
    enableBuiltInGameMOdeCompletion

    /**
     * DISABLE BUILT-IN GAME MODE MUSIC
     * 액션의 효과를 취소합니다.
     */
    enableBuildInGameModeMusic

    /**
     * 플레이어에 대해 DISABLE BUILT-IN GAME MODE RESPAWNING
     * 액션의 효과를 취소합니다.
     */
    enableBuiltInGameModeRespawning

    /**
     * DISABLE BUILT-IN GAME MODE SCORING
     * 액션의 효과를 취소합니다.
     */
    enableBuiltInGameModeScoring
    
    /**
     * 플레이어 사망 시, 아군뿐 아니라
     * 모든 플레이어를 관전할 수 있도록 허용합니다.
     */
    enableDeathSpectateAllPlayers

    /**
     * 사망 후 관전 시 플레 자신의 HUD 대신
     * 관전 대상의 HUD를 볼 수 있습니다.
     */
    enableDeathSpecateTargetHud

    /**
     * 경기를 해당 게임 모드의 영웅 선택 단계로 되돌립니다.
     * 게임이 진행 중일 때만 작동합니다.
     */
    goToAssembleHeroes

    /**
     * 플레이어를 즉시 치유합니다.
     * 이 기능으로 죽은 플레이어가 부활하지는 않습니다.
     */
    heal

    /**
     * 플레이어를 즉시 처치합니다.
     */
    kill

    /**
     * 액션 목록을 처음부터 다시 시작합니다.
     * 무한 반복을 방지하려면 액션 목록의 시작과
     * 이 액션 사이에 WAIT 액션을 실행해야 합니다.
     */
    loop

    /**
     * 이 액션의 조건이 TRUE인 경우
     * 액션 목록을 처음부터 다시 시작합니다.
     * FALSE인 경우 다음 액션을 진행합니다.
     * 무한 반복을 방지하려면 액션 목록의 시작과
     * 이 액션 사이에 WAIT 액션을 실행해야 합니다.
     */
    loopIf

    /**
     * 조건 목록의 조건이 하나라도 FALSE인 경우
     * 액션 목록을 처음부터 다시 시작합니다.
     * 모두 TRUE인 경우 다음 액션을 진행합니다.
     * 무한 반복을 방지하려면 액션 목록의 시작과
     * 이 액션 사이에 WAIT 액션을 실행해야 합니다.
     */
    loopIfConditionIsFalse

    /**
     * 조건 목록의 조건이 하나라도 TRUE인 경우
     * 액션 목록을 처음부터 다시 시작합니다.
     * 모두 FALSE인 경우 다음 액션을 진행합니다.
     * 무한 반복을 방지하려면 액션 목록의 시작과
     * 이 액션 사이에 WAIT 액션을 실행해야 합니다.
     */
    loopIfConditionIsTrue

    /**
     * 게임 자체에 종속된 전역 변수 값을 수정합니다.
     */
    modifyGlobalVariable

    /**
     * 인덱스에서 게임 자체에 종속된 전역 변수 값을 수정합니다.
     */
    modifyGlobalVariableAtIndex

    /**
     * 플레이어의 점수(처치수)를 수정합니다.
     * 이 액션은 개별 전투 모드에서만 효과가 있습니다.
     */
    modifyPlayerScore

    /**
     * 지정된 플레이어가 가진 플레이어 변수 값을 수정합니다.
     */
    modifyPlayerVariable

    /**
     * 인덱스에서 지정된 플레이어가 가진 플레이어 변수 값을 수정합니다.
     */
    modifyPlayerVaraibleAtIndex

    /**
     * 한 팀 또는 두 팀 모두의 점수를 수정합니다.
     * 이 액션은 개별 전투 모드나 팀 점수가
     * 존재하지 않는 모드에서는 효과가 없습니다.
     */
    modifyTeamScore

    /**
     * 경기 시간을 일시정지합니다.
     * 플레이어, 목표 로직, 게임 모드 진행 기준 등은
     * 일시정지의 영향을 받지 않습니다.
     */
    pauseMatchTime

    /**
     * 월드의 한 위치에 효과를 발생시킵니다.
     * 이 효과는 갱신되거나 제거할 필요 없도록
     * 짧게 유지되었다가 사라집니다.
     */
    playEffect

    /**
     * 지정된 플레이어의 스킨을 사용하여,
     * 지정된 영웅을 메모리에서 허용하는 만큼 먼저 불러옵니다.
     * 빠르게 영웅을 바꿀 수 있으며,
     * 다음 영웅을 알고 있는 경우 유용합니다.
     */
    preloadHero

    /**
     * 플레이어에 대해 한 프레임 동안 가상으로
     * 버튼 하나를 누르도록 강제합니다.
     */
    pressButton

    /**
     * 플레이어가 사용할 수 있는 영웅 목록을
     * 게임 설정에 지정한 대로 복원합니다.
     * 플레이어의 현재 영웅을 더 이상 사용할 수 없게 되면
     * 플레이어는 강제로 다른 영웅을 선택하여
     * 적절한 생성 지점에서 부활합니다.
     */
    resetPlayerHeroAvalability

    /**
     * 플레이어의 생존 여부와 관계 없이,
     * 플레이어를 적절한 생성 지점에서
     * 최대 생명력으로 부활시킵니다.
     */
    respawn

    /**
     * 전환 없이 플레이어를 사망한 자리에서 즉시 부활시킵니다.
     */
    resurrect

    /**
     * 플레이어의 기술1 활성화 여부를 설정합니다.
     */
    setAbility1Enabled

    /**
     * 플레이어의 기술2 활성화 여부를 설정합니다.
     */
    setAbility2Enabled

    /**
     * 플레이어의 조준 속도를 일반 조준 속도 대비 % 비율로 설정합니다.
     */
    setAimSpeed

    /**
     * 플레이어가 주는 피해를 순수 피해량 대비 % 비율로 설정합니다.
     */
    setDamageDealt
    
    /**
     * 플레이어가 받는 피해를 순수 피해량 대비 % 비율로 설정합니다.
     */
    setDamageReceived

    /**
     * 플레이어가 지정된 방향을 바라보도록 설정합니다.
     */
    setFacing

    /**
     * 게임 자체에 속한 전역 변수에 값을 저장합니다.
     */
    setGlobalVariable

    /**
     * 게임 자체에 종속된 전역 변수의
     * 배열을 찾거나 생성한 후,
     * 값 하나를 배열의 특정 인덱스에 저장합니다.
     */
    setGlobalVariableAtIndex

    /**
     * 플레이어의 이동 중력을 일반 이동 중력 대비 % 비율로 설정합니다.
     */
    setGravity

    /**
     * 플레이어가 주는 치유량을 순수 치유량 대비 % 비율로 설정합니다.
     */
    setHealingDealt

    /**
     * 플레이어가 받는 치유량을 순수 치유량 대비 % 비율로 설정합니다.
     */
    setHealingReceived

    /**
     * 플레이어를 다른 모든 플레이어
     * 또는 적에게만 보이지 않게 합니다.
     */
    setInvisible

    /**
     * (화면 상단에 표시되는) 현재 경기 시간을 설정합니다.
     * 이를 통해 경기 지속시간을 조정하거나
     * 영웅 선택 또는 준비 시간을 변경할 수 있습니다.
     */
    setMatchTime
    
    /**
     * 플레이어의 최대 생명력을 순수 생명력 대비 % 비율로 설정합니다.
     * 이 액션을 수행하면 플레이어의 현재 생명력이
     * 새로운 최대 생명력 수치를 넘지 않게 됩니다.
     */
    setMaxHealth

    /**
     * 플레이어의 이동 속도를 순수 이동 속도 대비 % 비율로 설정합니다.
     */
    setMoveSpeed

    /**
     * 일반적으로 지정된 플레이어에게 목표를 알려주기 위해,
     * 화면 중앙 상단에 텍스트가 표시되도록 설정합니다.
     */
    setObjectiveDescription

    /**
     * 플레이어가 사용할 수 있는 영웅 목록을 설정합니다.
     * 플레이어의 현재 영웅을 더 이상 사용할 수 없게 되면
     * 플레이어는 강제로 다른 영웅을 선택하여
     * 적절한 생성 지점에서 부활합니다.
     */
    setPlayerAllowedHeroes

    /**
     * 플레이어의 점수(처치수)를 설정합니다.
     * 이 액션은 개별 전투 모드에서만 효과가 있습니다.
     */
    setPlayerScore

    /**
     * 지정된 플레이어에 속한 플레이어 변수에 값 하나를 저장합니다.
     */
    setPlayerVariable

    /**
     * 한 플레이어에 종속된 플레이어 변수의 배열을 찾거나 생성한 후,
     * 값 하나를 배열의 특정 인덱스에 저장합니다.
     */
    setPlayerVariableIndex

    /**
     * 플레이어의 기본 발사 활성화 여부를 설정합니다.
     */
    setPrimaryFireEnabled

    /**
     * 플레이어의 투사체 중력을
     * 일반 투사체 중력의 지정된 비율로 설정합니다.
     */
    setProjectileGravity

    /**
     * 플레이어의 투사체 속도를
     * 일반 투사체 속도의 지정된 비율로 설정합니다.
     */
    setProjectileSpeed

    /**
     * 플레이어의 사망에서 부활 사이의 시간을 설정합니다.
     * 이 액션 실행 시점에서 이미 사망한 플레이어의 경우
     * 변경사항이 다음 사망 시부터 적용됩니다.
     */
    setRespawnMaxTime

    /**
     * 플레이어의 보조 발사 활성화 여부를 설정합니다.
     */
    setSecondaryFireEnabled

    /**
     * 모든 플레이어, 투사체, 효과, 게임 모드 로직 등
     * 게임 전체를 대상으로 하여 시뮬레이션 비율을 설정합니다.
     */
    setSlowMotion

    /**
     * 지정된 상태를 플레이어에게 적용합니다.
     * 이 상태는 지정된 지속 시간 동안,
     * 또는 CLEAR STATUS 액션에 의해
     * 제거될 때까지 유지됩니다.
     */
    setStatus

    /**
     * 한 팀 또는 두 팀 모두의 점수를 설정합니다.
     * 이 액션은 개별 전투 모드나 팀 점수가
     * 존재하지 않는 모드에서는 효과가 없습니다.
     */
    setTeamScore

    /**
     * 플레이어의 궁극기 활성화 여부를 설정합니다.
     */
    setUltimateAbilityEnabled

    /**
     * 플레이어의 궁극기 충전량을 최대 충전량의 비율로 설정합니다.
     */
    setUltimateCharge

    /**
     * 액션 목록에 있는 지정된 수의 액션을 건너뜁니다.
     */
    skip

    /**
     * 이 액션의 조건이 TRUE일 때,
     * 액션 목록에 있는 지정된 수만큼의 액션을 건너뜁니다.
     * 이 외의 경우 다음 액션으로 진행합니다.
     */
    skipIf

    /**
     * 지정된 플레이어에게 보이도록
     * 작은 메시지를 조준선 아래에 표시합니다.
     */
    smallMessage

    /**
     * 플레이어를 지정된 방향으로 가속하기 시작합니다.
     */
    startAccelerating

    /**
     * 카메라가 지정된 방향을 바라보도록 하여 배치합니다.
     */
    startCamera

    /**
     * DAMAGER가 RECEIVER에게 주는 피해를 수정하기 시작합니다.
     * 이 DAMAGE MODIFICATION을 참조하려면
     * LAST DAMAGE MODIFICATION ID 값을 사용하십시오.
     * DAMAGE MODIFICATION이 너무 많은 경우
     * 이 액션은 실패할 수 있습니다.
     */
    startDamageModification

    /**
     * DAMAGE OVER TIME (DOT) 인스턴스를 시작합니다.
     * 이 DOT는 지정된 지속 시간 동안 또는 스크립트에 의해
     * 중지될 때까지 유지됩니다.
     * 이 DAMAGE OVER TIME에 대한 참조를 얻으려면
     * LAST DAMAGE OVER TIME ID 값을 사용하십시오.
     */
    startDamageOverTime

    /**
     * 플레이어를 지정된 방향을 향해 회전시킵니다.
     */
    startFacing

    /**
     * 플레이어를 대상으로 지정된 영웅을 강제 선택하도록 하며,
     * 필요시 현재 위치에 즉시 부활시킵니다.
     * 이 영웅은 STOP FORCING PLAYER TO BE HERO
     * 액션이 실행되기 전까지 해당 플레이어가
     * 유일하게 사용할 수 있는 영웅입니다.
     */
    startForcingPlayerToBeHero

    /**
     * 지정된 게임 모드에서 원래 사용되는 전투준비실인지완는 관계없이,
     * 팀을 지정된 전투준비실에 강제로 생성합니다.
     * 이 액션은 점령, 점령/호위, 호위 전장에서만 효과가 있습니다.
     */
    startForcingSpawnRoom

    /**
     * 플레이어의 최대 및 최소 이동 수치를 정의합니다.
     * 강제 이동되거나 이동이 제한될 수 있습니다.
     */
    startForcingThrottle

    /**
     * HEAL OVER TIME 인스턴스를 시작합니다.
     * 이 HEAL OVER TIME은 지정된 지속 시간이 경과하거나
     * 스크립트에 의해 중지되기 전까지 유지됩니다.
     * 이 HEAL OVER TIME을 참조하려면
     * LAST HEAL OVER TIME ID 값을 사용하십시오.
     */
    startHealOverTime

    /**
     * STOP HOLDING BUTTON 액션에 의해 중지되기 전까지
     * 가상으로 버튼하나를 누르도록 플레이어에게 강제합니다.
     */
    startHoldingButton

    ///////////////////////////////////////////////
    ///////////////////////////////////////////////
    ///////////////////////////////////////////////
    ///////////////////////////////////////////////
    ///////////////////////////////////////////////
    /**
     * 플레이어를 대상으로 START ACCELERATING
     * 액션에 의해 시작된 가속을 중지합니다.
     */
    stopAccelerating

    /**
     * START DAMAGE MODIFICATION 액션으로
     * 시작된 모든 DAMAGE MODIFCATION을 중지합니다.
     */
    stopAllDamageModification

    /**
     * 플레이어를 대상으로 START DAMAGE OVER TIME 액션에 의해
     * 시작된 모든 DAMAGE OVER TIME을 중지합니다.
     */
    stopAllDamageOverTime

    /**
     * 플레이어를 대상으로 START HEAL OVER TIME 액션에 의해
     * 시작된 모든 HEAL OVER TIME을 중지합니다.
     */
    stopAllHealOverTime

    stopCamera

    /**
     * 진행 중인 전역 변수 추적을 중지하고
     * 해당 변수의 현재 값을 그대로 유지합니다.
     */
    stopChasingGlobalVariable

    /**
     * 진행 중인 플레이어 변수 추적을 중지하고
     * 해당 변수의 현재 값을 그대로 유지합니다.
     */
    stopChasingPlayerVariable

    /**
     * START DAMAGE MODIFICATION 액션으로
     * 시작된 DAMAGE MODIFICATION 하나를 중지합니다.
     */
    stopDamageModification

    /**
     * START DAMAGE OVER TIME 액션에 의해 시작된
     * DAMAGE OVER TIME 인스턴스를 중지합니다.
     */
    stopDamageOverTime

    /**
     * 플레이어에 대해 START FACING 액션에 의해 시작된 회전을 중지합니다.
     */
    stopFacing

    /**
     * 플레이어에 대해 지정된 영웅 강제 선택 지정을 중지합니다.
     * 이를 통해 플레이어가 부활하지는 않지만,
     * 이후부터 영웅 선택을 할 수 있게 됩니다.
     */
    stopForcingPlayerToBeHero

    /**
     * 지정된 팀에 대한 START FORCING SPAWN ROOM
     * 액션의 효과를 취소합니다.
     */
    stopForcingSpawnRoom

    /**
     * 플레이어에 대해 START FORCING THROTTLE
     * 액션의 효과를 취소합니다.
     */
    stopForcingThrottle

    /**
     * START HEAL OVER TIME 액션에 의해 시작된
     * HEAL OVER TIME 인스턴스를 중지합니다.
     */
    stopHealOverTime

    /**
     * 플레이어를 대상으로 한 START HOLDING BUTTON
     * 액션의 효과를 취소합니다.
     */
    stopHoldingButton

    /**
     * 플레이어를 지정 위치로 순간이동시킵니다.
     */
    teleport

    /**
     * 일시정지된 경기시간을 재개합니다.
     */
    unpauseMatchTime

    /**
     * 액션 목록 실행을 일시정지합니다. WAIT이 중지되지 않는 한,
     * 나머지 액션은 일시정지 해제 후 실행됩니다.
     */
    wait
}


/**
 * 
 * @description
 * 아래부터 인터페이스 세부 구성이 진행됩니다.
 * 
 */


/**
 * 게임 시작 시 이 Rule의 개별 인스턴스 하나를 생성합니다.
 * 이 인스턴스는 게임이 지속되는 동안 활성화되어 있습니다.
 * 
 * - 이 인스턴스는 게임이 지속되는 동안 활성화되어 있으므로
 *   Condition 을 만족하거나 만족하지 않을 수 있습니다.
 *   Condition을 처음 만족할 때 Action을 실행 합니다.
 * 
 * - Condition 목록을 만족하지 못했다가 만족한다면,
 *   Action을 다시 실행하려 할 것입니다.
 */
interface IOngoingGlobal {

}

/**
 * 플레이어가 게임에 참여하면각 플레이어마다 이 Rule의 인스턴스가 생성됩니다.
 * 이 인스턴스는 해당 플레이어가 게임을 떠나거나, 게임이 끝날 때까지 활성화되어 있습니다.
 * 각 인스턴스는 개별적으로 Condition과 Action을 추적하고 실행합니다.
 * 
 * - 플레이어가 게임에 남아있는 한 인스턴스가 지속되므로
 *   Condition을 만족할 수도, 그렇지 않을 수도 있습니다.
 *   Condition을 처음 만족하면Action을 실행합니다.
 * 
 * - Condition 목록을 만족하지 못했다가 만족한다면,
 *   Action을 다시 실행하려 할 것입니다.
 */
interface IOngoingEachPlayer {

}

/**
 * 플레이어 한 명이 처치를 달성할 때마다 Rule을 실행합니다.
 * 이 Rule은 특정 플레이어를 대상으로 한 번에 하나의 인스턴스만 활성화합니다.
 * 
 * - 플레이어 한 명이 누군가를 처치하면 Condition을 확인합니다.
 *   모든 Condition을 만족하면 Action이 실행되지만, 
 *   하나라도 만족하지 않으면 실행되지 않습니다.
 */
interface IPlayerEarnedElimination {

}
   
/**
 * 플레이어 한 명이 결정타를 날릴 때마다 Rule을 실행합니다.
 * 이 Rule은 특정 플레이어를 대상으로 한 번에 하나의 인스턴스만 활성화합니다.
 * 
 * - 플레이어가 결정타로 피해를 입히면 Condition을 확인합니다.
 *   모든 Condition을 만족하면 Action이 실행되지만,
 *   하나라도 만족하지 않으면 실행되지 않습니다.
 */
interface IPlayerDealtFinalBlow {

}

/**
 * 플레이어 한 명이 피해를 받을 때마다 Rule을 실행합니다.
 * 이 Rule은 특정 플레이어를 대상으로 한 번에 하나의 인스턴스만 활성화합니다.
 * 
 * - 플레이어가 적에게서 피해를 받으면 Condition을 확인합니다.
 *   모든 Condition을 만족하면Action이 실행되지만,
 *   하나라도 만족하지 않으면 실행되지 않습니다.
 */
interface IPlayerTookDamage {

}

/**
 * 플레이어 한 명이 사망할 때마다 Rule을 실행합니다.
 * 이 Rule은 특정 플레이어를 대상으로 한 번에 하나의 인스턴스만 활성화합니다.
 * 
 * - 플레이어가 사망하면 Condition을 확인합니다.
 *   모든 Condition을 만족할 때 Action이 실행되지만,
 *   하나라도 만족하지 않으면 Action이 실행되지 않습니다.
 */
interface IPlayerDied {

}

interface IEventTeamType {
    /**
     * 개별 전투 모드의 플레이어를 포함한 모든 팀에 Event가 적용됩니다.
     */
    all

    /**
     * 이 팀의 구성원에게만 Event가 적용됩니다.
     */
    team1

    /**
     * 이 팀의 구성원에게만 Event가 적용됩니다.
     */
    team2
}
