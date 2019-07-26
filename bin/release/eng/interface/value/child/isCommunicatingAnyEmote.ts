import {
    ValuePlayerType
} from '../../../type'

/**
 * Whether a player is using a emote.
 */
export interface IIsCommunicatingAnyEmote {
    /**
     * Player - The player whose emoting status
     * to check. Can use most player based Value
     * Syntax to retrieve this value.
     */
    player: ValuePlayerType
}