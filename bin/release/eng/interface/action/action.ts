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
} from './child'
import { ISetPlayerScore } from './child/setPlayerScore'

export interface IAction {
    /**
     * Stops execution of the action list.
     */
    abort: IAbort

    /**
     * Stops execution of the action list if the
     * action’s condition evaluates to true, if
     * it does not, the execution continues with
     * the next action.
     */
    abortIf: IAbortIf

    /**
     * Stops execution of the action list if at
     * least one condition in the condition list
     * is false. If all conditions are true, execution
     * continues with the next action.
     */
    abortIfConditionsIsFalse: IAbortIfConditionsIsFalse

    /**
     * Stops execution of the action list if all
     * conditions in the condition list is true.
     * If any are false, execution continues with
     * the next action.
     */
    abortIfConditionsIsTrue: IAbortIfConditionsIsTrue

    /**
     * Undoes the effect of the disallow button
     * action for one or more players.
     */
    allowButton: IAllowButton

    /**
     * Applies an instantaneous change in velocity
     * to the movement of one or more players.
     */
    applyImpluse: IApplyImpluse
    
    /**
     * Displays a large message above the reticle
     * that is visible to specific players.
     */
    bigMessage: IBigMessage

    /**
     * Gradually modifies the value of a global
     * variable at a specific rate. (A global variable
     * is a variable that belongs to the game itself.)
     */
    chaseGlobalVariableAtRate: IChaseGlobalVariableAtRate
    
    /**
     * Gradually modifies the value of a global
     * variable over time. (A global variable is
     * a variable that belongs to the game itself.)
     */
    chaseGlobalVariableOverTime: IChaseGlobalVariableOverTime

    /**
     * Gradually modifies the value of a player
     * variable at a specific rate. (A player variable
     * is a variable that belongs to a specific player.)
     */
    chasePlayerVariableAtRate: IChasePlayerVariableAtRate

    /**
     * Gradually modifies the value of a player
     * variable over time. (A player variable is
     * a variable that belongs to a specific player.)
     */
    chasePlayerVariableOverTime: IChasePlayerVariableOverTime

    /**
     * Clears a status that was applied from a
     * set status action from one or more players.
     */
    clearStatus: IClearStatus

    /**
     * Causes one or more players to use an emote,
     * voice line, or other equipped communication.
     */
    communicate: ICommunicate

    /**
     * Creates an in-world effect entity. This
     * effect entity will persist until destroyed,
     * to obtain a reference to this entity, use
     * the last created entity value. This action
     * will fail if too many entities have been created.
     */
    createEffect: ICreateEffect

    /**
     * Creates HUD text visible to specific players
     * at specific location on the screen. This
     * text will persist until destroyed. To obtain
     * a reference to this text, use the last text
     * ID value. This action will fail if too many
     * text elements have been created.
     */
    createHudText: ICreateHudText

    /**
     * Creates an in-world entity. This icon entity
     * will persist until destroyed. To obtain
     * a reference to this entity, use the last
     * created entity value. This action will fail
     * if too many entities have been created.
     */
    createIcon: ICreateIcon

    /**
     * Creates in-world text visible to specific
     * players at specific position in the world.
     * This text will persist until destroyed.
     * To obtain a reference to this text, use
     * the last text ID value. This action will
     * fail if too many text elements have been created.
     */
    createInWorldText: ICreateInWorldText

    /**
     * Applies instantaneous damage to one or more
     * players, possibly killing the players.
     */
    damage: IDamage

    /**
     * Instantly ends the match in a draw. This
     * action has no effect in free-for-all modes.
     */
    declareMatchDraw: IDeclareMatchDraw

    /**
     * Instantly ends the match with the specific
     * player as the winner. This action only has
     * an effect in free-for-all modes.
     */
    declarePlayerVictory: IDeclarePlayerVictory

    /**
     * Declare a team as the current round winner.
     * This only works in the control and elimination game modes.
     */
    declareRoundVictory: IDeclareRoundVictory

    /**
     * Instantly ends the match with the specified
     * team as the winner. This action has no effect
     * in free-for-all modes.
     */
    declareTeamVictory: IDeclareTeamVictory

    /**
     * Destroys all effect entities created by create effect.
     */
    destroyAllEffects: IDestroyAllEffects

    /**
     * Destroys all hud text that was created by
     * the create hud text action.
     */
    destroyAllHudText: IDestroyAllHudText

    /**
     * Destroys all icon entities created by create icon.
     */
    destroyAllIcons: IDestroyAllIcons

    /**
     * Destroys all in-world text created by the
     * create in-world effect.
     */
    destroyAllInWorldText: IDestroyAllInWorldText

    /**
     * Destroys an effect entity that was created
     * by create effect.
     */
    destroyEffect: IDestroyEffect

    /**
     * Destroys hud text that was created by create hud text.
     */
    destroyHudText: IDestroyHudText

    /**
     * Destroys an icon entity that was created by create icon.
     */
    destroyIcon: IDestroyIcon

    /**
     * Destroys in-world text that was created
     * by create in-world text.
     */
    destroyInWorldText: IDestroyInWorldText

    /**
     * Disables game mode announcements from the
     * announcer until reenabled or the match ends.
     */
    disableBuiltInGameModeAnnouncer: IDisableBuiltInGameModeAnnouncer

    /**
     * Disables completion of the match from the
     * game mode itself, only allowing the match
     * to be completed by scripting commands.
     */
    disableBuiltInGameModeCompletion: IDisableBuiltInGameModeCompletion

    /**
     * Disables all game-mode music until reenabled
     * or the match ends.
     */
    disableBuiltInGameModeMusic: IDisableBuiltInGameModeMusic

    /**
     * Disables automatic respawning for one or
     * more players, only allowing respawning by
     * scripting commands.
     */
    disableBuiltInGameModeRespawning: IDisableBuiltInGameModeRespawning

    /**
     * Disables changes to player and team scores
     * from the game mode itself, only allowing
     * scores to be changed by scripting commands.
     */
    disableBuiltInGameModeScoring: IDisableBuiltInGameModeScoring

    /**
     * Undoes the effect of the enable death spectate
     * all players action for one or more players.
     */
    disableDeathSpectateAllPlayers: IDisableDeathSpectateAllPlayers

    /**
     * Undoes the effect of the enable death spectate
     * target hud action for one or more players.
     */
    disableDeathSpectateTargetHud: IDisableDeathSpectateTargetHud

    /**
     * Disables a logical button for one or more
     * players such that pressing it has no effect.
     */
    disallowButton: IDisallowButton

    /**
     * Undoes the effect of the disable built-in
     * game mode announcer action.
     */
    enableBuiltInGameModeAnnouncer: IEnableBuiltInGameModeAnnouncer

    /**
     * Undoes the effect of the disable built-in
     * game mode completion action.
     */
    enableBuiltInGameModeCompletion: IEnableBuiltInGameModeCompletion

    /**
     * Undoes the effect of the disable built-in
     * game mode music action.
     */
    enableBuiltInGameModeMusic: IEnableBuiltInGameModeMusic

    /**
     * Undoes the effect of the disable built-in
     * game mode respawning for one or more players.
     */
    enableBuiltInGameModeRespawning: IEnableBuiltInGameModeRespawning

    /**
     * Undoes the effect of the disable built-in
     * game mode scoring action.
     */
    enableBuiltInGameModeScoring: IEnableBuiltInGameModeScoring
    
    /**
     * Allows one or more players to spectate all
     * players when dead, as opposed to only allies.
     */
    enableDeathSpectateAllPlayers: IEnableDeathSpectateAllPlayers

    /**
     * Allows one or more players to see their
     * target’s HUD when dead instead of their
     * own while death spectating.
     */
    enableDeathSpectateTargetHud: IEnableDeathSpectateTargetHud

    /**
     * Go to the assemble heroes phase of the game
     * mode. Only works if a game is in progress.
     */
    goToAssembleHeroes: IGoToAssembleHeroes

    /**
     * Provides an instantaneous heal to one or
     * more players. This heal will not resurrect dead players.
     */
    heal: IHeal

    /**
     * Instantly kills one or more players.
     */
    kill: IKill

    /**
     * Restarts the action list from the beginning.
     * To prevent an infinite loop, a wait action
     * must execute between the start of the action
     * list and this action.
     */
    loop: ILoop

    /**
     * Restarts the action list from the beginning
     * if this action’s condition evaluates to
     * true. If it does not, execution continues
     * with the next action. To prevent an infinite
     * loop, a wait action must execute between
     * the start of the action list and this action.
     */
    loopIf: ILoopIf

    /**
     * Restarts the action list from the beginning
     * if at least one condition in the condition
     * list is false. If all conditions are true,
     * execution continues with the next action.
     * To prevent an infinite loop, a wait action
     * must execute between the start of the action
     * list and this action.
     */
    loopIfConditionIsFalse: ILoopIfConditionIsFalse

    /**
     * Restarts the action list from the beginning
     * if all conditions in the condition list
     * is true. If any are false, execution continues
     * with the next action. To prevent an infinite
     * loop, a wait action must execute between
     * the start of the action list and this action.
     */
    loopIfConditionIsTrue: ILoopIfConditionIsTrue

    /**
     * Modifies the value of a global variable,
     * which is a variable that belongs to the game itself.
     */
    modifyGlobalVariable: IModifyGlobalVariable

    /**
     * Modifies the value of a global variable
     * at an index, which is a variable that belongs
     * to the game itself.
     */
    modifyGlobalVariableAtIndex: IModifyGlobalVariableAtIndex

    /**
     * Modifies the score (kill count) of one or
     * more players. This action only has an effect
     * in free-for-all modes.
     */
    modifyPlayerScore: IModifyPlayerScore

    /**
     * Modifies the value of a player variable,
     * which is a variable that belongs to a specific player.
     */
    modifyPlayerVariable: IModifyPlayerVariable

    /**
     * Modifies the value of a player variable
     * at an index, which is a variable that belongs
     * to a specific player.
     */
    modifyPlayerVariableAtIndex: IModifyPlayerVariableAtIndex

    /**
     * Modifies the score of one or both teams.
     * This action has not effect in free-for-all
     * modes or modes without a team score.
     */
    modifyTeamScore: IModifyTeamScore

    /**
     * Pauses the match time, players, objective
     * logic, and game mode advancement criteria
     * are unaffected by the pause.
     */
    pauseMatchTime: IPauseMatchTime

    /**
     * Plays an effect at a position in the world.
     * The lifetime of this effect is short, so
     * it does not need to be updated or destroyed.
     */
    playEffect: IPlayEffect

    /**
     * Preemptively loads the specified hero or
     * heroes into memory using the skins of the
     * specified player or players, available memory
     * permitting. Useful whenever rapid hero changing
     * is possible and the next hero is known.
     */
    preloadHero: IPreloadHero

    /**
     * Forces one or more players to press a button
     * virtually for a single frame.
     */
    pressButton: IPressButton

    /**
     * Restores the list of heroes available to
     * one or more players to the list specified
     * by the game settings. If a player’s current
     * hero becomes unavailable, the player is
     * forced to choose a different hero and respawn
     * at an appropriate spawn location.
     */
    resetPlayerHeroAvailability: IResetPlayerHeroAvailability

    /**
     * Respawns one or more players at an appropriate
     * spawn location with full health, even if
     * they were already alive.
     */
    respawn: IRespawn

    /**
     * Instantly resurrects one or more players
     * at the location they died with no transition.
     */
    resurrect: IResurrect

    /**
     * Enables or disables ability 1 for one or more players.
     */
    setAbility1Enabled: ISetAbility1Enabled

    /**
     * Enables or disables ability 2 for one or more players.
     */
    setAbility2Enabled: ISetAbility2Enabled

    /**
     * Sets the aim speed of one or more players
     * to a percentage of their normal aim speed.
     */
    setAimSpeed: ISetAimSpeed

    /**
     * Sets the damage dealt to one or more players
     * of a percentage of their raw damage dealt.
     * NOTE: Negative values do not heal enemies.
     * Damage values of 0 or lower will not trigger script events.
     */
    setDamageDealt: ISetDamageDealt
    
    /**
     * Sets the damage received of one or more
     * players to a percentage of their raw damage
     * received. NOTE: Negative values do not heal
     * enemies. Damage values of 0 or lower will
     * not trigger script events.
     */
    setDamageReceived: ISetDamageReceived

    /**
     * Sets the facing of one or more players to
     * the specified direction.
     */
    setFacing: ISetFacing

    /**
     * Stores a value into a global variable, which
     * a variable that belongs to the game itself.
     */
    setGlobalVariable: ISetGlobalVariable

    /**
     * Finds or creates an array on a global variable,
     * which is a variable that belongs to the
     * game itself, then stores a value in the
     * array at the specified index.
     */
    setGlobalVariableAtIndex: ISetGlobalVariableAtIndex

    /**
     * Sets the movement gravity for one or more
     * players to a percentage of regular movement gravity.
     */
    setGravity: ISetGravity

    /**
     * Sets the healing dealt to one or more players
     * of a percentage of their raw damage dealt.
     * NOTE: Negative values do not damage enemies.
     * Healing values of 0 or lower will not trigger script events.
     */
    setHealingDealt: ISetHealingDealt

    /**
     * Sets the healing received of one or more
     * players to a percentage of their raw healing
     * received. NOTE: Negative values do not damage
     * enemies. Healing values of 0 or lower will
     * not trigger script events.
     */
    setHealingReceived: ISetHealingReceived

    /**
     * Causes one or more players to become invisible
     * to either all other players or just enemies.
     */
    setInvisible: ISetInvisible

    /**
     * Sets the current match time (which is visible
     * at the top of the screen). This can be used
     * to shorten or extend the duration of a match
     * or to change the duration of assemble heroes or setup.
     */
    setMatchTime: ISetMatchTime
    
    /**
     * Sets the max health of one or more players
     * as a percentage of their raw max health.
     * This action will ensure that a player’s
     * current health will not exceed the new max health.
     */
    setMaxHealth: ISetMaxHealth

    /**
     * Sets the move speed of one or more players
     * to a percentage of their raw move speed.
     */
    setMoveSpeed: ISetMoveSpeed

    /**
     * Sets the text at the top center of the screen
     * that normally describes the objective to
     * a message visible to specific players.
     */
    setObjectiveDescription: ISetObjectiveDescription

    /**
     * Sets the list of heroes available to one
     * or more players. If a player’s current hero
     * becomes unavailable, the player is forced
     * to choose a different hero and respawn at
     * an appropriate spawn location.
     */
    setPlayerAllowedHeroes: ISetPlayerAllowedHeroes

    /**
     * Sets the score (kill count) of one or more
     * players. This action only has an effect
     * in free-for-all modes.
     */
    setPlayerScore: ISetPlayerScore

    /**
     * Stores a value into a player variable, which
     * is a variable that belongs to a specific player.
     */
    setPlayerVariable: ISetPlayerVariable

    /**
     * Finds or creates an array on a player variable,
     * which is a variable that belongs to a specific
     * player, then stores a value in the array
     * at the specified index.
     */
    setPlayerVariableAtIndex: ISetPlayerVariableAtIndex

    /**
     * Enables or disables primary fire for one
     * or more players.
     */
    setPrimaryFireEnabled: ISetPrimaryFireEnabled

    /**
     * Sets the projectile gravity for one or more
     * players to a percentage of regular projectile gravity.
     */
    setProjectileGravity: ISetProjectileGravity

    /**
     * Sets the projectile speed for one or more
     * players to a percentage of regular projectile speed.
     */
    setProjectileSpeed: ISetProjectileSpeed

    /**
     * Sets the duration between death and respawn
     * for one or more players that are already
     * dead when this action is executed, the change
     * takes effect on their next death.
     */
    setRespawnMaxTime: ISetRespawnMaxTime

    /**
     * Enables or disables secondary fire for one
     * or more players.
     */
    setSecondaryFireEnabled: ISetSecondaryFireEnabled

    /**
     * Sets the simulation rate for the entire
     * game, including all players, projectiles,
     * effects, and game mode logic.
     */
    setSlowMotion: ISetSlowMotion

    /**
     * Applies a status to one or more players.
     * This status will remain in effect for the
     * specified duration or until it is cleared
     * by the clear status action.
     */
    setStatus: ISetStatus

    /**
     * Sets the score for one or both teams. This
     * action has no effect in free-for-all modes
     * or modes without a team score.
     */
    setTeamScore: ISetTeamScore

    /**
     * Enables or disables the ultimate ability
     * of one or more players.
     */
    setUltimateAbilityEnabled: ISetUltimateAbilityEnabled

    /**
     * Sets the ultimate charge or one or more
     * players as a percentage of maximum charge.
     */
    setUltimateCharge: ISetUltimateCharge

    /**
     * Skips execution of a certain number of actions
     * in the action list.
     */
    skip: ISkip

    /**
     * Skips execution of a certain number of actions
     * in the action list if this action’s condition
     * evaluates to true. If it does not, execution
     * continues with the next action.
     */
    skipIf: ISkipIf

    /**
     * Displays a small message beneath the reticle
     * that is visible to specific players.
     */
    smallMessage: ISmallMessage

    /**
     * Starts accelerating one or more players
     * in a specified location.
     */
    startAccelerating: IStartAccelerating

    /**
     * Places your camera at a location, facing a direction.
     */
    startCamera: IStartCamera

    /**
     * Starts modifying how much damage one or
     * more receivers will receive from one or
     * more damagers. A reference to this damage
     * modification can be obtained from the last
     * damage modification ID value. This action
     * will fail if too many damage modifications
     * have been started.
     */
    startDamageModification: IStartDamageModification

    /**
     * Starts an instance of damage over time,
     * this DOT will persist for the specified
     * duration or until stopped by script. To
     * obtain a reference to this DOT, use the
     * last damage over time to value.
     */
    startDamageOverTime: IStartDamageOverTime

    /**
     * Starts turning one or more players to face
     * the specified direction.
     */
    startFacing: IStartFacing

    /**
     * Starts forcing one or more players to be
     * a specified hero and, if necessary, respawns
     * them immediately in their current locaiton.
     * This will be the only hero available to
     * the player or players until, the stop forcing
     * player to be hero action is executed.
     */
    startForcingPlayerToBeHero: IStartForcingPlayerToBeHero

    /**
     * Forces a team to spawn in a particular spawn
     * room, regardless of the sapwn room normally
     * used by the game mode. This action only
     * has an effect in Assault, Hybrid, and Payload Maps.
     */
    startForcingSpawnRoom: IStartForcingSpawnRoom

    /**
     * Defines minimum and maximum movement input
     * values for one or more players. Possibly
     * forcing or preventing movement.
     */
    startForcingThrottle: IStartForcingThrottle

    /**
     * Starts an instance of damage over time,
     * this HOT will persist for the specified
     * duration or until stopped by script. To
     * obtain a reference to this HOT, use the
     * last damage over time to value.
     */
    startHealOverTime: IStartHealOverTime

    /**
     * Forces one or more players to hold a button
     * virtually until stopped by the stop holding button action.
     */
    startHoldingButton: IStartHoldingButton

    /**
     * Stops the acceleration started by the start
     * accelerating action for one or more players.
     */
    stopAccelerating: IStopAccelerating

    /**
     * Stops the all damage modifications that
     * were started using the start damage modification action.
     */
    stopAllDamageModifications: IStopAllDamageModifications

    /**
     * Stops all damage over time started by the
     * start damage over time or one or more players.
     */
    stopAllDamageOverTime: IStopAllDamageOverTime

    /**
     * Stops all heal over time started by the
     * start heal over time or one or more players.
     */
    stopAllHealOverTime: IStopAllHealOverTime

    /**
     * Stops all forced camera positions started
     * by the start camera or one or more players.
     */
    stopCamera: IStopCamera

    /**
     * Stops an in-progress chase of a global variable,
     * leaving it at its current value.
     */
    stopChasingGlobalVariable: IStopChasingGlobalVariable

    /**
     * Stops an in-progress chase of a player variable,
     * leaving it at its current value.
     */
    stopChasingPlayerVariable: IStopChasingPlayerVariable

    /**
     * Stops a damage modification that was started
     * by the start damage modification action
     */
    stopDamageModification: IStopDamageModification

    /**
     * Stops an instance of damage over time that
     * was started by the start damage over time action
     */
    stopDamageOverTime: IStopDamageOverTime

    /**
     * Stops the turning started by the start facing
     * action for or one or more players.
     */
    stopFacing: IStopFacing

    /**
     * Stops forcing one or more players to be
     * a specified hero. This will not respawn
     * the player or players, but it will restore
     * their availablity the next time they go
     * to select a hero.
     */
    stopForcingPlayerToBeHero: IStopForcingPlayerToBeHero

    /**
     * Undoes the effect of start forcing spawn
     * room action for the specified team.
     */
    stopForcingSpawnRoom: IStopForcingSpawnRoom

    /**
     * Undoes the effect of start forcing throttle
     * action for one or more players
     */
    stopForcingThrottle: IStopForcingThrottle

    /**
     * Stops an instance of heal over time that
     * was started by the start heal over time action
     */
    stopHealOverTime: IStopHealOverTime

    /**
     * Undoes the effect of the start holding button
     * action for one or more players.
     */
    stopHoldingButton: IStopHoldingButton

    /**
     * Teleports one or more players to the specified location.
     */
    teleport: ITeleport

    /**
     * Unpauses the match time.
     */
    unpauseMatchTime: IUnpauseMatchTime

    /**
     * Pauses the execution of the action list,
     * unless the wait is interrupted. The remainder
     * of the actions will execute after the pause.
     */
    wait: IWait
}