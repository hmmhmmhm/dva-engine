import {
    ValueTeamType,
    ValueVectorType,
    ValueNumberType,
    ValueLosCheckType,
} from '../../../type'

/**
 * {487}
 */
export interface IPlayersWithinRadius {
    /**
     * {649}
     */
    center: ValueVectorType
    /**
     * {650}
     */
    radius: ValueNumberType
    /**
     * {651}
     */
    team: ValueTeamType
    /**
     * {652}
     */
    losCheck: ValueLosCheckType
}