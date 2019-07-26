import {
    ValuePlayerType
} from '.'

import {
    IGlobalVariable,
    IPlayerVariable,
    ILastCreatedEntity
} from '../../interface/value'

/**
 * {703}
 */
export type ValueEntityType
    = ValuePlayerType
    | ILastCreatedEntity
    | IGlobalVariable
    | IPlayerVariable