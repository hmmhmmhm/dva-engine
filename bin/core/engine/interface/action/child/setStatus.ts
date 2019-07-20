import {
    ValuePlayerType,
    ValueAssisterParamType,
    ValueStatusType,
    ValueNumberType,
} from '../../../type'
/**
 * {91}
 */
export interface ISetStatus {
    /**
     * {269}
     */
    player: ValuePlayerType
    /**
     * {270}
     */
    assister: ValueAssisterParamType
    /**
     * {271}
     */
    status: ValueStatusType
    /**
     * {272}
     */
    duration: ValueNumberType
}