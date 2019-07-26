import {
    TeamConstantType,
    EventPlayerType
} from '../../../type'

/**
 * The PLAYER DEALT DAMAGE event attribute
 * will affect the specified players who successfully
 * dealt damage against another player in the
 * game environment.
 */
export interface IPlayerDealtDamage {
    team: TeamConstantType
    player: EventPlayerType
}