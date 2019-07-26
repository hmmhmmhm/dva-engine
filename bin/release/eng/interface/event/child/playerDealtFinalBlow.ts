import {
    TeamConstantType,
    EventPlayerType
} from '../../../type'

/**
 * The PLAYER DEALT FINAL BLOW event attribute
 * will affect the specified players who successfully
 * dealt the lethal damage against another
 * player in the game environment.
 */
export interface IPlayerDealtFinalBlow {
    team: TeamConstantType
    player: EventPlayerType
}