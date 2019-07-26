import {
    TeamConstantType,
    EventPlayerType
} from '../../../type'

/**
 * {340}
 */
export interface IPlayerTookDamage {
    team: TeamConstantType
    player: EventPlayerType
}