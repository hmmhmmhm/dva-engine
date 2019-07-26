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
     * {288}
     */
    receivers: ValuePlayersParamType
    /**
     * {289}
     */
    damagers: ValuePlayersParamType
    /**
     * {290}
     */
    damagePercent: ValueNumberType
    /**
     * {283}
     */
    reevaluation: ValueDamageModificationReevaluationType
}