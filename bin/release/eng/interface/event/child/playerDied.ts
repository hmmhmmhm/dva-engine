import {
    TeamConstantType,
    EventPlayerType
} from '../../../type'

/**
 * The PLAYER DIED event attribute will affect
 * the specified players who died in the game environment.
 */
export interface IPlayerDied {
    team: TeamConstantType
    player: EventPlayerType
}