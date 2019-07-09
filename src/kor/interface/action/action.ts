import {
    IAbort,
    IAbortIf,
    IAbortIfConditionsIsFalse,
    IAbortIfConditionsIsTrue,
    IAllowButton,
    IApplyImpulse,
    IBigMessage,
    IChaseGlobalVariableAtRate,
    IChaseGlobalVariableOverTime,
    IChasePlayerVariableAtRate,
    IChasePlayerVariableOverTime,
    IClearStatus,
    ICommunicate,
    ICreateEffect,
    ICreateHudText,
    ICreateIcon,
    ICreateInWorldText,
    IDamage,
    IDeclareMatchDraw,
    IDeclarePlayerVictory,
    IDeclareRoundVictory,
    IDeclareTeamVictory,
    IDestoryAllEffects,
    IDestoryAllHudText,
    IDestroyAllIcons,
    IDestroyAllInWorldText,
    IDestroyEffect,
    IDestroyHudText,
    IDestroyIcon,
    IDestroyInWorldText,
    IDisableBuiltInGameModeAnnouncer,
    IDisableBuiltInGameModeCompletion,
    IDisableBuiltInGameModeMusic,
    IDisableBuiltInGameModeRespawning,
    IDisableBuiltInGameModeScoring,
    IDisableDeathSpectateAllPlayers,
    IDisableDeathSpectateTargetHud,
    IDisallowButton,
    IEnableBuiltInGameModeAnnouncer,
    IEnableBuiltInGameModeCompletion,
    IEnableBuildInGameModeMusic,
    IEnableBuiltInGameModeRespawning,
    IEnableBuiltInGameModeScoring,
    IEnableDeathSpectateAllPlayers,
    IEnableDeathSpecateTargetHud,
    IGoToAssembleHeroes,
    IHeal,
    IKill,
    ILoop,
    ILoopIf,
    ILoopIfConditionIsFalse,
    ILoopIfConditionIsTrue,
    IModifyGlobalVariable,
    IModifyGlobalVariableAtIndex,
    IModifyPlayerScore,
    IModifyPlayerVariable,
    IModifyPlayerVaraibleAtIndex,
    IModifyTeamScore,
    IPauseMatchTime,
    IPlayEffect,
    IPreloadHero,
    IPressButton,
    IResetPlayerHeroAvalability,
    IRespawn,
    IResurrect,
    ISetAbility1Enabled,
    ISetAbility2Enabled,
    ISetAimSpeed,
    ISetDamageDealt,
    ISetDamageReceived,
    ISetFacing,
    ISetGlobalVariable,
    ISetGlobalVariableAtIndex,
    ISetGravity,
    ISetHealingDealt,
    ISetHealingReceived,
    ISetInvisible,
    ISetMatchTime,
    ISetMaxHealth,
    ISetMoveSpeed,
    ISetObjectiveDescription,
    ISetPlayerAllowedHeroes,
    ISetPlayerVariable,
    ISetPlayerVariableIndex,
    ISetPrimaryFireEnabled,
    ISetProjectileGravity,
    ISetProjectileSpeed,
    ISetRespawnMaxTime,
    ISetSecondaryFireEnabled,
    ISetSlowMotion,
    ISetStatus,
    ISetTeamScore,
    ISetUltimateAbilityEnabled,
    ISetUltimateCharge,
    ISkip,
    ISkipIf,
    ISmallMessage,
    IStartAccelerating,
    IStartCamera,
    IStartDamageModification,
    IStartDamageOverTime,
    IStartFacing,
    IStartForcingPlayerToBeHero,
    IStartForcingSpawnRoom,
    IStartForcingThrottle,
    IStartHealOverTime,
    IStartHoldingButton,
    IStopAccelerating,
    IStopAllDamageModifications,
    IStopAllDamageOverTime,
    IStopAllHealOverTime,
    IStopCamera,
    IStopChasingGlobalVariable,
    IStopChasingPlayerVariable,
    IStopDamageModification,
    IStopDamageOverTime,
    IStopFacing,
    IStopForcingPlayerToBeHero,
    IStopForcingSpawnRoom,
    IStopForcingThrottle,
    IStopHealOverTime,
    IStopHoldingButton,
    ITeleport,
    IUnpauseMatchTime,
    IWait,
} from './child'
import { ISetPlayerScore } from './child/setPlayerScore'

export interface IAction {
    /**
     * 액션 목록 실행을 중지합니다.
     */
    abort: IAbort

    /**
     * 이 액션 조건이 TRUE일 때 액션 목록 실행을 중지합니다.
     * 그 외에 경우 다음 액션을 진행합니다.
     */
    abortIf: IAbortIf

    /**
     * 조건 목록에 있는 조건 중
     * 하나 이상이 FALSE인 경우 액션 목록의 실행을 중지합니다.
     * 모든 조건이 TRUE인 경우 다음 액션을 진행합니다.
     */
    abortIfConditionsIsFalse: IAbortIfConditionsIsFalse

    /**
     * 조건 목록에 있는 조건 중
     * 하나 이상이 TRUE인 경우 액션 목록의 실행을 중지합니다.
     * 모든 조건이 FALSE인 경우 다음 액션을 진행합니다.
     */
    abortIfConditionsIsTrue: IAbortIfConditionsIsTrue

    /**
     * 플레이어에 대해 DISALLOW BUTTON 액션의 효과를 취소합니다.
     */
    allowButton: IAllowButton

    /**
     * 플레이어의 움직임에 즉각적인 속도 변화를 줍니다.
     */
    applyImpulse: IApplyImpulse
    
    /**
     * 지정된 플레이엉에게 보이도록
     * 큰 메시지를 조준선 위쪽에 표시합니다.
     */
    bigMessage: IBigMessage

    /**
     * 전역 변수 값을 지정된 비율로
     * 점진적으로 수정합니다.
     * (전역 변수(GLOBAL VARIABLE)는
     * 게임 자체에 종속된 변수입니다.)
     */
    chaseGlobalVariableAtRate: IChaseGlobalVariableAtRate
    
    /**
     * 전역 변수 값을 시간이 지남에
     * 따라 점진적으로 수정합니다.
     * (전역 변수(GLOBAL VARIABLE)는
     * 게임 자체에 종속된 변수입니다.)
     */
    chaseGlobalVariableOverTime: IChaseGlobalVariableOverTime

    /**
     * 플레이어 변수 값을 지정된
     * 비율로 점진적으로 수정합니다.
     * (플레이어 변수(PLAYER VARIABLE)는
     * 게임 자체에 종속된 변수입니다.)
     */
    chasePlayerVariableAtRate: IChasePlayerVariableAtRate

    /**
     * 플레이어 변수 값을 시간의
     * 경과에 따라 점진적으로 수정합니다.
     * (플레이어 변수(PLAYER VARIABLE)는
     * 게임 자체에 종속된 변수입니다.)
     */
    chasePlayerVariableOverTime: IChasePlayerVariableOverTime

    /**
     * SET STATUS 액션을 통해
     * 플레이어에게 적용된
     * 상태 하나를 제거합니다.
     */
    clearStatus: IClearStatus

    /**
     * 플레이어가 감정 표현, 음성 대사,
     * 또는 기타 장착한 의사소통
     * 수단을 사용하도록 합니다.
     */
    communicate: ICommunicate

    /**
     * 월드 내에 효과 개체를 생성합니다.
     * 이 효과 개체는 제거하기 전까지 지속됩니다.
     * 이 효과를 참조하려면
     * LAST CREATED ENTITY 값을 사용하면 됩니다.
     * 개체가 너무 많이 생성될 경우
     * 이 액션이 실패할 수 있습니다.
     */
    createEffect: ICreateEffect

    /**
     * 지정된 플레이어 화면의 지정된 위치에
     * 표시할 HUD 텍스트를 생성합니다.
     * 이 텍스트는 제거하기 전까지 지속됩니다.
     * 이 텍스트를 참조하려면
     * LAST TEXT ID 값을 사용하면 됩니다.
     * 텍스트 요소가 너무 많이 생성될 경우
     * 이 액션이 실패할 수 있습니다.
     */
    createHudText: ICreateHudText

    /**
     * 월드 내에 아이콘 개체를 생성합니다.
     * 이 아이콘 개체는 제거하기 전까지 지속됩니다.
     * 이 개체를 참조하려면
     * LAST CREATED ENTITY 값을 사용하면 됩니다.
     * 개체가 너무 많이 생성될 경우
     * 이 액션이 실패할 수 있습니다.
     */
    createIcon: ICreateIcon

    /**
     * 월드의 지정된 위치에서 지정된 플레이어에게
     * 표시할 월드 내 텍스트를 생성합니다.
     * 이 텍스트는 제거하기 전까지 지속됩니다.
     * 이 텍스트를 참조하려면
     * LAST TEXT ID 값을 사용하면 됩니다.
     * 텍스트 요소가 너무 많이 생성된 경우 이 액션은 실패할 수 있습니다.
     */
    createInWorldText: ICreateInWorldText

    /**
     * 플레이어에게 즉시 피해를 적용하며,
     * 피해를 받은 대상이 죽을 수 있습니다.
     */
    damage: IDamage

    /**
     * 경기를 즉시 무승부로 종료합니다.
     * 이 액션은 개별 전투 모드에서는 효과가 없습니다.
     */
    declareMatchDraw: IDeclareMatchDraw

    /**
     * 지정된 플레이어를 승자로 하여 경기를 즉시 종료합니다.
     * 이 액션은 개별 전투 모드에서만 효과가 있습니다.
     */
    declarePlayerVictory: IDeclarePlayerVictory

    /**
     * 팀 하나를 현재 라운드의 승자로 설정합니다.
     * 쟁탈 및 섬멸전 게임 모드에서만 작동합니다.
     */
    declareRoundVictory: IDeclareRoundVictory

    /**
     * 지정된 팀을 승자로 하여 경기를 즉시 종료합니다.
     * 이 액션은 개별 전투 모드에서는 효과가 없습니다.
     */
    declareTeamVictory: IDeclareTeamVictory

    /**
     * CREATE EFFECT에 의해 생성된
     * 모든 효과 개체를 제거합니다.
     */
    destoryAllEffects: IDestoryAllEffects

    /**
     * CREATE HUD TEXT 액션에 의해
     * 생성된 모든 HUD 텍스트를 제거합니다.
     */
    destoryAllHudText: IDestoryAllHudText

    /**
     * CREATE ICON에 의해 생성된
     * 모든 아이콘 개체를 제거합니다.
     */
    destroyAllIcons: IDestroyAllIcons

    /**
     * CREATE IN-WORLD TEXT에 의해
     * 생성된 월드 내 텍스트를 모두 제거합니다.
     */
    destroyAllInWorldText: IDestroyAllInWorldText

    /**
     * CREATE EFFECT에 의해 생성된
     * 효과 개체 하나를 제거합니다.
     */
    destroyEffect: IDestroyEffect

    /**
     * CREATE HUD TEXT 액션에 의해
     * 생성된 HUD 텍스트를 제거합니다.
     */
    destroyHudText: IDestroyHudText

    /**
     * CREATE ICON에 의해 생성된
     * 아이콘 개체를 제거합니다.
     */
    destroyIcon: IDestroyIcon

    /**
     * CREATE IN-WORD TEXT에 의해
     * 생성된 월드 내 텍스트를 제거합니다.
     */
    destroyInWorldText: IDestroyInWorldText

    /**
     * 다시 사용하거나 경기가
     * 종료될 때까지 아나운서의
     * 게임 모드 안내 음성을
     * 사용하지 않도록 합니다.
     */
    disableBuiltInGameModeAnnouncer: IDisableBuiltInGameModeAnnouncer

    /**
     * 게임 모드 자체에서 경기
     * 종료가 되지 않도록 합니다.
     * 스크립트 명령어로만 경기를
     * 마칠 수 있도록 허용합니다.
     */
    disableBuiltInGameModeCompletion: IDisableBuiltInGameModeCompletion

    /**
     * 다시 사용하거나
     * 경기가 종료될 때까지
     * 모든 게임 모드 음악을
     * 사용하지 않도록 합니다.
     */
    disableBuiltInGameModeMusic: IDisableBuiltInGameModeMusic

    /**
     * 플레이어에 대해 자동
     * 부활 기능을 비활성화하고,
     * 스크립트 명령어를 통한
     * 부활만 허용합니다.
     */
    disableBuiltInGameModeRespawning: IDisableBuiltInGameModeRespawning

    /**
     * 게임 모드 자체에서
     * 플레이어 점수와 팀 점수를
     * 변경하지 못하도록 하며,
     * 스크립트 명령어로만
     * 점수 변경이 가능하도록 합니다.
     */
    disableBuiltInGameModeScoring: IDisableBuiltInGameModeScoring

    /**
     * 플레이어에 대한
     * ENABLE DEATH SPECTATE ALL PLAYERS
     * 액션의 효과를 취소합니다.
     */
    disableDeathSpectateAllPlayers: IDisableDeathSpectateAllPlayers

    /**
     * 플레이어를 대상으로
     * ENABLE DEATH SPECTATE TARGET HUD
     * 액션의 효과를 취소합니다.
     */
    disableDeathSpectateTargetHud: IDisableDeathSpectateTargetHud

    /**
     * 플레이어가 논리적 버튼을
     * 사용 못 하게 하여 눌러도
     * 아무 효과 없도록 합니다.
     */
    disallowButton: IDisallowButton

    /**
     * DISABLE BUILT-IN GAME MODE ANNOUNCER
     * 액션의 효과를 취소합니다.
     */
    enableBuiltInGameModeAnnouncer: IEnableBuiltInGameModeAnnouncer

    /**
     * DISABLE BUILT-IN GAME MODE COMPLETION
     * 액션의 효과를 취소합니다.
     */
    enableBuiltInGameModeCompletion: IEnableBuiltInGameModeCompletion

    /**
     * DISABLE BUILT-IN GAME MODE MUSIC
     * 액션의 효과를 취소합니다.
     */
    enableBuildInGameModeMusic: IEnableBuildInGameModeMusic

    /**
     * 플레이어에 대해
     * DISABLE BUILT-IN GAME MODE RESPAWNING
     * 액션의 효과를 취소합니다.
     */
    enableBuiltInGameModeRespawning: IEnableBuiltInGameModeRespawning

    /**
     * DISABLE BUILT-IN GAME MODE SCORING
     * 액션의 효과를 취소합니다.
     */
    enableBuiltInGameModeScoring: IEnableBuiltInGameModeScoring
    
    /**
     * 플레이어 사망 시,
     * 아군뿐 아니라 모든 플레이어를
     * 관전할 수 있도록 허용합니다.
     */
    enableDeathSpectateAllPlayers: IEnableDeathSpectateAllPlayers

    /**
     * 사망 후 관전 시
     * 플레이어 자신의 HUD 대신
     * 관전 대상의 HUD를 볼 수 있습니다.
     */
    enableDeathSpecateTargetHud: IEnableDeathSpecateTargetHud

    /**
     * 경기를 해당 게임 모드의
     * 영웅 선택 단계로 되돌립니다.
     * 게임이 진행 중일 때만 작동합니다.
     */
    goToAssembleHeroes: IGoToAssembleHeroes

    /**
     * 플레이어를 즉시 치유합니다.
     * 이 기능으로 죽은 플레이어가
     * 부활하지는 않습니다.
     */
    heal: IHeal

    /**
     * 플레이어를 즉시 처치합니다.
     */
    kill: IKill

    /**
     * 액션 목록을 처음부터 다시 시작합니다.
     * 무한 반복을 방지하려면 액션 목록의 시작과
     * 이 액션 사이에 WAIT 액션을 실행해야 합니다.
     */
    loop: ILoop

    /**
     * 이 액션의 조건이 TRUE인 경우
     * 액션 목록을 처음부터 다시 시작합니다.
     * FALSE인 경우 다음 액션을 진행합니다.
     * 무한 반복을 방지하려면 액션 목록의 시작과
     * 이 액션 사이에 WAIT 액션을 실행해야 합니다.
     */
    loopIf: ILoopIf

    /**
     * 조건 목록의 조건이 하나라도 FALSE인 경우
     * 액션 목록을 처음부터 다시 시작합니다.
     * 모두 TRUE인 경우 다음 액션을 진행합니다.
     * 무한 반복을 방지하려면 액션 목록의 시작과
     * 이 액션 사이에 WAIT 액션을 실행해야 합니다.
     */
    loopIfConditionIsFalse: ILoopIfConditionIsFalse

    /**
     * 조건 목록의 조건이 하나라도 TRUE인 경우
     * 액션 목록을 처음부터 다시 시작합니다.
     * 모두 FALSE인 경우 다음 액션을 진행합니다.
     * 무한 반복을 방지하려면 액션 목록의 시작과
     * 이 액션 사이에 WAIT 액션을 실행해야 합니다.
     */
    loopIfConditionIsTrue: ILoopIfConditionIsTrue

    /**
     * 게임 자체에 종속된
     * 전역 변수 값을 수정합니다.
     */
    modifyGlobalVariable: IModifyGlobalVariable

    /**
     * 인덱스에서 게임 자체에
     * 종속된 전역 변수 값을 수정합니다.
     */
    modifyGlobalVariableAtIndex: IModifyGlobalVariableAtIndex

    /**
     * 플레이어의 점수(처치수)를 수정합니다.
     * 이 액션은 개별 전투
     * 모드에서만 효과가 있습니다.
     */
    modifyPlayerScore: IModifyPlayerScore

    /**
     * 지정된 플레이어가 가진 플레이어 변수 값을 수정합니다.
     */
    modifyPlayerVariable: IModifyPlayerVariable

    /**
     * 인덱스에서 지정된 플레이어가
     * 가진 플레이어 변수 값을 수정합니다.
     */
    modifyPlayerVaraibleAtIndex: IModifyPlayerVaraibleAtIndex

    /**
     * 한 팀 또는 두 팀 모두의 점수를 수정합니다.
     * 이 액션은 개별 전투 모드나 팀 점수가
     * 존재하지 않는 모드에서는 효과가 없습니다.
     */
    modifyTeamScore: IModifyTeamScore

    /**
     * 경기 시간을 일시정지합니다.
     * 플레이어, 목표 로직, 게임 모드 진행 기준 등은
     * 일시정지의 영향을 받지 않습니다.
     */
    pauseMatchTime: IPauseMatchTime

    /**
     * 월드의 한 위치에 효과를 발생시킵니다.
     * 이 효과는 갱신되거나 제거할 필요 없도록
     * 짧게 유지되었다가 사라집니다.
     */
    playEffect: IPlayEffect

    /**
     * 지정된 플레이어의 스킨을 사용하여,
     * 지정된 영웅을 메모리에서
     * 허용하는 만큼 먼저 불러옵니다.
     * 빠르게 영웅을 바꿀 수 있으며,
     * 다음 영웅을 알고 있는 경우 유용합니다.
     */
    preloadHero: IPreloadHero

    /**
     * 플레이어에 대해
     * 한 프레임 동안
     * 가상으로 버튼 하나를
     * 누르도록 강제합니다.
     */
    pressButton: IPressButton

    /**
     * 플레이어가 사용할 수 있는 영웅 목록을
     * 게임 설정에 지정한 대로 복원합니다.
     * 플레이어의 현재 영웅을 더 이상 사용할 수 없게 되면
     * 플레이어는 강제로 다른 영웅을 선택하여
     * 적절한 생성 지점에서 부활합니다.
     */
    resetPlayerHeroAvalability: IResetPlayerHeroAvalability

    /**
     * 플레이어의 생존 여부와 관계 없이,
     * 플레이어를 적절한 생성 지점에서
     * 최대 생명력으로 부활시킵니다.
     */
    respawn: IRespawn

    /**
     * 전환 없이 플레이어를
     * 사망한 자리에서 즉시 부활시킵니다.
     */
    resurrect: IResurrect

    /**
     * 플레이어의 기술1 활성화 여부를 설정합니다.
     */
    setAbility1Enabled: ISetAbility1Enabled

    /**
     * 플레이어의 기술2 활성화 여부를 설정합니다.
     */
    setAbility2Enabled: ISetAbility2Enabled

    /**
     * 플레이어의 조준 속도를
     * 일반 조준 속도 대비
     * % 비율로 설정합니다.
     */
    setAimSpeed: ISetAimSpeed

    /**
     * 플레이어가 주는 피해를
     * 순수 피해량 대비
     * % 비율로 설정합니다.
     */
    setDamageDealt: ISetDamageDealt
    
    /**
     * 플레이어가 받는 피해를
     * 순수 피해량 대비
     * % 비율로 설정합니다.
     */
    setDamageReceived: ISetDamageReceived

    /**
     * 플레이어가 지정된 방향을
     * 바라보도록 설정합니다.
     */
    setFacing: ISetFacing

    /**
     * 게임 자체에 속한
     * 전역 변수에 값을 저장합니다.
     */
    setGlobalVariable: ISetGlobalVariable

    /**
     * 게임 자체에 종속된 전역 변수의
     * 배열을 찾거나 생성한 후,
     * 값 하나를 배열의
     * 특정 인덱스에 저장합니다.
     */
    setGlobalVariableAtIndex: ISetGlobalVariableAtIndex

    /**
     * 플레이어의 이동 중력을
     * 일반 이동 중력 대비
     * % 비율로 설정합니다.
     */
    setGravity: ISetGravity

    /**
     * 플레이어가 주는 치유량을
     * 순수 치유량 대비
     * % 비율로 설정합니다.
     */
    setHealingDealt: ISetHealingDealt

    /**
     * 플레이어가 받는 치유량을
     * 순수 치유량 대비
     * % 비율로 설정합니다.
     */
    setHealingReceived: ISetHealingReceived

    /**
     * 플레이어를 다른
     * 모든 플레이어 또는
     * 적에게만 보이지 않게 합니다.
     */
    setInvisible: ISetInvisible

    /**
     * (화면 상단에 표시되는)
     * 현재 경기 시간을 설정합니다.
     * 이를 통해 경기 지속시간을
     * 조정하거나 영웅 선택 또는
     * 준비 시간을 변경할 수 있습니다.
     */
    setMatchTime: ISetMatchTime
    
    /**
     * 플레이어의 최대
     * 생명력을 순수 생명력 대비
     * % 비율로 설정합니다.
     * 이 액션을 수행하면
     * 플레이어의 현재 생명력이
     * 새로운 최대 생명력 수치를
     * 넘지 않게 됩니다.
     */
    setMaxHealth: ISetMaxHealth

    /**
     * 플레이어의 이동 속도를
     * 순수 이동 속도 대비
     * % 비율로 설정합니다.
     */
    setMoveSpeed: ISetMoveSpeed

    /**
     * 일반적으로 지정된 플레이어에게
     * 목표를 알려주기 위해,
     * 화면 중앙 상단에 텍스트가
     * 표시되도록 설정합니다.
     */
    setObjectiveDescription: ISetObjectiveDescription

    /**
     * 플레이어가 사용할 수 있는
     * 영웅 목록을 설정합니다.
     * 플레이어의 현재 영웅을
     * 더 이상 사용할 수 없게 되면
     * 플레이어는 강제로
     * 다른 영웅을 선택하여
     * 적절한 생성 지점에서 부활합니다.
     */
    setPlayerAllowedHeroes: ISetPlayerAllowedHeroes

    /**
     * 플레이어의 점수
     * (처치수)를 설정합니다.
     * 이 액션은 개별 전투
     * 모드에서만 효과가 있습니다.
     */
    setPlayerScore: ISetPlayerScore

    /**
     * 지정된 플레이어에
     * 속한 플레이어 변수에
     * 값 하나를 저장합니다.
     */
    setPlayerVariable: ISetPlayerVariable

    /**
     * 한 플레이어에 종속된
     * 플레이어 변수의 배열을
     * 찾거나 생성한 후,
     * 값 하나를 배열의
     * 특정 인덱스에 저장합니다.
     */
    setPlayerVariableIndex: ISetPlayerVariableIndex

    /**
     * 플레이어의 기본 발사
     * 활성화 여부를 설정합니다.
     */
    setPrimaryFireEnabled: ISetPrimaryFireEnabled

    /**
     * 플레이어의 투사체 중력을
     * 일반 투사체 중력의
     * 지정된 비율로 설정합니다.
     */
    setProjectileGravity: ISetProjectileGravity

    /**
     * 플레이어의 투사체 속도를
     * 일반 투사체 속도의
     * 지정된 비율로 설정합니다.
     */
    setProjectileSpeed: ISetProjectileSpeed

    /**
     * 플레이어의 사망에서
     * 부활 사이의 시간을 설정합니다.
     * 이 액션 실행 시점에서
     * 이미 사망한 플레이어의 경우
     * 변경사항이 다음
     * 사망 시부터 적용됩니다.
     */
    setRespawnMaxTime: ISetRespawnMaxTime

    /**
     * 플레이어의 보조 발사
     * 활성화 여부를 설정합니다.
     */
    setSecondaryFireEnabled: ISetSecondaryFireEnabled

    /**
     * 모든 플레이어, 투사체,
     * 효과, 게임 모드 로직 등
     * 게임 전체를 대상으로 하여
     * 시뮬레이션 비율을 설정합니다.
     */
    setSlowMotion: ISetSlowMotion

    /**
     * 지정된 상태를 플레이어에게 적용합니다.
     * 이 상태는 지정된 지속 시간 동안,
     * 또는 CLEAR STATUS 액션에 의해
     * 제거될 때까지 유지됩니다.
     */
    setStatus: ISetStatus

    /**
     * 한 팀 또는 두 팀
     * 모두의 점수를 설정합니다.
     * 이 액션은 개별
     * 전투 모드나 팀 점수가
     * 존재하지 않는
     * 모드에서는 효과가 없습니다.
     */
    setTeamScore: ISetTeamScore

    /**
     * 플레이어의 궁극기
     * 활성화 여부를 설정합니다.
     */
    setUltimateAbilityEnabled: ISetUltimateAbilityEnabled

    /**
     * 플레이어의 궁극기 충전량을
     * 최대 충전량의 비율로 설정합니다.
     */
    setUltimateCharge: ISetUltimateCharge

    /**
     * 액션 목록에 있는
     * 지정된 수의 액션을 건너뜁니다.
     */
    skip: ISkip

    /**
     * 이 액션의 조건이 TRUE일 때,
     * 액션 목록에 있는 지정된
     * 수만큼의 액션을 건너뜁니다.
     * 이 외의 경우 다음 액션으로 진행합니다.
     */
    skipIf: ISkipIf

    /**
     * 지정된 플레이어에게
     * 보이도록 작은 메시지를
     * 조준선 아래에 표시합니다.
     */
    smallMessage: ISmallMessage

    /**
     * 플레이어를 지정된 방향으로
     * 가속하기 시작합니다.
     */
    startAccelerating: IStartAccelerating

    /**
     * 카메라가 지정된 방향을
     * 바라보도록 하여 배치합니다.
     */
    startCamera: IStartCamera

    /**
     * DAMAGER가 RECEIVER에게
     * 주는 피해를 수정하기 시작합니다.
     * 이 DAMAGE MODIFICATION을 참조하려면
     * LAST DAMAGE MODIFICATION ID 값을 사용하십시오.
     * DAMAGE MODIFICATION이 너무 많은 경우
     * 이 액션은 실패할 수 있습니다.
     */
    startDamageModification: IStartDamageModification

    /**
     * DAMAGE OVER TIME (DOT)
     * 인스턴스를 시작합니다.
     * 이 DOT는 지정된 지속 시간 동안
     * 또는 스크립트에 의해
     * 중지될 때까지 유지됩니다.
     * 이 DAMAGE OVER TIME에
     * 대한 참조를 얻으려면
     * LAST DAMAGE OVER TIME ID
     * 값을 사용하십시오.
     */
    startDamageOverTime: IStartDamageOverTime

    /**
     * 플레이어를 지정된
     * 방향을 향해 회전시킵니다.
     */
    startFacing: IStartFacing

    /**
     * 플레이어를 대상으로 지정된 영웅을 강제 선택하도록 하며,
     * 필요시 현재 위치에 즉시 부활시킵니다.
     * 이 영웅은 STOP FORCING PLAYER TO BE HERO
     * 액션이 실행되기 전까지 해당 플레이어가
     * 유일하게 사용할 수 있는 영웅입니다.
     */
    startForcingPlayerToBeHero: IStartForcingPlayerToBeHero

    /**
     * 지정된 게임 모드에서 원래 사용되는
     * 전투준비실인지와는 관계없이,
     * 팀을 지정된 전투준비실에 강제로 생성합니다.
     * 이 액션은 점령, 점령/호위,
     * 호위 전장에서만 효과가 있습니다.
     */
    startForcingSpawnRoom: IStartForcingSpawnRoom

    /**
     * 플레이어의 최대 및
     * 최소 이동 수치를 정의합니다.
     * 강제 이동되거나 이동이
     * 제한될 수 있습니다.
     */
    startForcingThrottle: IStartForcingThrottle

    /**
     * HEAL OVER TIME 인스턴스를 시작합니다.
     * 이 HEAL OVER TIME은 지정된 지속 시간이 경과하거나
     * 스크립트에 의해 중지되기 전까지 유지됩니다.
     * 이 HEAL OVER TIME을 참조하려면
     * LAST HEAL OVER TIME ID 값을 사용하십시오.
     */
    startHealOverTime: IStartHealOverTime

    /**
     * STOP HOLDING BUTTON
     * 액션에 의해 중지되기 전까지
     * 가상으로 버튼하나를 누르도록
     * 플레이어에게 강제합니다.
     */
    startHoldingButton: IStartHoldingButton

    /**
     * 플레이어를 대상으로
     * START ACCELERATING
     * 액션에 의해 시작된
     * 가속을 중지합니다.
     */
    stopAccelerating: IStopAccelerating

    /**
     * START DAMAGE MODIFICATION 액션으로
     * 시작된 모든 DAMAGE MODIFCATION을 중지합니다.
     */
    stopAllDamageModifications: IStopAllDamageModifications

    /**
     * 플레이어를 대상으로
     * START DAMAGE OVER TIME
     * 액션에 의해 시작된 모든
     * DAMAGE OVER TIME을 중지합니다.
     */
    stopAllDamageOverTime: IStopAllDamageOverTime

    /**
     * 플레이어를 대상으로
     * START HEAL OVER TIME
     * 액션에 의해 시작된 모든
     * HEAL OVER TIME을 중지합니다.
     */
    stopAllHealOverTime: IStopAllHealOverTime

    /**
     * @TODO
     * Umm Blizard..?
     * Seems like doesn't exist description?
     */
    stopCamera: IStopCamera

    /**
     * 진행 중인 전역 변수 추적을 중지하고
     * 해당 변수의 현재 값을 그대로 유지합니다.
     */
    stopChasingGlobalVariable: IStopChasingGlobalVariable

    /**
     * 진행 중인 플레이어 변수 추적을 중지하고
     * 해당 변수의 현재 값을 그대로 유지합니다.
     */
    stopChasingPlayerVariable: IStopChasingPlayerVariable

    /**
     * START DAMAGE MODIFICATION 액션으로
     * 시작된 DAMAGE MODIFICATION 하나를 중지합니다.
     */
    stopDamageModification: IStopDamageModification

    /**
     * START DAMAGE OVER TIME 액션에 의해 시작된
     * DAMAGE OVER TIME 인스턴스를 중지합니다.
     */
    stopDamageOverTime: IStopDamageOverTime

    /**
     * 플레이어에 대해 START FACING
     * 액션에 의해 시작된 회전을 중지합니다.
     */
    stopFacing: IStopFacing

    /**
     * 플레이어에 대해 지정된 영웅
     * 강제 선택 지정을 중지합니다.
     * 이를 통해 플레이어가 부활하지는 않지만,
     * 이후부터 영웅 선택을 할 수 있게 됩니다.
     */
    stopForcingPlayerToBeHero: IStopForcingPlayerToBeHero

    /**
     * 지정된 팀에 대한
     * START FORCING SPAWN ROOM
     * 액션의 효과를 취소합니다.
     */
    stopForcingSpawnRoom: IStopForcingSpawnRoom

    /**
     * 플레이어에 대해
     * START FORCING THROTTLE
     * 액션의 효과를 취소합니다.
     */
    stopForcingThrottle: IStopForcingThrottle

    /**
     * START HEAL OVER TIME
     * 액션에 의해 시작된
     * HEAL OVER TIME
     * 인스턴스를 중지합니다.
     */
    stopHealOverTime: IStopHealOverTime

    /**
     * 플레이어를 대상으로 한
     * START HOLDING BUTTON
     * 액션의 효과를 취소합니다.
     */
    stopHoldingButton: IStopHoldingButton

    /**
     * 플레이어를 지정 위치로
     * 순간이동시킵니다.
     */
    teleport: ITeleport

    /**
     * 일시정지된 경기시간을 재개합니다.
     */
    unpauseMatchTime: IUnpauseMatchTime

    /**
     * 액션 목록 실행을 일시정지합니다.
     * WAIT이 중지되지 않는 한,
     * 나머지 액션은 일시정지 해제 후 실행됩니다.
     */
    wait: IWait
}