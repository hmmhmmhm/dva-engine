import {
    ValuePlayersParamType,
    ValuePlayerType,
    ValueArrayType,
    ValueNumberType,
    ValueDamageModificationReevaluationType
} from '../../../type'

/**
 * {100}
 */
export interface IStartDamageModification {
    /**
     * {289}
     */
    receivers: ValuePlayersParamType
    /**
     * {290}
     */
    damagers: ValuePlayersParamType
    /**
     * {291}
     */
    damagePercent: ValueNumberType
    /**
     * {284}
     */
    reevaluation: ValueDamageModificationReevaluationType
}