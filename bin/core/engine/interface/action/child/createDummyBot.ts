import { ValueHeroType, ValueTeamType, SlotRangeType, ValueVectorType } from '../../../type'

/**
 * {728}
 */
export interface ICreateDummyBot {
    /**
     * {729}
     */
    hero: ValueHeroType
    /**
     * {730}
     */
    team: ValueTeamType
    /**
     * {731}
     */
    slot: SlotRangeType
    /**
     * {732}
     */
    position: ValueVectorType
    /**
     * {733}
     */
    facing: ValueVectorType
}