import {
    TeamConstantType,
    EventPlayerType
} from '../../../type'

/**
 * The PLAYER EARNED ELIMINATION event attribute
 * will affect the specified players who successfully
 * score an elimination in the game environment.
 */
export interface IPlayerEarnedElimination {
    team: TeamConstantType
    player: EventPlayerType
}