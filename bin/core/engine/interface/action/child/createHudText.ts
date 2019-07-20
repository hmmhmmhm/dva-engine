import {
    ValuePlayerType,
    ValueColorType,
    ValueNumberType,
    ValueStringType,
    ValueLocationType,
    ValueHudTextReevaluationType,
    ValueStringParamType,
} from '../../../type'

import { INull } from '../../value'

/**
 * {14}
 */
export interface ICreateHudText {
    /**
     * {155}
     */
    visibleTo: ValuePlayerType
    /**
     * {156}
     */
    header: ValueStringType
    /**
     * {157}
     */
    subHeader: ValueStringParamType
    /**
     * {158}
     */
    text: ValueStringParamType
    /**
     * {159}
     */
    location: ValueLocationType
    /**
     * {160}
     */
    sortOrder: ValueNumberType
    /**
     * {161}
     */
    headerColor: ValueColorType
    /**
     * {162}
     */
    subHeaderColor: ValueColorType
    /**
     * {163}
     */
    textColor: ValueColorType
    /**
     * {140}
     */
    reevaluation: ValueHudTextReevaluationType
}