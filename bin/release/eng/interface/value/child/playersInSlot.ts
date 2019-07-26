import { ValueTeamType, ValueNumberType } from '../../../type'

/**
 * The player or array of players who occupy
 * a specific slot in the game.
 */
export interface IPlayersInSlot {
    /**
     * Slot - The slot number from each to acquire
     * a player or players. In team games, each
     * team has slots 0 through 5. In free-for-all
     * games, slots are numbered 0 through 11.
     * Can use most Number based Value Syntax to
     * provide this value.
     */
    slot: ValueNumberType
    /**
     * Team - The team or teams from which to acquire
     * a player or players. Can use most Team based
     * Value Syntax to provide this value.
     */
    team: ValueTeamType
}