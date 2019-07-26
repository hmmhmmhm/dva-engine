import { ValuePlayersParamType } from '../../../type'

/**
 * Undoes the effect of the disable built-in
 * game mode respawning for one or more players.
 */
export interface IEnableBuiltInGameModeRespawning {
    /**
     * Player - The player or players whose respawning
     * is affected. Can use most Player based Value
     * Syntax for this value.
     */
    players: ValuePlayersParamType
}