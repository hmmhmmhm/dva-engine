import {
    ValueTeamType,
    ValueVectorType,
    ValueNumberType,
    ValueLosCheckType,
} from '../../../type'

/**
 * {486}
 */
export interface IPlayersWithinRadius {
    /**
     * {648}
     */
    center: ValueVectorType
    /**
     * {649}
     */
    radius: ValueNumberType
    /**
     * {650}
     */
    team: ValueTeamType
    /**
     * {651}
     */
    losCheck: ValueLosCheckType
}