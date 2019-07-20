import {
    ValueTeamType,
    ValueVectorType,
    ValueNumberType,
    ValueLosCheckType,
} from '../../../type'

/**
 * {488}
 */
export interface IPlayersWithinRadius {
    /**
     * {653}
     */
    center: ValueVectorType
    /**
     * {654}
     */
    radius: ValueNumberType
    /**
     * {655}
     */
    team: ValueTeamType
    /**
     * {656}
     */
    losCheck: ValueLosCheckType
}