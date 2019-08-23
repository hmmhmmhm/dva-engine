import {
    IAbort,
    IAbortIf,
    IAbortIfConditionsIsFalse,
    IAbortIfConditionsIsTrue,
    IAllowButton,
    IApplyImpluse,
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
    IDestroyAllEffects,
    IDestroyAllHudText,
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
    IEnableBuiltInGameModeMusic,
    IEnableBuiltInGameModeRespawning,
    IEnableBuiltInGameModeScoring,
    IEnableDeathSpectateAllPlayers,
    IEnableDeathSpectateTargetHud,
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
    IModifyPlayerVariableAtIndex,
    IModifyTeamScore,
    IPauseMatchTime,
    IPlayEffect,
    IPreloadHero,
    IPressButton,
    IResetPlayerHeroAvailability,
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
    ISetPlayerVariableAtIndex,
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
    IStartTransformingThrottle,
    IStopTransformingThrottle,
    ICreateDummyBot,
    IDestroyDummyBot,
    IDestroyAllDummyBot,
    IStartThrottleInDirection,
    IStopThrottleInDirection,
    ICreateBeamEffect,
} from './child'
import { ISetPlayerScore } from './child/setPlayerScore'

export interface IAction {
    /**
     * {0}
     */
    abort: IAbort

    /**
     * {1}
     */
    abortIf: IAbortIf

    /**
     * {2}
     */
    abortIfConditionsIsFalse: IAbortIfConditionsIsFalse

    /**
     * {3}
     */
    abortIfConditionsIsTrue: IAbortIfConditionsIsTrue

    /**
     * {4}
     */
    allowButton: IAllowButton

    /**
     * {5}
     */
    applyImpluse: IApplyImpluse
    
    /**
     * {6}
     */
    bigMessage: IBigMessage

    /**
     * {7}
     */
    chaseGlobalVariableAtRate: IChaseGlobalVariableAtRate
    
    /**
     * {8}
     */
    chaseGlobalVariableOverTime: IChaseGlobalVariableOverTime

    /**
     * {9}
     */
    chasePlayerVariableAtRate: IChasePlayerVariableAtRate

    /**
     * {10}
     */
    chasePlayerVariableOverTime: IChasePlayerVariableOverTime

    /**
     * {11}
     */
    clearStatus: IClearStatus

    /**
     * {12}
     */
    communicate: ICommunicate

    /**
     * {13}
     */
    createEffect: ICreateEffect

    /**
     * {14}
     */
    createHudText: ICreateHudText

    /**
     * {15}
     */
    createIcon: ICreateIcon

    /**
     * {16}
     */
    createInWorldText: ICreateInWorldText

    /**
     * {17}
     */
    damage: IDamage

    /**
     * {18}
     */
    declareMatchDraw: IDeclareMatchDraw

    /**
     * {19}
     */
    declarePlayerVictory: IDeclarePlayerVictory

    /**
     * {20}
     */
    declareRoundVictory: IDeclareRoundVictory

    /**
     * {21}
     */
    declareTeamVictory: IDeclareTeamVictory

    /**
     * {22}
     */
    destroyAllEffects: IDestroyAllEffects

    /**
     * {23}
     */
    destroyAllHudText: IDestroyAllHudText

    /**
     * {24}
     */
    destroyAllIcons: IDestroyAllIcons

    /**
     * {25}
     */
    destroyAllInWorldText: IDestroyAllInWorldText

    /**
     * {26}
     */
    destroyEffect: IDestroyEffect

    /**
     * {27}
     */
    destroyHudText: IDestroyHudText

    /**
     * {28}
     */
    destroyIcon: IDestroyIcon

    /**
     * {29}
     */
    destroyInWorldText: IDestroyInWorldText

    /**
     * {30}
     */
    disableBuiltInGameModeAnnouncer: IDisableBuiltInGameModeAnnouncer

    /**
     * {31}
     */
    disableBuiltInGameModeCompletion: IDisableBuiltInGameModeCompletion

    /**
     * {32}
     */
    disableBuiltInGameModeMusic: IDisableBuiltInGameModeMusic

    /**
     * {33}
     */
    disableBuiltInGameModeRespawning: IDisableBuiltInGameModeRespawning

    /**
     * {34}
     */
    disableBuiltInGameModeScoring: IDisableBuiltInGameModeScoring

    /**
     * {35}
     */
    disableDeathSpectateAllPlayers: IDisableDeathSpectateAllPlayers

    /**
     * {36}
     */
    disableDeathSpectateTargetHud: IDisableDeathSpectateTargetHud

    /**
     * {37}
     */
    disallowButton: IDisallowButton

    /**
     * {38}
     */
    enableBuiltInGameModeAnnouncer: IEnableBuiltInGameModeAnnouncer

    /**
     * {39}
     */
    enableBuiltInGameModeCompletion: IEnableBuiltInGameModeCompletion

    /**
     * {40}
     */
    enableBuiltInGameModeMusic: IEnableBuiltInGameModeMusic

    /**
     * {41}
     */
    enableBuiltInGameModeRespawning: IEnableBuiltInGameModeRespawning

    /**
     * {42}
     */
    enableBuiltInGameModeScoring: IEnableBuiltInGameModeScoring
    
    /**
     * {43}
     */
    enableDeathSpectateAllPlayers: IEnableDeathSpectateAllPlayers

    /**
     * {44}
     */
    enableDeathSpectateTargetHud: IEnableDeathSpectateTargetHud

    /**
     * {45}
     */
    goToAssembleHeroes: IGoToAssembleHeroes

    /**
     * {46}
     */
    heal: IHeal

    /**
     * {47}
     */
    kill: IKill

    /**
     * {48}
     */
    loop: ILoop

    /**
     * {49}
     */
    loopIf: ILoopIf

    /**
     * {50}
     */
    loopIfConditionIsFalse: ILoopIfConditionIsFalse

    /**
     * {51}
     */
    loopIfConditionIsTrue: ILoopIfConditionIsTrue

    /**
     * {52}
     */
    modifyGlobalVariable: IModifyGlobalVariable

    /**
     * {53}
     */
    modifyGlobalVariableAtIndex: IModifyGlobalVariableAtIndex

    /**
     * {54}
     */
    modifyPlayerScore: IModifyPlayerScore

    /**
     * {55}
     */
    modifyPlayerVariable: IModifyPlayerVariable

    /**
     * {56}
     */
    modifyPlayerVariableAtIndex: IModifyPlayerVariableAtIndex

    /**
     * {57}
     */
    modifyTeamScore: IModifyTeamScore

    /**
     * {58}
     */
    pauseMatchTime: IPauseMatchTime

    /**
     * {59}
     */
    playEffect: IPlayEffect

    /**
     * {60}
     */
    preloadHero: IPreloadHero

    /**
     * {61}
     */
    pressButton: IPressButton

    /**
     * {62}
     */
    resetPlayerHeroAvailability: IResetPlayerHeroAvailability

    /**
     * {63}
     */
    respawn: IRespawn

    /**
     * {64}
     */
    resurrect: IResurrect

    /**
     * {65}
     */
    setAbility1Enabled: ISetAbility1Enabled

    /**
     * {66}
     */
    setAbility2Enabled: ISetAbility2Enabled

    /**
     * {67}
     */
    setAimSpeed: ISetAimSpeed

    /**
     * {68}
     */
    setDamageDealt: ISetDamageDealt
    
    /**
     * {69}
     */
    setDamageReceived: ISetDamageReceived

    /**
     * {70}
     */
    setFacing: ISetFacing

    /**
     * {71}
     */
    setGlobalVariable: ISetGlobalVariable

    /**
     * {72}
     */
    setGlobalVariableAtIndex: ISetGlobalVariableAtIndex

    /**
     * {73}
     */
    setGravity: ISetGravity

    /**
     * {74}
     */
    setHealingDealt: ISetHealingDealt

    /**
     * {75}
     */
    setHealingReceived: ISetHealingReceived

    /**
     * {76}
     */
    setInvisible: ISetInvisible

    /**
     * {77}
     */
    setMatchTime: ISetMatchTime
    
    /**
     * {78}
     */
    setMaxHealth: ISetMaxHealth

    /**
     * {79}
     */
    setMoveSpeed: ISetMoveSpeed

    /**
     * {80}
     */
    setObjectiveDescription: ISetObjectiveDescription

    /**
     * {81}
     */
    setPlayerAllowedHeroes: ISetPlayerAllowedHeroes

    /**
     * {82}
     */
    setPlayerScore: ISetPlayerScore

    /**
     * {83}
     */
    setPlayerVariable: ISetPlayerVariable

    /**
     * {84}
     */
    setPlayerVariableAtIndex: ISetPlayerVariableAtIndex

    /**
     * {85}
     */
    setPrimaryFireEnabled: ISetPrimaryFireEnabled

    /**
     * {86}
     */
    setProjectileGravity: ISetProjectileGravity

    /**
     * {87}
     */
    setProjectileSpeed: ISetProjectileSpeed

    /**
     * {88}
     */
    setRespawnMaxTime: ISetRespawnMaxTime

    /**
     * {89}
     */
    setSecondaryFireEnabled: ISetSecondaryFireEnabled

    /**
     * {90}
     */
    setSlowMotion: ISetSlowMotion

    /**
     * {91}
     */
    setStatus: ISetStatus

    /**
     * {92}
     */
    setTeamScore: ISetTeamScore

    /**
     * {93}
     */
    setUltimateAbilityEnabled: ISetUltimateAbilityEnabled

    /**
     * {94}
     */
    setUltimateCharge: ISetUltimateCharge

    /**
     * {95}
     */
    skip: ISkip

    /**
     * {96}
     */
    skipIf: ISkipIf

    /**
     * {97}
     */
    smallMessage: ISmallMessage

    /**
     * {98}
     */
    startAccelerating: IStartAccelerating

    /**
     * {99}
     */
    startCamera: IStartCamera

    /**
     * {100}
     */
    startDamageModification: IStartDamageModification

    /**
     * {101}
     */
    startDamageOverTime: IStartDamageOverTime

    /**
     * {102}
     */
    startFacing: IStartFacing

    /**
     * {103}
     */
    startForcingPlayerToBeHero: IStartForcingPlayerToBeHero

    /**
     * {104}
     */
    startForcingSpawnRoom: IStartForcingSpawnRoom

    /**
     * {105}
     */
    startForcingThrottle: IStartForcingThrottle

    /**
     * {106}
     */
    startHealOverTime: IStartHealOverTime

    /**
     * {107}
     */
    startHoldingButton: IStartHoldingButton

    /**
     * {108}
     */
    stopAccelerating: IStopAccelerating

    /**
     * {109}
     */
    stopAllDamageModifications: IStopAllDamageModifications

    /**
     * {110}
     */
    stopAllDamageOverTime: IStopAllDamageOverTime

    /**
     * {111}
     */
    stopAllHealOverTime: IStopAllHealOverTime

    /**
     * {112}
     */
    stopCamera: IStopCamera

    /**
     * {113}
     */
    stopChasingGlobalVariable: IStopChasingGlobalVariable

    /**
     * {114}
     */
    stopChasingPlayerVariable: IStopChasingPlayerVariable

    /**
     * {115}
     */
    stopDamageModification: IStopDamageModification

    /**
     * {116}
     */
    stopDamageOverTime: IStopDamageOverTime

    /**
     * {117}
     */
    stopFacing: IStopFacing

    /**
     * {118}
     */
    stopForcingPlayerToBeHero: IStopForcingPlayerToBeHero

    /**
     * {119}
     */
    stopForcingSpawnRoom: IStopForcingSpawnRoom

    /**
     * {120}
     */
    stopForcingThrottle: IStopForcingThrottle

    /**
     * {121}
     */
    stopHealOverTime: IStopHealOverTime

    /**
     * {122}
     */
    stopHoldingButton: IStopHoldingButton

    /**
     * {123}
     */
    teleport: ITeleport

    /**
     * {124}
     */
    unpauseMatchTime: IUnpauseMatchTime

    /**
     * {125}
     */
    wait: IWait

    /**
     * {717}
     */
    startTransformingThrottle: IStartTransformingThrottle

    /**
     * {722}
     */
    stopTransformingThrottle: IStopTransformingThrottle

    /**
     * {728}
     */
    createDummyBot: ICreateDummyBot

    /**
     * {734}
     */
    destroyDummyBot: IDestroyDummyBot

    /**
     * {737}
     */
    destroyAllDummyBot: IDestroyAllDummyBot

    /**
     * {738}
     */
    startThrottleInDirection: IStartThrottleInDirection

    /**
     * {745}
     */
    stopThrottleInDirection: IStopThrottleInDirection

    /**
     * {747}
     */
    createBeamEffect: ICreateBeamEffect
}