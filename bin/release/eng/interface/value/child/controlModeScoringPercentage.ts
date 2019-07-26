import { ValueTeamType } from '../../../type'

/**
 * The score percentage for the specified team
 * in the control mode.
 */
export interface IControlModeScoringPercentage {

    /**
     * Team - You can specify any Team Syntax to
     * define which team reported when defining this value.
     */
    team: ValueTeamType
}