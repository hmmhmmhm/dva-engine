import {
    TeamConstantType,
    EventPlayerType
} from '../../../type'

/**
 * The ONGOING - EACH PLAYER event attribute
 * will affect the specified players in the
 * game environment.
 */
export interface IOnGoingEachPlayer {
    team: TeamConstantType
    player: EventPlayerType
}