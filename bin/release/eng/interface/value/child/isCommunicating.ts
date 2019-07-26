import {
    ValuePlayerType,
    ValueCommunicationType
} from '../../../type'

/**
 * Whether a player is using a specific communication
 * type (such as emote, using a voice line, etc.).
 */
export interface IIsCommunicating {
    /**
     * Player - The player whose communication
     * status to check. Can use most player based
     * Value Syntax to retrieve this value.
     */
    player: ValuePlayerType
    /**
     * Type - The type of communication to consider.
     * The duration of emotes is exact, the duration
     * of voice lines is assumed to be 4 seconds,
     * and all other durations are assumed to be
     * 2 seconds. Any of the four emote slots,
     * four voice lines slots, or any standard
     * communication (Need healing, Ultimate Status,
     * etc.) can be designated.
     */
    type: ValueCommunicationType
}