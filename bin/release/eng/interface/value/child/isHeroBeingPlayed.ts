import {
    ValueHeroType,
    ValueTeamType,
} from '../../../type'

/**
 * Whether a specific hero is being played
 * (either on a team or in the match).
 */
export interface IIsHeroBeingPlayed {
    /**
     * Hero - The hero to check for play. Can use
     * most Hero based Value Syntax to provide this value.
     */
    hero: ValueHeroType
    /**
     * Team - The team or teams on which to check
     * for the hero being played. Can use most
     * Team based Value Syntax to provide this value.
     */
    team: ValueTeamType
}