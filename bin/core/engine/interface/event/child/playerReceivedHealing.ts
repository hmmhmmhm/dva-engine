import {
    ValueTeamType,
    ValuePlayerType,
} from '../../../type'

/**
 * {708}
 */
export interface IPlayerReceivedHealing {
    /**
     * {709}
     */
    team: ValueTeamType
    /**
     * {710}
     */
    player: ValuePlayerType
}