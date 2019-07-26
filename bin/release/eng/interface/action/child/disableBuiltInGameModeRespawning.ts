import { ValuePlayersParamType } from '../../../type'

/**
 * Disables automatic respawning for one or
 * more players, only allowing respawning by
 * scripting commands.
 */
export interface IDisableBuiltInGameModeRespawning {
    /**
     * Player - The player or players whose respawning
     * is affected. Can use most Player based Value
     * Syntax for this value.
     */
    players: ValuePlayersParamType
}