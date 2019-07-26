import { ValueVectorType } from '../../../type'
import { ValueTeamType } from '../../../type'

/**
 * The player closest to a position, optionally
 * restricted by team.
 */
export interface IClosestPlayerTo {

    /**
     * Center - The position to which to measure
     * proximity. Can use most Value Syntax related
     * to reporting a position in the map.
     */
    center: ValueVectorType

    /**
     * Team - You can specify any Team Syntax to
     * restrict which players is reported when
     * defining this value.
     */
    team: ValueTeamType
}