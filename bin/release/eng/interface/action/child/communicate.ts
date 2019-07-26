import { ValuePlayerType,
    ValueCommunicationType,
} from '../../../type'

/**
 * Causes one or more players to use an emote,
 * voice line, or other equipped communication.
 */
export interface ICommunicate {
    /**
     * Player - The player or players to perform
     * the communication. Can use most Player based Value Syntax.
     */
    player: ValuePlayerType
    /**
     * Type - The type of communication. Can use
     * any equipped emote, equipped voice line,
     * or any other communication effect.
     */
    type: ValueCommunicationType
}