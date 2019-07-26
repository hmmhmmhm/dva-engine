import { ValuePlayerType } from '../../../type'

/**
 * The team of a player. If the game mode is
 * free-for-all, the team is considered to be all.
 */
export interface ITeamOf {
    /**
     * Player - The player whose team to acquire.
     * Can use most Player based Value Syntax to
     * provide this value.
     */
    player: ValuePlayerType
}