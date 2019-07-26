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
     * {154}
     */
    visibleTo: ValuePlayerType
    /**
     * {155}
     */
    header: ValueStringType
    /**
     * {156}
     */
    subHeader: ValueStringParamType
    /**
     * {157}
     */
    text: ValueStringParamType
    /**
     * {158}
     */
    location: ValueLocationType
    /**
     * {159}
     */
    sortOrder: ValueNumberType
    /**
     * {160}
     */
    headerColor: ValueColorType
    /**
     * {161}
     */
    subHeaderColor: ValueColorType
    /**
     * {162}
     */
    textColor: ValueColorType
    /**
     * {139}
     */
    reevaluation: ValueHudTextReevaluationType
}