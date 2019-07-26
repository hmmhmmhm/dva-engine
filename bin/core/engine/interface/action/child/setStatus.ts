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
     * {268}
     */
    player: ValuePlayerType
    /**
     * {269}
     */
    assister: ValueAssisterParamType
    /**
     * {270}
     */
    status: ValueStatusType
    /**
     * {271}
     */
    duration: ValueNumberType
}