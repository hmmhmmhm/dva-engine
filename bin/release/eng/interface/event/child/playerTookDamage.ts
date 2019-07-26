import {
    TeamConstantType,
    EventPlayerType
} from '../../../type'

/**
 * The PLAYER TOOK DAMAGE event attribute will
 * affect the specified players who received
 * damage in the game environment.
 */
export interface IPlayerTookDamage {
    team: TeamConstantType
    player: EventPlayerType
}